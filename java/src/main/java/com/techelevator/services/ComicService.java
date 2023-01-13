package com.techelevator.services;

import com.techelevator.model.marvel.Data;
import com.techelevator.model.marvel.Result;
import com.techelevator.util.MD5Utils;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.List;

import com.techelevator.model.Comics;
import com.techelevator.model.marvel.JsonBody;

@Service
public class ComicService {

    public static String API_BASE_URL = "https://gateway.marvel.com/v1/public/comics";
    private RestTemplate restTemplate = new RestTemplate();


    public Result getAllComics() {

        return restTemplate.getForObject(API_BASE_URL + createHash() , JsonBody.class).getData().getResults().get(0);

    }

    public Result getComic(int id) {

        return restTemplate.getForObject(API_BASE_URL +"/"+id + createHash()  , JsonBody.class).getData().getResults().get(0);
    }
    public String getPostManAddress(){
      return API_BASE_URL;
    }



    public List<Result> getComicsMatchingTitle(String title) {

        return restTemplate.getForObject(API_BASE_URL+ createHash()+"&titleStartsWith="+title + "&limit=100" , JsonBody.class).getData().getResults();
    }

    public String createHash(){


        Timestamp timestamp = new Timestamp(System.currentTimeMillis());

        String time = new SimpleDateFormat("MM-dd-yyyy-HH-mm-ss").format(timestamp);

        String toHash = time+"befe5220b141aff556075db0c363e08503caef6c"+"a16369667ffd8d775ae7193fca1f945e";

        String hashedString = MD5Utils.hash(toHash);

        String fullAddress = "?ts="+time+"&apikey=a16369667ffd8d775ae7193fca1f945e&hash="+hashedString;

        return fullAddress;
    }

}
