package com.techelevator.dao;

import com.techelevator.model.Comics;
import com.techelevator.model.marvel.Result;

import java.util.List;

public interface ComicsDao {
    List<Comics> getListOfComics();

    Result getComicById(int comicId);

    Comics getMarvelComicById(int comicId);

    List<Comics> getComicByPublisher (String comicPublisher);

    public List<Comics> getComicByTitle(String searchTerm);

    Comics getOneComic();

    List<Comics> getComicByCreator (String comicCreator);


}
