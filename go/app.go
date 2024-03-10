package main

import (
	"fmt"
	"log"
	"net/http"
)

func helloWorld(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintf(w, "Hello, world!")
}

func main() {
	http.HandleFunc("/", helloWorld)

	fmt.Println("Servidor rodando na porta 8080...")
	log.Fatal(http.ListenAndServe(":8080", nil))
}
