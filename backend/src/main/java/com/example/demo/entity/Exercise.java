package com.example.demo.entity;

import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
    private long idExercise;

    @Column(name="Id_Exercise")
    @NotBlank(message = "Id is mandatory")
    private String id;

    @Column(name="Name")
    @NotBlank(message = "name is mandatory")
    private String name;

    @Column(name="BodyPart")
    @NotBlank(message = "bodyPart is mandatory")
    private String bodyPart;

    @Column(name="Equipment")
    @NotBlank(message = "equipment is mandatory")
    private String equipment;

    @Column(name="GifUrl")
    @NotBlank(message = "gifUrl is mandatory")
    private String gifUrl;

    @Column(name="Target")
    @NotBlank(message = "target is mandatory")
    private String target;

    @JoinTable(name = "rel_exercise_routine", joinColumns = @JoinColumn(name = "idExercise", nullable = false),
    inverseJoinColumns = @JoinColumn(name = "idRoutine", nullable = false)
    )

    @ManyToMany(cascade = CascadeType.ALL)
    private HashSet<Routine> routines;

    public Exercise() {
        this.routines = new HashSet<Routine>();
    }

    public Exercise(String id, String name, String bodyPart, String equipment, String gifUrl, String target, Routine routine) {
        this.id = id;
        this.name = name;
        this.bodyPart = bodyPart;
        this.equipment = equipment;
        this.gifUrl = gifUrl;
        this.target = target;
        this.routines = new HashSet<Routine>();
        this.routines.add(routine);
    }

    public Exercise(String id, String name, String bodyPart, String equipment, String gifUrl, String target, HashSet<Routine> routines) {
        this.id = id;
        this.name = name;
        this.bodyPart = bodyPart;
        this.equipment = equipment;
        this.gifUrl = gifUrl;
        this.target = target;
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

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getBodyPart() {
        return bodyPart;
    }

    public void setBodyPart(String bodyPart) {
        this.bodyPart = bodyPart;
    }

    public String getEquipment() {
        return equipment;
    }

    public void setEquipment(String equipment) {
        this.equipment = equipment;
    }

    public String getGifUrl() {
        return gifUrl;
    }

    public void setGifUrl(String gifUrl) {
        this.gifUrl = gifUrl;
    }

    public String getTarget() {
        return target;
    }

    public void setTarget(String target) {
        this.target = target;
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
                ", name='" + name + '\'' +
                ", bodyPart='" + bodyPart + '\'' +
                ", equipment='" + equipment + '\'' +
                ", gifUrl='" + gifUrl + '\'' +
                ", target='" + target + '\'' +
                '}';
    }

}
