package com.example.backend_ecoevent.infrastructure.repositories;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.backend_ecoevent.domain.entities.Point;
import com.example.backend_ecoevent.domain.repositories.PointRepository;

@Component
public class PointRepositoryImpl implements PointRepository {

    private final PointJpaRepository db;

    public PointRepositoryImpl(PointJpaRepository db) {
        this.db = db;
    }

    @Override
    public Point createPoint(Point point) {
        return db.save(point);
    }

    @Override
    public Point updatePoint(Point point) {
        return db.save(point);
    }

    @Override
    public void deletePoint(Integer id) {
        db.deleteById(id);
    }

    @Override
    public List<Point> listPoints() {
        List<Point> listPointsAll = db.findAll();
        return listPointsAll;
    }

}
