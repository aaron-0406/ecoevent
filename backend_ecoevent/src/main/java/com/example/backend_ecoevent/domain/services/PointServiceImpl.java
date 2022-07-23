package com.example.backend_ecoevent.domain.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.example.backend_ecoevent.domain.entities.Point;
import com.example.backend_ecoevent.infrastructure.repositories.PointRepositoryImpl;

@Service
public class PointServiceImpl implements PointService {

    private final PointRepositoryImpl pointRepository;

    public PointServiceImpl(PointRepositoryImpl pointRepository) {
        this.pointRepository = pointRepository;
    }

    @Override
    public Point createPoint(Point point) {
        return pointRepository.createPoint(point);
    }

    @Override
    public Point updatePoint(Point point) {
        return pointRepository.updatePoint(point);
    }

    @Override
    public void deletePoint(Integer id) {
        pointRepository.deletePoint(id);
    }

    @Override
    public List<Point> listPoints() {
        List<Point> listPointsAll = pointRepository.listPoints();
        return listPointsAll;
    }

}
