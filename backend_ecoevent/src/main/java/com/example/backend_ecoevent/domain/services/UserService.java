package com.example.backend_ecoevent.domain.services;

import com.example.backend_ecoevent.domain.entities.User;

public interface UserService {
    User registerUser(User user);

    User updateUser(User user);

    Boolean login(String user, Integer id);

    void deleteUser(Integer id);
}
