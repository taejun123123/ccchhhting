package com.example.webscoket.Controller;

import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
@Controller
@Slf4j
public class ChatController {
    /*아이디 입력 화면*/
    @GetMapping("/")
    public String home(){
        return "main";
    }
    /*채팅 화면*/
    @GetMapping("/chat")
    public String chat(@RequestParam(name="id") String id, Model model){
        log.info("id"+ id);
        model.addAttribute("id",id); //아이디 입력 화면에서 입력한 아이디
        return "chat";

    }
 }
