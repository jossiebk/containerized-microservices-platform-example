package com.example.paymentsapi.model;

import jakarta.persistence.*;

@Entity
@Table(name = "payments")
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private String userName;
    private double amount;

    public Payment() {}

    public Long getId() { return id; }
    public String getUserName() { return userName; }
    public double getAmount() { return amount; }

    public void setId(Long id) { this.id = id; }
    public void setUserName(String userName) { this.userName = userName; }
    public void setAmount(double amount) { this.amount = amount; }
}