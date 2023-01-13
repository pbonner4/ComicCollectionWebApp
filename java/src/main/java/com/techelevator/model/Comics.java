package com.techelevator.model;

import com.techelevator.model.marvel.*;

public class Comics {
    private int comicId;
    private String comicTitle;
    private String comicDescription;
    private Date comicDate;
    private Creators comicCreator;
    private String comicPublisher;
    private Thumbnail comicThumbnail;
    private Characters comicCharacters;


    public Comics(int comicId, String comicTitle, String comicDescription, Date comicDate, Creators comicCreator, String comicPublisher, Thumbnail comicThumbnail) {
        this.comicId = comicId;
        this.comicTitle = comicTitle;
        this.comicDescription = comicDescription;
        this.comicDate = comicDate;
        this.comicCreator = comicCreator;
        this.comicPublisher = comicPublisher;
        this.comicThumbnail = comicThumbnail;
    }

    public Comics (){

    }

    public int getComicId() {
        return comicId;
    }

    public void setComicId(int comicId) {
        this.comicId = comicId;
    }

    public String getComicTitle() {
        return comicTitle;
    }

    public void setComicTitle(String comicTitle) {
        this.comicTitle = comicTitle;
    }

    public String getComicDescription() {
        return comicDescription;
    }

    public void setComicDescription(String comicDescription) {
        this.comicDescription = comicDescription;
    }

    public Date getComicDate() {
        return comicDate;
    }

    public void setComicDate(Date comicDate) {
        this.comicDate = comicDate;
    }

    public Creators getComicCreator() {
        return comicCreator;
    }

    public void setComicCreator(Creators comicCreator) {
        this.comicCreator = comicCreator;
    }

    public String getComicPublisher() {
        return comicPublisher;
    }

    public void setComicPublisher(String comicPublisher) {
        this.comicPublisher = comicPublisher;
    }

    public Thumbnail getComicThumbnail() {
        return comicThumbnail;
    }

    public void setComicThumbnail(Thumbnail comicThumbnail) {
        this.comicThumbnail = comicThumbnail;
    }

    public Characters getComicCharacters() {
        return comicCharacters;
    }

    public void setComicCharacters(Characters comicCharacters) {
        this.comicCharacters = comicCharacters;
    }
}
