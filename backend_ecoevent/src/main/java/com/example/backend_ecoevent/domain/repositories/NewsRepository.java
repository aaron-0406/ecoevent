package com.example.backend_ecoevent.domain.repositories;

import java.util.List;

import com.example.backend_ecoevent.domain.entities.News;

public interface NewsRepository {

    News createNews(News news);

    News updateNews(News event);

    void deleteNews(Integer id);

    List<News> listNews();

}
