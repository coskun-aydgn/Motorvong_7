package com.example.motorvong_7;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;
@RestController
public class MotorvognController {
    private List<Motorvong> motorvongs=new ArrayList<Motorvong>();
    private List<Bil> bils=new ArrayList<>();
    public MotorvognController() {
        Bil bil1=new Bil("Audi", "Q7");
        bils.add(bil1);
        Bil bil2=new Bil("Audi", "Q5");
        bils.add(bil2);
        Bil bil3=new Bil("Audi", "Q6");
        bils.add(bil3);
        Bil bil4=new Bil("Volvo", "V40");
        bils.add(bil4);
        Bil bil5=new Bil("Volvo", "V50");
        bils.add(bil5);
        Bil bil6=new Bil("Volvo", "V60");
        bils.add(bil6);
    }
    @PostMapping("/lagreMotorvogn")
    public void lagreMotorvong(Motorvong motorvong) {
        motorvongs.add(motorvong);
    }
    @GetMapping("/henteMotorvogn")
    public List<Motorvong> henteMotorvogn(){
        return motorvongs;
    }
    @GetMapping("/henteBil")
    public List<Bil> henteBil(){
        return bils;
    }
    @DeleteMapping("/slettMotorvogn")
    public void slettMotorvogn(){
        motorvongs.clear();
    }
}
