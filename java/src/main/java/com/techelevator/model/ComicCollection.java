package com.techelevator.model;

public class ComicCollection {

    private int collectionId;
    private int comicId;


    public ComicCollection(int collectionId, int comicId) {
        this.collectionId = collectionId;
        this.comicId = comicId;

    }

    public ComicCollection() {


    }

    public int getComicId() {
        return comicId;
    }

    public void setComicId(int comicId) {
        this.comicId = comicId;
    }

    public int getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(int collectionId) {
        this.collectionId = collectionId;
    }
}
