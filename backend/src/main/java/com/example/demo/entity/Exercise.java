package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

import org.springframework.web.bind.annotation.CrossOrigin;
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Entity
@Table(name = "exercises")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long id;

    @NotBlank(message = "Id exercise is mandatory")
    private String idExercise;


    public Exercise() {
    }

    public Exercise(String idExercise) {
        this.idExercise = idExercise;
    }

    public String getIdExercise() {
        return this.idExercise;
    }

    public void setIdExercise(String idExercise) {
        this.idExercise = idExercise;
    }

    public long getId() {
        return this.id;
    }


    @Override
    public String toString() {
        return "Exercise{" +
                "id=" + id +
                ",idExercise=" + idExercise +
                '}';
    }

}
