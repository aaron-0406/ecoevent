package com.example.backend_ecoevent.infrastructure.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.example.backend_ecoevent.domain.entities.Event;

@Repository
public interface EventJpaRepository extends JpaRepository<Event, Integer> {
}
