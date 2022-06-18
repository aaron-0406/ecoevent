package com.example.backend_ecoevent.infrastructure.repositories;

import java.util.List;

import org.springframework.stereotype.Component;

import com.example.backend_ecoevent.domain.entities.News;
import com.example.backend_ecoevent.domain.repositories.NewsRepository;

@Component
public class NewsRepositoryImpl implements NewsRepository {

    private final NewsJpaRepository db;

    public NewsRepositoryImpl(NewsJpaRepository db) {
        this.db = db;
    }

    @Override
    public News createNews(News news) {
        return db.save(news);
    }

    @Override
    public News updateNews(News event) {
        return db.save(event);
    }

    @Override
    public void deleteNews(Integer id) {
        db.deleteById(id);
    }

    @Override
    public List<News> listNews() {
        List<News> listNewsAll = db.findAll();
        return listNewsAll;
    }

}
