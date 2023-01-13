package com.techelevator.model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class Collections {

    private int collectionId;
    private String collectionIssueName;
    private boolean tradeable;
    private boolean isFavorite;
    private int userId;
    private boolean privateCol;
    private String collectionDescription;
    private boolean isDisabled;

    public Collections(int collectionId, String collectionIssueName, boolean tradeable, boolean isFavorite, int userId, boolean privateCol, String collectionDescription, boolean isDisabled) {
        this.collectionId = collectionId;
        this.collectionIssueName = collectionIssueName;
        this.tradeable = tradeable;
        this.isFavorite = isFavorite;
        this.userId = userId;
        this.privateCol = privateCol;
        this.collectionDescription = collectionDescription;
        this.isDisabled = isDisabled;
    }

    public Collections(){

    }

    public int getCollectionId() {
        return collectionId;
    }

    public void setCollectionId(int collectionId) {
        this.collectionId = collectionId;
    }

    public String getCollectionIssueName() {
        return collectionIssueName;
    }

    public void setCollectionIssueName(String collectionIssueName) {
        this.collectionIssueName = collectionIssueName;
    }

    public boolean isTradeable() {
        return tradeable;
    }

    public void setTradeable(boolean tradeable) {
        this.tradeable = tradeable;
    }
    @JsonProperty("isFavorite")
    public boolean isFavorite() {
        return isFavorite;
    }

    public void setFavorite(boolean favorite) {
        isFavorite = favorite;
    }

    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public boolean isPrivateCol() {
        return privateCol;
    }

    public void setPrivateCol(boolean privateCol) {
        this.privateCol = privateCol;
    }

    public String getCollectionDescription() {
        return collectionDescription;
    }

    public void setCollectionDescription(String collectionDescription) {
        this.collectionDescription = collectionDescription;
    }

    @JsonProperty("isDisabled")
    public boolean isDisabled() {
        return isDisabled;
    }

    public void setDisabled(boolean disabled) {
        isDisabled = disabled;
    }
}
