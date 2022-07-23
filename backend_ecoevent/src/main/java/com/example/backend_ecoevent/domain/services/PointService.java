package com.example.backend_ecoevent.domain.services;

import java.util.List;

import com.example.backend_ecoevent.domain.entities.Point;

public interface PointService {
    Point createPoint(Point point);

    Point updatePoint(Point point);

    void deletePoint(Integer id);

    List<Point> listPoints();
}
