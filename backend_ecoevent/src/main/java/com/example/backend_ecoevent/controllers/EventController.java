package com.example.backend_ecoevent.controllers;

import java.util.List;

import javax.validation.Valid;

import com.example.backend_ecoevent.models.Event;
import com.example.backend_ecoevent.services.EventService;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@RequestMapping("/event")
public class EventController {

    private final EventService eventService;

    public EventController(EventService eventService) {
        this.eventService = eventService;
    }

    @PostMapping
    public ResponseEntity<Event> createEvent(@Valid @RequestBody Event event) {
        Event eventNew = eventService.createEvent(event);
        return new ResponseEntity<Event>(eventNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Event> updateEvent(@Valid @RequestBody Event event) {
        Event eventUpdated = eventService.updateEvent(event);
        return new ResponseEntity<Event>(eventUpdated, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteEvent(@PathVariable("id") Integer idEvent) {
        eventService.deleteEvent(idEvent);
        return new ResponseEntity<String>("Event deleted", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Event>> getMethodName() {
        List<Event> listEvents = this.eventService.listEvents();
        return new ResponseEntity<List<Event>>(listEvents, HttpStatus.OK);
    }

}
