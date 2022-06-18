package com.example.backend_ecoevent.domain.services;

import java.util.List;

import com.example.backend_ecoevent.domain.entities.Event;

public interface EventService {
    Event createEvent(Event event);

    Event updateEvent(Event event);

    void deleteEvent(Integer id);

    List<Event> listEvents();
}
