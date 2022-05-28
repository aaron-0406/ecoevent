package com.example.backend_ecoevent.services.impl;

import java.util.List;

import com.example.backend_ecoevent.models.Event;
import com.example.backend_ecoevent.repositories.EventRepository;
import com.example.backend_ecoevent.services.EventService;

import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepository eventRepository;

    public EventServiceImpl(EventRepository eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Event createEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public Event updateEvent(Event event) {
        return eventRepository.save(event);
    }

    @Override
    public void deleteEvent(Integer id) {
        eventRepository.deleteById(id);
    }

    @Override
    public List<Event> listEvents() {
        List<Event> listEventsAll = eventRepository.findAll();
        return listEventsAll;
    }

}
