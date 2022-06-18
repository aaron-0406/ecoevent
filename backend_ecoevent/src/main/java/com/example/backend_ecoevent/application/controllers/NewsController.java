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

import com.example.backend_ecoevent.domain.entities.News;
import com.example.backend_ecoevent.domain.services.NewsService;

@RestController
@RequestMapping("/news")
public class NewsController {

    private final NewsService newsService;

    public NewsController(NewsService newsService) {
        this.newsService = newsService;
    }

    @PostMapping
    public ResponseEntity<News> createNews(@Valid @RequestBody News news) {
        News newsNew = newsService.createNews(news);
        return new ResponseEntity<News>(newsNew, HttpStatus.CREATED);
    }

    @PutMapping
    public ResponseEntity<News> updateNews(@Valid @RequestBody News news) {
        News newsUpdated = newsService.updateNews(news);
        return new ResponseEntity<News>(newsUpdated, HttpStatus.CREATED);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<String> deleteNews(@PathVariable("id") Integer idNews) {
        newsService.deleteNews(idNews);
        return new ResponseEntity<String>("News deleted", HttpStatus.OK);
    }

    @GetMapping
    public ResponseEntity<List<News>> getMethodName() {
        List<News> listNews = this.newsService.listNews();
        return new ResponseEntity<List<News>>(listNews, HttpStatus.OK);
    }

}
