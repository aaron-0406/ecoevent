package com.example.backend_ecoevent.services;

import java.util.List;

import com.example.backend_ecoevent.models.Event;

public interface EventService {
    Event createEvent(Event event);
    Event updateEvent(Event event);
    Event deleteEvent(Integer id);
    List<Event> listEvents();
}
