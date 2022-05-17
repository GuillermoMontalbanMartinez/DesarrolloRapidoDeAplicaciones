package com.example.demo.entity;

import java.util.HashSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name="routine")
public class Routine {
    @Id
    @Column(name="ID", nullable = false)
    @GeneratedValue(strategy=GenerationType.IDENTITY)
    private Long idRoutine;

    @Column(name="name")
    @NotBlank(message = "nameRoutine is mandatory")
    private String name;

    @OneToMany(cascade = CascadeType.ALL)
    private HashSet<Exercise> exercises;
    
    public Routine() {
        this.exercises = new HashSet<Exercise>();
    }

    public Routine(Exercise exercise) {
        this.exercises.add(exercise);
    }

    public Routine(HashSet<Exercise> exercise) {
        this.exercises = exercise;
    }

    public HashSet<Exercise> getRoutine() {
        return this.exercises;
    }

    public void setRoutine(HashSet<Exercise> exercise) {
        this.exercises = exercise;
    }

    public long getIdRoutine() {
        return idRoutine;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getName() {
        return this.name;
    }

    public String exerciseOfTheRoutine() {
        return this.exercises.toString();
    }

    
}
