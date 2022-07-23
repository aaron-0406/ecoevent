package com.example.backend_ecoevent.domain.repositories;

import java.util.List;

import com.example.backend_ecoevent.domain.entities.Point;

public interface PointRepository {
    Point createPoint(Point point);

    Point updatePoint(Point point);

    void deletePoint(Integer id);

    List<Point> listPoints();
}
