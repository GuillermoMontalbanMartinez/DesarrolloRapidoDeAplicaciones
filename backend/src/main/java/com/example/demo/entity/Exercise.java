package com.example.demo.entity;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.Table;
import javax.validation.constraints.NotBlank;

@Entity
@Table(name = "exercise")
public class Exercise {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private long idExercise;

    @NotBlank(message = "Id is mandatory")
    private String id;

    @NotBlank(message = "Name is mandatory")
    private String name;

    @NotBlank(message = "BodyPart is mandatory")
    private String bodyPart;

    @NotBlank(message = "Equipment is mandatory")
    private String equipment;

    @NotBlank(message = "gifUrl is mandatory")
    private String gifUrl;

    @NotBlank(message = "target is mandatory")
    private String target;

    public Exercise() {

    }

    public Exercise(String id, String name, String bodyPart, String equipment, String gifUrl, String target) {
        this.id = id;
        this.name = name;
        this.bodyPart = bodyPart;
        this.equipment = equipment;
        this.gifUrl = gifUrl;
        this.target = target;
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
