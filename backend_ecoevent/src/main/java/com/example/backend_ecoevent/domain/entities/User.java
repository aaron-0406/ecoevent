package com.example.backend_ecoevent.domain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer id_user;

    @Column(name = "dni", length = 8)
    private String dni;

    @Column(name = "name", length = 40)
    private String name;

    @Column(name = "lastName", length = 40)
    private String lastName;

    @Column(name = "user_name", length = 40)
    private String user_name;

    @Column(name = "password", length = 40)
    private String password;

    public User() {
    }

    public User(Integer id_user, String dni, String name,
            String lastName, String user_name, String password) {
        this.id_user = id_user;
        this.dni = dni;
        this.name = name;
        this.lastName = lastName;
        this.user_name = user_name;
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

    public String getUserName() {
        return this.user_name;
    }

    public void setUserName(String user_name) {
        this.user_name = user_name;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
}
