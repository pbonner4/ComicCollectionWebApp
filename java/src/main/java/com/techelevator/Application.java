package com.techelevator;

import com.techelevator.dao.ComicsDao;
import com.techelevator.services.ComicService;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import java.util.Arrays;

@SpringBootApplication
public class Application {

    private final ComicService comicService = new ComicService();
    private ComicsDao comicsDao;



    public static void main(String[] args) {
        SpringApplication.run(Application.class, args);

        Application app = new Application();
        app.run();
    }

    public void run(){


        //System.out.println(comicService.getComic(4500));
        System.out.println(comicService.getPostManAddress() + comicService.createHash());
    }

}
