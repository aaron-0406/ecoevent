package com.example.backend_ecoevent.application.controllers;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_ecoevent.domain.entities.User;
import com.example.backend_ecoevent.domain.services.UserService;

@RestController
@RequestMapping("/user")
public class UserController {
    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping
    public ResponseEntity<User> registerUser(@Valid @RequestBody User user) {
        User userRegister = userService.registerUser(user);
        return new ResponseEntity<User>(userRegister, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<User> updateNews(@Valid @RequestBody User news) {
        User userUpdated = userService.updateUser(news);
        return new ResponseEntity<User>(userUpdated, HttpStatus.CREATED);
    }

    @PostMapping("/login")
    public ResponseEntity<Boolean> login(@Valid @RequestBody Integer id, String user) {
        Boolean validate = userService.login(user, id);
        return new ResponseEntity<Boolean>(validate, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNews(@PathVariable("id") Integer id) {
        userService.deleteUser(id);
        return new ResponseEntity<String>("User deleted", HttpStatus.OK);
    }
}
