package com.example.backend_ecoevent.domain.services;

import java.util.List;

import com.example.backend_ecoevent.domain.entities.Event;
import com.example.backend_ecoevent.infrastructure.repositories.EventRepositoryImpl;

import org.springframework.stereotype.Service;

@Service
public class EventServiceImpl implements EventService {

    private final EventRepositoryImpl eventRepository;

    public EventServiceImpl(EventRepositoryImpl eventRepository) {
        this.eventRepository = eventRepository;
    }

    @Override
    public Event createEvent(Event event) {
        return eventRepository.createEvent(event);
    }

    @Override
    public Event updateEvent(Event event) {
        return eventRepository.updateEvent(event);
    }

    @Override
    public void deleteEvent(Integer id) {
        eventRepository.deleteEvent(id);
    }

    @Override
    public List<Event> listEvents() {
        List<Event> listEventsAll = eventRepository.listEvents();
        return listEventsAll;
    }

}
