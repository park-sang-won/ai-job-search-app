package com.login.social;

import org.springframework.security.core.annotation.AuthenticationPrincipal;  // 현재 인증된 사용자 정보를 가져오기 위한 어노테이션
import org.springframework.security.oauth2.core.user.OAuth2User;  // OAuth 2.0 인증된 사용자 정보 객체
import org.springframework.web.bind.annotation.GetMapping;  // HTTP GET 요청을 처리하는 어노테이션
import org.springframework.web.bind.annotation.RestController;  // REST 컨트롤러를 나타내는 어노테이션

import java.util.Map;  // 데이터를 키-값 쌍으로 반환하기 위한 Map 인터페이스

@RestController  // 이 클래스는 REST API를 처리하는 컨트롤러임을 나타냄
public class UserController {

    // 로그인 성공 후 사용자 정보를 제공하는 엔드포인트
    @GetMapping("/login/success")  // "/login/success" 경로로 들어오는 GET 요청 처리
    public Map<String, Object> getUser(@AuthenticationPrincipal OAuth2User user) {
        // 인증된 사용자의 이름과 이메일 정보를 Map으로 반환
        return Map.of(
            "name", user.getAttribute("name"),  // Google 또는 소셜 로그인 계정의 사용자 이름
            "email", user.getAttribute("email")  // Google 또는 소셜 로그인 계정의 이메일
        );
    }
}
