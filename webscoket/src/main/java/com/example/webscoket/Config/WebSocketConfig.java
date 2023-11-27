package com.example.webscoket.Config;

import com.example.webscoket.handler.SocketHandler;
import lombok.RequiredArgsConstructor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.socket.config.annotation.EnableWebSocket;
import org.springframework.web.socket.config.annotation.WebSocketConfigurer;
import org.springframework.web.socket.config.annotation.WebSocketHandlerRegistry;

@Configuration //설정 파일 등록
@RequiredArgsConstructor // final 필드 생성자 생성(의존성 주입)
@EnableWebSocket // 웹 소캣 활성화
public class WebSocketConfig implements WebSocketConfigurer {
    private final SocketHandler socketHandler;

    @Override
    public void registerWebSocketHandlers(WebSocketHandlerRegistry registry) {
        registry.addHandler(socketHandler, "ws/chat").setAllowedOrigins("*");
    }
}
