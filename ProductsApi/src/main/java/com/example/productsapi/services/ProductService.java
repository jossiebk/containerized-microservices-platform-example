package com.example.productsapi.services;

import com.example.productsapi.models.Product;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ProductService {

    private List<Product> products = new ArrayList<>();

    public ProductService() {
        products.add(new Product(1, "Laptop", 1200));
        products.add(new Product(2, "Mouse", 25));
        products.add(new Product(3, "Keyboard", 75));
    }

    public List<Product> getAll() {
        return products;
    }
}