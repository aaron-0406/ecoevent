package com.example.backend_ecoevent.infrastructure.repositories;

import org.springframework.stereotype.Component;

import com.example.backend_ecoevent.domain.entities.User;
import com.example.backend_ecoevent.domain.repositories.UserRepository;

@Component
public class UserRepositoryImpl implements UserRepository {

    private final UserJpaRespository db;

    public UserRepositoryImpl(UserJpaRespository db) {
        this.db = db;
    }

    @Override
    public User registerUser(User user) {
        return db.save(user);
    }

    @Override
    public User updateUser(User user) {
        return db.save(user);
    }

    @Override
    public Boolean login(Integer id, String user) {
        return db.findById(id).toString().equals(user);
    }

    @Override
    public void deleteUser(Integer id) {
        db.deleteById(id);
    }

}
