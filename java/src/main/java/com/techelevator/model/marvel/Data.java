package com.techelevator.model.marvel;

import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonPropertyOrder;

import javax.annotation.Generated;
import java.util.List;

@JsonInclude(JsonInclude.Include.NON_NULL)
@JsonPropertyOrder({
        "results"
})
@Generated("jsonschema2pojo")
public class Data {


    @JsonProperty("results")
    private List<Result> results = null;



    @JsonProperty("results")
    public List<Result> getResults() {
        return results;
    }

    @JsonProperty("results")
    public void setResults(List<Result> results) {
        this.results = results;
    }


    @Override
    public String toString() {
        return "Data{" +
                ", results=" + results +
                '}';
    }
}
