package com.example.productsapi.controllers;

import com.example.productsapi.services.ProductService;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/products")
public class ProductController {

    private final ProductService productService;

    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    @GetMapping
    public Object getAll() {
        return productService.getAll();
    }

    @GetMapping("/healthcheck")
    public Object healthcheck() {
        return new Object() {
            public final String status = "Healthy";
            public final String service = "Products API";
            public final long timestamp = System.currentTimeMillis();
        };
    }
}