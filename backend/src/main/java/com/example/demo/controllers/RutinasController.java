package com.example.demo.controllers;

import java.util.HashSet;

import com.example.demo.entity.Routine;
import com.example.demo.repository.RoutineRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "*", allowedHeaders = "*")
@RestController
@RequestMapping("/rutines")
public class RutinasController {
    @Autowired
    private RoutineRepository repository;

    @PostMapping(path = "")
    public void postRutines(@RequestBody Routine routine) {
            this.repository.save(routine);
    }

    @GetMapping(path = "")
    public HashSet<Routine> getRutines() {
        return (HashSet<Routine>) this.repository.findAll();
    }

    @PutMapping(path = "")
    public void putRutines(@RequestBody Routine routine) {
        this.repository.save(routine);
    }

    @DeleteMapping(path = "")
    public void deleteRutines(@RequestBody Routine routine) {
        this.repository.delete(routine);
    }

    


}


/**
 * 
 * 
 * 
 * @PostMapping(path = "/teams")
    public Team postTeam(@RequestBody Team team) {
        return repository.save(team);
    }
/Guardar un equipo en la base de datos/
   saveTeam(team:Team):Observable<any>{
    return this.http.post('http://localhost:8081/api/teams%27,team,this.httpOptions);
   }
 */