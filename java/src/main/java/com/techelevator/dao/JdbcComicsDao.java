package com.techelevator.dao;

import com.techelevator.model.Comics;
import com.techelevator.model.marvel.Data;
import com.techelevator.model.marvel.Result;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;
import com.techelevator.services.ComicService;
import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcComicsDao implements ComicsDao {

    private JdbcTemplate jdbcTemplate;
    private ComicService comicService;

    public JdbcComicsDao(JdbcTemplate jdbcTemplate, ComicService comicService){
        this.jdbcTemplate = jdbcTemplate;
        this.comicService = comicService;
    }

    @Override
    public Result getComicById(int comicId) {

        return comicService.getComic(comicId);
    }


    @Override
    public Comics getOneComic() {
        Result data;

        data = comicService.getAllComics();

        return mapFromResult(data);
    }
    @Override
    public Comics getMarvelComicById(int comicId){
        Result result = comicService.getComic(comicId);
       Comics comics = new Comics();
        comics = mapFromResult(result);

        return comics;
    }

    @Override
    public List<Comics> getComicByCreator(String comicCreator) {
        return null;
    }

    @Override
    public List<Comics> getComicByPublisher(String comicPublisher) {
        return null;
    }

    public List<Comics> getComicByTitle(String searchTerm){
        List<Result> resultList = comicService.getComicsMatchingTitle(searchTerm);
        List<Comics> comicsList = new ArrayList<Comics>();


        for (Result result : resultList){

            comicsList.add(mapFromResult(result));
        }

        return comicsList;
    }

    @Override
    public List<Comics> getListOfComics() {
        List<Comics> comicsList = new ArrayList<>();
        return comicsList;
    }

    private Comics mapToRowSet(SqlRowSet rowSet){
        Comics comics = new Comics();
        comics.setComicId(rowSet.getInt("comic_id"));
        comics.setComicTitle(rowSet.getString("comic_title"));
        comics.setComicDescription(rowSet.getString("comic_description"));
        //comics.setComicDate(rowSet.getDate("comic_date"));
        //comics.setComicPrice(rowSet.getInt("comic_price"));
        //comics.setComicCreator(rowSet.getString("comic_creator"));
        //comics.setComicPublisher(rowSet.getString("comic_publisher"));
        return comics;
    }

    private Comics mapFromResult(Result result){
        Comics comics = new Comics();
        comics.setComicId(result.getId());
        comics.setComicTitle(result.getTitle());
        comics.setComicDescription(result.getDescription());
        comics.setComicDate(result.getDates().get(0));
        comics.setComicCreator(result.getCreators());
        comics.setComicCharacters(result.getCharacters());
        comics.setComicPublisher("Marvel");
        comics.setComicThumbnail(result.getThumbnail());
        return comics;
    }
}
