package main

import (
	"encoding/json"
	"fmt"
	"net/http"
	"strconv"
)

type Product struct {
	Id    int    `json:"id"`
	Name  string `json:"name"`
	Stock int    `json:"stock"`
}

var products = []Product{
	{Id: 1, Name: "Laptop", Stock: 10},
	{Id: 2, Name: "Mouse", Stock: 50},
	{Id: 3, Name: "Keyboard", Stock: 30},
}

func getInventory(w http.ResponseWriter, r *http.Request) {
	fmt.Println("GET /api/inventory called")
	json.NewEncoder(w).Encode(products)
}

func getProductStock(w http.ResponseWriter, r *http.Request) {
	fmt.Println("GET /api/inventory/product called")
	idParam := r.URL.Query().Get("id")
	id, _ := strconv.Atoi(idParam)

	for _, p := range products {
		if p.Id == id {
			json.NewEncoder(w).Encode(p)
			return
		}
	}

	http.NotFound(w, r)
}

func healthcheck(w http.ResponseWriter, r *http.Request) {
	fmt.Println("GET /api/inventory/healthcheck called")
	json.NewEncoder(w).Encode(map[string]string{
		"status":  "Healthy",
		"service": "Inventory API",
	})
}

func withCORS(handler http.HandlerFunc) http.HandlerFunc {
    return func(w http.ResponseWriter, r *http.Request) {
        w.Header().Set("Access-Control-Allow-Origin", "*")
        w.Header().Set("Access-Control-Allow-Methods", "GET, POST, OPTIONS")
        w.Header().Set("Access-Control-Allow-Headers", "Content-Type")
        if r.Method == "OPTIONS" {
            w.WriteHeader(http.StatusOK)
            return
        }
        handler(w, r)
    }
}

func main() {
    http.HandleFunc("/api/inventory", withCORS(getInventory))
    http.HandleFunc("/api/inventory/product", withCORS(getProductStock))
    http.HandleFunc("/api/inventory/healthcheck", withCORS(healthcheck))
    fmt.Println("Inventory API esta corriendo en el puerto 5004")
    http.ListenAndServe(":5004", nil)
}