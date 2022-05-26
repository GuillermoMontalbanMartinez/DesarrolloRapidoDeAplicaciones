package com.example.demo.entity;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Entity
@Table(name="routines")
public class Routine {
    @Id
    @GeneratedValue(strategy=GenerationType.AUTO)
    private long id;

    @NotBlank(message = "nameRoutine is mandatory")
    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private List<Exercise> exercises;
    
    public Routine() {

    }

    public Routine(String name, ArrayList<Exercise> exercises) {
        this.name = name;
        this.exercises = exercises;
    }

    public List<Exercise> getExercises() {
        return this.exercises;
    }

    public long getId() {
        return this.id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public void setExercises(List<Exercise> exercise) {
        this.exercises = exercise;
    }


    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    @Override
    public String toString() {
        return "Id: " + this.id + ", nombre de la rutina : " + this.name + " " + this.exercises.toString();
    }

    
}
