package com.example.paymentsapi.controller;

import com.example.paymentsapi.model.Payment;
import com.example.paymentsapi.repository.PaymentRepository;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/payments")
public class PaymentsController {

    private final PaymentRepository repository;

    public PaymentsController(PaymentRepository repository) {
        this.repository = repository;
    }

    @GetMapping
    public List<Payment> getAll() {
        return repository.findAll();
    }

    @PostMapping
    public Payment create(@RequestBody Payment payment) {
        return repository.save(payment);
    }

    @GetMapping("/healthcheck")
    public String health() {
        return "Payments API OK";
    }
}