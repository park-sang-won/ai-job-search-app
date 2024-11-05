package com.login.social;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.web.SecurityFilterChain;

@Configuration  // 이 클래스는 Spring의 설정 클래스로 사용됨
@EnableWebSecurity  // Spring Security의 웹 보안 활성화
public class SecurityConfig {

    // 보안 설정을 위한 SecurityFilterChain을 Bean으로 등록
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // CSRF(Cross-Site Request Forgery) 보호 기능을 비활성화 (OAuth 사용 시 비활성화하는 경우가 많음)
            .csrf(csrf -> csrf.disable())

            // HTTP 요청에 대한 보안 설정
            .authorizeHttpRequests(auth -> auth
                // "/" 및 "/login/**" 경로는 인증 없이 접근 가능
                .requestMatchers("/", "/login/**").permitAll()
                // 그 외의 모든 요청은 인증이 필요함
                .anyRequest().authenticated()
            )

            // OAuth 2.0 로그인 설정
            .oauth2Login(oauth2 -> oauth2
                // 로그인 성공 시 "/login/success" 경로로 리다이렉트
                .defaultSuccessUrl("/login/success", true)
            );

        // 설정이 완료된 SecurityFilterChain 객체를 반환
        return http.build();
    }
}
