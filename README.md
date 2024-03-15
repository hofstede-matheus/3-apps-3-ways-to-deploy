# 3-apps-3-ways-to-deploy

## Sobre essa apresentação

### Combinados

- Não tente reproduzir o que estou fazendo enquanto está assistindo a apresentação

## Serviços da AWS

![](./images/2023-05-05-11_15_08-15-AWS-Projects-Ideas-for-Beginners-to-Practice-in-2023.png) https://k21academy.com/amazon-web-services/overview-of-amazon-web-services-concepts/

### EC2

Serviço de Compute

IaaS - Infrastructure as a Service

Criação de máquinas virtuais sob demanda

Além das máquinas, gerenciar Redes Virtuais, Discos e Segurança

Necessidade de configuração manual, a nível de Sistema Operacional e Redes Virtuais

### ECS

Serviço de Container

PaaS - Platform as a Service

Criação de containers Docker sob demanda

Sua preocupação é com a aplicação e a plataforma que a executa, o Docker, não com a infraestrutura

## Free tier

## EC2

### Configurações

Amazon Linux 2023 AMI 2023.3.20240304.0 x86_64 HVM kernel-6.1

t3.micro

Sem keypair

Network settings

- Allow SSH traffic from anywhere
- Allow HTTPS traffic from the internet
- Allow HTTP traffic from the internet

Storage
1x 8gb gp3

### Conectar

Recomendo via EC2 Instance Connect, pra coisas simples

### Dependências

```bash
sudo yum install git
python3 -m ensurepip --upgrade
pip3 install gunicorn
sudo yum install nginx
```

É necessário [configurar chaves SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) e [adicionar no Github](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```bash
ssh-keygen -t ed25519 -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

### Clonar o repositório

```bash
git clone git@github.com:hofstede-matheus/3-apps-3-ways-to-deploy.git
cd 3-apps-3-ways-to-deploy/python/
```

## Python

```bash
pip3 install -r requirements.txt
gunicorn -b 0.0.0.0:8000 app:app
```

## Nginx

Aparentemente em novas versões do Nginx, o arquivo de configuração é o nginx.conf, logo vamos comentar o `server` que vem por padrão:

```bash
sudo nano /etc/nginx/nginx.conf
```

E utilizar esse:

```nginx
server {
    listen 80;
    server_name seu_endereço_de_ip_ou_domínio;

    location / {
        proxy_pass http://127.0.0.1:8000;
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
    }
}
```

Ctrl + O pra salvar

Ctrl + X pra sair

```bash
sudo systemctl restart nginx
```

### Outras configurações

Load balancer

Configurar Elastic IP

## ECS

Na sua máquina

```bash
docker build -t nodeapp .
docker run -dit --name nodeapp -p 3000:3000  nodeapp
```
