package com.example.backend_ecoevent.infrastructure.repositories;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.backend_ecoevent.domain.entities.Event;
import com.example.backend_ecoevent.domain.repositories.EventRepository;

@Component
public class EventRepositoryImpl implements EventRepository {

    private final EventJpaRepository db;

    public EventRepositoryImpl(EventJpaRepository db) {
        this.db = db;
    }

    @Override
    public Event createEvent(Event event) {
        return db.save(event);
    }

    @Override
    public Event updateEvent(Event event) {
        return db.save(event);
    }

    @Override
    public void deleteEvent(Integer id) {
        db.deleteById(id);
    }

    @Override
    public List<Event> listEvents() {
        List<Event> listEventsAll = db.findAll();
        return listEventsAll;
    }

}
