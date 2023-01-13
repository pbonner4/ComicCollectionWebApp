package com.techelevator.dao;

import com.techelevator.model.Collections;
import com.techelevator.model.Comics;

import java.util.List;

public interface CollectionDao {

    List<Collections> findAll(int userId);

    Collections getCollectionById(int colId);

    Collections findByUserId(int userId);

    void createCollection(Collections collections, int userId);

    public List<Comics> viewComicInCollection(int collectionId);

    void deleteCollection(int collectionId);

    public void deleteComicFromCol(int collectionId, int comicId, int userId);

    void removeCollection( Collections collections, int collectionId);

    void addComicToCollection (int comicId,int collectionId, int userId);

    List<Integer> getComicCollectionIdByUser( int userId);

    List<Integer> getListOfComicIdsByCollectionId (int collectionId, int userId);
}
