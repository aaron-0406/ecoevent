package com.example.backend_ecoevent.repositories;

import com.example.backend_ecoevent.models.Event;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface EventRepository extends JpaRepository<Event, Integer> {
}
