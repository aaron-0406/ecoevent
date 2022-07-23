package com.example.backend_ecoevent.application.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.backend_ecoevent.domain.entities.Point;
import com.example.backend_ecoevent.domain.services.PointService;

@RestController
@RequestMapping("/points")
public class PointController {

    private final PointService pointService;

    public PointController(PointService pointService) {
        this.pointService = pointService;
    }

    @PostMapping
    public ResponseEntity<Point> createPoint(@Valid @RequestBody Point point) {
        Point pointNew = pointService.createPoint(point);
        return new ResponseEntity<Point>(pointNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<Point> updatePoint(@Valid @RequestBody Point point) {
        Point pointUpdated = pointService.updatePoint(point);
        return new ResponseEntity<Point>(pointUpdated, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deletePoint(@PathVariable("id") Integer idPoint) {
        pointService.deletePoint(idPoint);
        return new ResponseEntity<String>("Point deleted", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<Point>> getMethodName() {
        List<Point> listPoint = this.pointService.listPoints();
        return new ResponseEntity<List<Point>>(listPoint, HttpStatus.OK);
    }

}
