package com.techelevator.model;

public class ComicCollections {

    private int comicCollectionId;
    private int collectionId;
    private int comicId;


    public ComicCollections(int collectionId, int comicId, int comicCollectionId) {
        this.collectionId = collectionId;
        this.comicId = comicId;
        this.comicCollectionId = comicCollectionId;

    }

    public ComicCollections() {


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

    public int getComicCollectionId() {
        return comicCollectionId;
    }

    public void setComicCollectionId(int comicCollectionId) {
        this.comicCollectionId = comicCollectionId;
    }
}
