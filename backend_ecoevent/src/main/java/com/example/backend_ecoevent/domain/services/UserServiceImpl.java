package com.example.backend_ecoevent.domain.services;

import com.example.backend_ecoevent.domain.entities.User;
import com.example.backend_ecoevent.infrastructure.repositories.UserRepositoryImpl;

public class UserServiceImpl implements UserService {
    private final UserRepositoryImpl userRepository;

    public UserServiceImpl(UserRepositoryImpl userRepository) {
        this.userRepository = userRepository;
    }

    @Override
    public User registerUser(User user) {
        return userRepository.registerUser(user);
    }

    @Override
    public User updateUser(User user) {
        return userRepository.updateUser(user);
    }

    @Override
    public Boolean login(String user, Integer id) {
        return userRepository.login(id, user);
    }

    @Override
    public void deleteUser(Integer id) {
        userRepository.deleteUser(id);
    }
}
