package com.example.backend_ecoevent.domain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name = "point")
public class Point {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_point")
    private Integer id_point;

    @Column(name = "address", length = 40)
    private String address;

    @Column(name = "schedule", length = 40)
    private String schedule;

    @Column(name = "district", length = 40)
    private String district;

    public Point() {
    }

    public Point(Integer id_point, String address,
            String schedule, String district) {
        this.id_point = id_point;
        this.address = address;
        this.schedule = schedule;
        this.district = district;
    }

    public Integer getId_point() {
        return this.id_point;
    }

    public void setId_point(Integer id_point) {
        this.id_point = id_point;
    }

    public String getAddress() {
        return this.address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getSchedule() {
        return this.schedule;
    }

    public void setSchedule(String schedule) {
        this.schedule = schedule;
    }

    public String getDistrict() {
        return this.district;
    }

    public void setDistrict(String district) {
        this.district = district;
    }
}
