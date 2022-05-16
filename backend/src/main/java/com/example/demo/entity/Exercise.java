package com.example.demo.entity;

import java.util.HashSet;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @Column(name="ID", nullable = false)
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long idExercise;

    @Column(name="Id_Exercise")
    @NotBlank(message = "Id is mandatory")
    private String id;


    @JoinTable(name = "rel_exercise_routine", joinColumns = @JoinColumn(name = "idExercise", nullable = false),
    inverseJoinColumns = @JoinColumn(name = "idRoutine", nullable = false)
    )

    @ManyToMany(cascade = CascadeType.ALL)
    private HashSet<Routine> routines;

    public Exercise() {
        this.routines = new HashSet<Routine>();
    }

    public Exercise(String id, Routine routine) {
        this.id = id;
        this.routines = new HashSet<Routine>();
        this.routines.add(routine);
    }

    public Exercise(String id, HashSet<Routine> routines) {
        this.id = id;
        this.routines = routines;
    }

    public long getIdExercise() {
        return idExercise;
    }

    public void setIdExercise(long idExercise) {
        this.idExercise = idExercise;
    }

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public HashSet<Routine> getRoutine() {
        return routines;
    }

    public void setRoutine(Routine routine) {
        if (this.routines == null)
            this.routines = new HashSet<Routine>();
         this.routines.add(routine);
    }

    @Override
    public String toString() {
        return "Exercise{" +
                "idExercise=" + idExercise +
                ", id='" + id + '\'' +
                '}';
    }

}
