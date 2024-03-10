# 3-apps-3-ways-to-deploy

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

### Dependências

```bash
sudo yum install git
python3 -m ensurepip --upgrade
```

É necessário [configurar chaves SSH](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/generating-a-new-ssh-key-and-adding-it-to-the-ssh-agent) e [adicionar no Github](https://docs.github.com/pt/authentication/connecting-to-github-with-ssh/adding-a-new-ssh-key-to-your-github-account)

```bash
ssh-keygen -t ed25519-sk -C "your_email@example.com"
cat ~/.ssh/id_ed25519.pub
```

### Clonar o repositório

```bash
git clone git@github.com:hofstede-matheus/3-apps-3-ways-to-deploy.git
```

## Python

```bash
pip3 install -r requirements.txt
python3 app.py
```
