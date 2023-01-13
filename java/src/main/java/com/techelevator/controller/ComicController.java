package com.techelevator.controller;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.techelevator.dao.*;
import com.techelevator.model.Collections;
import com.techelevator.model.Comics;
import com.techelevator.model.marvel.Result;

import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;

@CrossOrigin
@RestController
@PreAuthorize("isAuthenticated()")
public class ComicController {

    private CollectionDao collectionDao;
    private ComicsDao comicsDao;
    private UserDao userDao;


    public ComicController(JdbcCollectionsDao collection, JdbcComicsDao comics, JdbcUserDao userDao) {
        this.collectionDao = collection;
        this.comicsDao = comics;
        this.userDao = userDao;
    }
    @CrossOrigin
//    @PreAuthorize("permitAll")
    @RequestMapping( path ="/collections", method = RequestMethod.GET)
    public List<Collections> listCollections(Principal principal){
        String signedInUser = principal.getName();
        int userId = userDao.findIdByUsername(signedInUser);
        return collectionDao.findAll(userId);
    }
//    @RequestMapping(path ="/collections/" )
    @JsonProperty
    @CrossOrigin
    @RequestMapping(path ="/collections/create", method = RequestMethod.POST)
    public void createCollection (@RequestBody Collections collections, Principal principal){
        String signedInUser = principal.getName();
        int userId = userDao.findIdByUsername(signedInUser);
        collectionDao.createCollection(collections,userId);
    }
    @CrossOrigin
    @RequestMapping(path= "/collections/addComic/{colId}", method = RequestMethod.POST)
    public void addComicToCollection(@RequestBody Comics comic,@PathVariable int colId, Principal principal){
        String signedInUser = principal.getName();
        int userId = userDao.findIdByUsername(signedInUser);
        collectionDao.addComicToCollection(comic.getComicId(), colId, userId);
    }

    @CrossOrigin
    @RequestMapping(path = "/collections/delete/{collectionId}", method = RequestMethod.DELETE)
    public void deleteCollection(@PathVariable int collectionId){
        collectionDao.deleteCollection(collectionId);
    }

    @CrossOrigin
    @RequestMapping(path = "/collections/deletecomic/{collectionId}/{comicId}", method = RequestMethod.DELETE)
    public void deleteComicFromCol(@PathVariable int collectionId, @PathVariable int comicId, Principal principal){

        String signedInUser = principal.getName();
        int userId = userDao.findIdByUsername(signedInUser);

        collectionDao.deleteComicFromCol(collectionId, comicId, userId);
    }

    @RequestMapping(path = "/collections/hide/{collectionId}", method = RequestMethod.POST)
    public void hideCollection (@RequestBody Collections collections, int collectionId){
        collectionDao.removeCollection( collections, collectionId);
    }
    @RequestMapping(path = "/collections/comicsList/{collectionId}",method = RequestMethod.GET)
    public List<Comics> viewComicsInCollection(@PathVariable  int collectionId, Principal principal){
        String signedInUser = principal.getName();
        List<Comics> comicsList = new ArrayList<>();
        List<Integer> comicIdList = new ArrayList<>();
        int userId = userDao.findIdByUsername(signedInUser);
       comicIdList = collectionDao.getListOfComicIdsByCollectionId(collectionId,userId);
       for (Integer currentComicId : comicIdList){
           comicsList.add(comicsDao.getMarvelComicById(currentComicId));
       }
       return comicsList;
    }
    @JsonProperty
    @CrossOrigin
    @RequestMapping(path = "/collections/{collectionId}",method = RequestMethod.GET)
    public Collections getCollectionById(@PathVariable int collectionId){
        return collectionDao.getCollectionById(collectionId);
    }



    @PreAuthorize("permitAll")
    @RequestMapping (path = "/comics", method = RequestMethod.GET)
    public List<Comics> listOfComics(){
        return comicsDao.getListOfComics();
    }

    @RequestMapping (path = "/comics/{id}", method = RequestMethod.GET)
    public Result comicById (@PathVariable int id){
        return comicsDao.getComicById(id);

    }

    @PreAuthorize("permitAll")
    @RequestMapping (path="/comics/search/{term}", method = RequestMethod.GET)
    public List<Comics> searchComicTitle(@PathVariable String term){
        return comicsDao.getComicByTitle(term);
    }

    @PreAuthorize("permitAll")
    @RequestMapping(path = "/whoami", method = RequestMethod.GET)
    public String whoAmI(Principal principal){
        return principal.getName();
    }

}

