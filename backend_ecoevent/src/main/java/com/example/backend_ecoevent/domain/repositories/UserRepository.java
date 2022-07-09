package com.example.backend_ecoevent.domain.repositories;

import com.example.backend_ecoevent.domain.entities.User;

public interface UserRepository {
    User registerUser(User user);

    User updateUser(User user);

    Boolean login(Integer id, String user);

    void deleteUser(Integer id);
}
