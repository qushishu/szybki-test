package com.example.demo.api;

import com.example.demo.model.Nauczyciel;
import com.example.demo.model.Odpowiedz;
import com.example.demo.repository.OdpowiedzRepository;
import com.example.demo.services.NauczycielManager;
import com.example.demo.services.OdpowiedzManager;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@CrossOrigin
@RequestMapping("/odpowiedzi")
public class OdpowiedzApi {
    @Autowired
    private OdpowiedzManager odpowiedzManager;

    @Autowired
    private OdpowiedzRepository odpowiedzRepository;

    @GetMapping(value = "/{odpowiedzId}")
    public Optional<Odpowiedz> findById(@RequestParam Long loginId) {
        return odpowiedzRepository.findById(loginId);
    }

    @GetMapping
    public List<Odpowiedz> findAll(){
        return odpowiedzRepository.findAll();
    }

    @PostMapping
    public Odpowiedz saveOdpowiedz(@RequestBody Odpowiedz odpowiedz){
        return odpowiedzRepository.save(odpowiedz);
    }

    @PutMapping
    public Odpowiedz updateOdpowiedz(@RequestBody Odpowiedz odpowiedz){
        Optional<Odpowiedz> newOdpowiedz = odpowiedzRepository.findById(odpowiedz.getId());
        newOdpowiedz.ifPresent(($) -> {
            $.setCzyPoprawna(odpowiedz.isCzyPoprawna());
            $.setTresc(odpowiedz.getTresc());
            odpowiedzRepository.save($);
        });
        return newOdpowiedz.get();
    }

    @DeleteMapping
    public void deleteOdpowiedz(@RequestBody Odpowiedz odpowiedz){
        odpowiedzRepository.delete(odpowiedz);
    }
}
