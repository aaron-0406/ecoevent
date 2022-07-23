package com.example.backend_ecoevent.domain.entities;

import java.util.Date;

import javax.persistence.*;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "event")
public class Event {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_event")
    private Integer id_event;

    @NotNull
    @Column(name = "title", nullable = false, length = 40)
    private String title;

    @Column(name = "description", nullable = true, length = 150)
    private String description;

    @NotNull
    @Column(name = "place", nullable = false, length = 80)
    private String place;

    @NotNull
    @Column(name = "hour", nullable = false, length = 10)
    private String hour;

    @NotNull
    @Column(name = "date", nullable = false, length = 10)
    private String date;

    @Column(name = "urlEventImage", nullable = false, length = 150)
    private String urlEventImage;

    public Event() {
    }

    public Event(Integer id_event, String title, String description, String place, String hour, String date,
            String urlEventImage) {
        this.id_event = id_event;
        this.title = title;
        this.description = description;
        this.place = place;
        this.hour = hour;
        this.date = date;
        this.urlEventImage = urlEventImage;
    }

    public Integer getId_event() {
        return this.id_event;
    }

    public void setId_event(Integer id_event) {
        this.id_event = id_event;
    }

    public String getTitle() {
        return this.title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return this.description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPlace() {
        return this.place;
    }

    public void setPlace(String place) {
        this.place = place;
    }

    public String getHour() {
        return this.hour;
    }

    public void setHour(String hour) {
        this.hour = hour;
    }

    public String getDate() {
        return this.date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public String getUrlEventImage() {
        return this.urlEventImage;
    }

    public void setUrlEventImage(String urlEventImage) {
        this.urlEventImage = urlEventImage;
    }

}
