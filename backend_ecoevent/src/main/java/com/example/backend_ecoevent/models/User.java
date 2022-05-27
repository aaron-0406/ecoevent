package com.example.backend_ecoevent.models;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "user")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_user")
    private Integer id_user;

    @NotNull
    @Column(name = "name", nullable = false, length = 40)
    private String name;

    @Column(name = "lastName", nullable = true, length = 40)
    private String lastName;

    @NotNull
    @Column(name = "email", nullable = false, length = 30)
    private String email;

    @NotNull
    @Column(name = "password", nullable = false, length = 16)
    private String password;

    @NotNull
    @Column(name = "urlProfileImage", nullable = true, length = 150)
    private String urlProfileImage;

    @NotNull
    @Column(name = "typeUser", nullable = false, length = 20)
    private String typeUser;

    public User() {
    }

    public User(Integer id_user, String name, String lastName, String email, String password, String urlProfileImage,
            String typeUser) {
        this.id_user = id_user;
        this.name = name;
        this.lastName = lastName;
        this.email = email;
        this.password = password;
        this.urlProfileImage = urlProfileImage;
        this.typeUser = typeUser;
    }

    public Integer getId_user() {
        return this.id_user;
    }

    public void setId_user(Integer id_user) {
        this.id_user = id_user;
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

    public String getEmail() {
        return this.email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getUrlProfileImage() {
        return this.urlProfileImage;
    }

    public void setUrlProfileImage(String urlProfileImage) {
        this.urlProfileImage = urlProfileImage;
    }

    public String getTypeUser() {
        return this.typeUser;
    }

    public void setTypeUser(String typeUser) {
        this.typeUser = typeUser;
    }

}
