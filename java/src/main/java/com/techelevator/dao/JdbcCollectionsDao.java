package com.techelevator.dao;


import com.techelevator.model.Collections;
import com.techelevator.model.ComicCollection;
import com.techelevator.model.Comics;
import com.techelevator.model.User;
import com.techelevator.model.marvel.Result;
import com.techelevator.services.ComicService;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.support.rowset.SqlRowSet;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

@Component
public class JdbcCollectionsDao implements CollectionDao{

    private ComicService comicService;
    private final JdbcTemplate jdbcTemplate;

    public JdbcCollectionsDao(JdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Collections> findAll(int userId) {
        List<Collections> collections = new ArrayList<>();

        String sql = "SELECT * FROM collections WHERE user_id = ?";
        SqlRowSet listSql = jdbcTemplate.queryForRowSet(sql, userId);

        while (listSql.next()){

            collections.add(mapRowToCollection(listSql));
        }

        return collections;
    }

    @Override
    public Collections getCollectionById(int colId) {
        Collections collections = new Collections();

        String sql = "SELECT * FROM collections WHERE collection_id = ?";

        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, colId);

        if (rowSet.next()){
            collections = mapRowToCollection(rowSet);
        }

        return collections;
    }

    @Override
    public List<Integer> getComicCollectionIdByUser(int userId) {
        List<Integer> collectionList = new ArrayList<>();
        String sql = "SELECT collection_id FROM collections WHERE user_id = ?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, Collections.class, userId);
        while (results.next()){
            collectionList.add(results.getInt("collection_id"));
        }
        return collectionList;
    }

    @Override
    public Collections findByUserId(int userId) {
        Collections collections = new Collections();

        String sql = "SELECT * FROM collections WHERE user_id = ?;";

        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, userId);

        if (rowSet.next()){
            collections = mapRowToCollection(rowSet);
        }

        return collections;
    }

    @Override
    public List<Comics> viewComicInCollection(int collectionId) {
        List<Comics> colComics = new ArrayList<>();
        ComicCollection comicId;

        String sql = "SELECT * FROM comic_collections WHERE collection_id = ?;";

        SqlRowSet rowSet = jdbcTemplate.queryForRowSet(sql, collectionId);

        if (rowSet.next()){
            comicId = mapRowToComicCollection(rowSet);

            colComics.add(mapFromResult(comicService.getComic(comicId.getComicId())));
        }

        return colComics;
    }

    @Override
    public void createCollection(Collections collections, int userId) {
//        JdbcUserDao jdbcUserDao = new JdbcUserDao(jdbcTemplate);
//        User user = jdbcUserDao.getUserById(userId);

        //may have to write a conditional to say that the collection will only be created if it is a logged in user

        String sql = "INSERT INTO collections(collection_issue_name, " +
                "tradeable, is_favorited, user_id, is_private, collection_description, is_disabled)" +
                "VALUES (?,?,?,?,?,?,?);";
        jdbcTemplate.update(sql, collections.getCollectionIssueName(),
                collections.isTradeable(), collections.isFavorite(), userId, collections.isPrivateCol(), collections.getCollectionDescription(), collections.isDisabled());
    }

    @Override
    public void deleteCollection(int collectionId) {
        String sql = "DELETE FROM collections WHERE collection_id = ?;";
        jdbcTemplate.update(sql,collectionId);
    }

    @Override
    public void deleteComicFromCol(int collectionId, int comicId, int userId) {

        String sql2 = "SELECT user_id FROM collections WHERE collection_id = ?;";


        int userIdFromCollection = jdbcTemplate.queryForObject(sql2, Integer.class ,collectionId);

        if (userId == userIdFromCollection){
            String sql = "DELETE FROM comic_collections WHERE collection_id = ? and comic_id = ?;";
            jdbcTemplate.update(sql,collectionId, comicId);
        }
    }

    @Override
    public List<Integer> getListOfComicIdsByCollectionId(int collectionId, int userId) {
        List<Integer> comicIdList = new ArrayList<>();
        String sql = "SELECT cc.comic_id FROM collections AS c JOIN comic_collections AS " +
                "cc ON cc.collection_id = c.collection_id WHERE c.collection_id = ? AND c.user_id =?;";
        SqlRowSet results = jdbcTemplate.queryForRowSet(sql, collectionId, userId);
        while (results.next()) {
            int thisId = results.getInt("comic_id");
            comicIdList.add(results.getInt("comic_id"));
        }
        return comicIdList;
    }

    @Override
    public void removeCollection( Collections collections, int collectionId) {
        String sql = "UPDATE collections SET is_disabled = ? WHERE collection_id = ?;";
        jdbcTemplate.update(sql,collections.isDisabled(), collectionId);

    }

    @Override
    public void addComicToCollection(int comicId, int collectionId, int userId) {
        String sql2 = "SELECT user_id FROM collections WHERE collection_id = ?;";
        int userIdFromCollection = jdbcTemplate.queryForObject(sql2,Integer.class, collectionId);
        if (userId == userIdFromCollection){
            String sql = "INSERT INTO comic_collections(comic_id, collection_id) VALUES (?, ?) ";
            jdbcTemplate.update(sql, comicId, collectionId);
        }

    }



    private Collections mapRowToCollection(SqlRowSet rs) {
        Collections collections = new Collections();
        collections.setCollectionId(rs.getInt("collection_id"));
        collections.setCollectionIssueName(rs.getString("collection_issue_name"));
        collections.setTradeable(rs.getBoolean("tradeable"));
        collections.setFavorite(rs.getBoolean("is_favorited"));
        collections.setUserId(rs.getInt("user_id"));
        collections.setPrivateCol(rs.getBoolean("is_private"));
        collections.setCollectionDescription(rs.getString("collection_description"));
        collections.setDisabled(rs.getBoolean("is_disabled"));

        return collections;
    }

    private ComicCollection mapRowToComicCollection(SqlRowSet rs) {
        ComicCollection comicCollection = new ComicCollection();
        comicCollection.setCollectionId(rs.getInt("collection_id"));
        comicCollection.setCollectionId(rs.getInt("comic_id"));


        return comicCollection;
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
