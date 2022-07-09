package com.example.backend_ecoevent.domain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer id_user;

    @NotNull
    @Column(name = "dni", nullable = false, length = 8)
    private String dni;

    @NotNull
    @Column(name = "name", nullable = false, length = 40)
    private String name;

    @NotNull
    @Column(name = "lastName", nullable = false, length = 40)
    private String lastName;

    @NotNull
    @Column(name = "user", nullable = false, length = 40)
    private String user;

    @NotNull
    @Column(name = "password", nullable = false, length = 40)
    private String password;

    public User() {
    }

    public User(Integer id_user, String dni, String name,
            String lastName, String user, String password) {
        this.id_user = id_user;
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.user = user;
        this.password = password;
    }

    public Integer getId_user() {
        return this.id_user;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
    }

    public String getDni() {
        return this.dni;
    }

    public void setDni(String dni) {
        this.dni = dni;
    }

    public String getName() {
        return this.name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getLastName() {
        return this.lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getUser() {
        return this.user;
    }

    public void setUser(String user) {
        this.user = user;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
