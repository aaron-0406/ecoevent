package com.example.backend_ecoevent.domain.entities;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;

@Entity
@Table(name = "news")
public class News {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(name = "id_news")
    private Integer id_news;

    @NotNull
    @Column(name = "title", nullable = false, length = 40)
    private String title;

    @Column(name = "description", nullable = true, length = 150)
    private String description;

    @NotNull
    @Column(name = "autor", nullable = false, length = 150)
    private String autor;

    public News() {
    }

    public News(Integer id_news, String title, String description, String autor) {
        this.id_news = id_news;
        this.title = title;
        this.description = description;
        this.autor = autor;
    }

    public Integer getId_news() {
        return this.id_news;
    }

    public void setId_news(Integer id_news) {
        this.id_news = id_news;
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

    public String getAutor() {
        return this.autor;
    }

    public void setAutor(String autor) {
        this.autor = autor;
    }

}
