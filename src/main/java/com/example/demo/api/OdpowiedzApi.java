package com.example.demo.api;

import com.example.demo.model.Odpowiedz;
import com.example.demo.model.Pytanie;
import com.example.demo.repository.OdpowiedzRepository;
import com.example.demo.repository.PytanieRepository;
import com.example.demo.services.OdpowiedzManager;
import com.example.demo.wrapper.OdpowiedzWrapper;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.validation.constraints.NotNull;
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

    @Autowired
    private PytanieRepository pytanieRepository;

    @GetMapping(value = "/{odpowiedzId}")
    public Optional<Odpowiedz> findById(@RequestParam Long loginId) {
        return odpowiedzRepository.findById(loginId);
    }

    @GetMapping
    public List<Odpowiedz> findAll(){
        return odpowiedzRepository.findAll();
    }

    @PostMapping
    public Odpowiedz saveOdpowiedz(@RequestBody OdpowiedzWrapper odpowiedzWrapper){
        Pytanie pytanie = pytanieRepository.findById(odpowiedzWrapper.getPytanieId()).orElseThrow();
        Odpowiedz odpowiedz = Odpowiedz.builder()
                .tresc(odpowiedzWrapper.getTresc())
                .czyPoprawna(odpowiedzWrapper.isCzyPoprawna())
                .pytanie(pytanie)
                .build();
        return odpowiedzRepository.save(odpowiedz);
    }

//    @PutMapping
//    public Odpowiedz updateOdpowiedz(@RequestBody Odpowiedz odpowiedz){
//        Optional<Odpowiedz> newOdpowiedz = odpowiedzRepository.findById(odpowiedz.getId());
//        newOdpowiedz.ifPresent(($) -> {
//            $.setCzyPoprawna(odpowiedz.isCzyPoprawna());
//            $.setTresc(odpowiedz.getTresc());
//            odpowiedzRepository.save($);
//        });
//        return newOdpowiedz.get();
//    }

    @DeleteMapping(value = "/{odpowiedzId}")
    public void deleteOdpowiedz(@RequestParam Long odpowiedzId){
        odpowiedzRepository.deleteById(odpowiedzId);
    }

    @GetMapping(path = "/dopytania")
    public List<Odpowiedz> getOdpowiedziByPytanieId(@RequestParam @NotNull Long pytanieId){
        return odpowiedzManager.getOdpowiedziByPytanieId(pytanieId);
    }
}
