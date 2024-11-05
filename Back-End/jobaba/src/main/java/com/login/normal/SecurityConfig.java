package com.login.normal;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.SecurityFilterChain;

@Configuration  // 이 클래스는 Spring의 설정 클래스임을 나타냄
@EnableWebSecurity  // Spring Security 설정을 활성화하는 어노테이션
public class SecurityConfig {

    // 비밀번호를 암호화하는 PasswordEncoder를 Bean으로 등록
    @Bean
    public PasswordEncoder passwordEncoder() {
        // BCryptPasswordEncoder를 사용하여 비밀번호를 해시 처리함
        return new BCryptPasswordEncoder();
    }

    // 보안 설정을 담당하는 SecurityFilterChain을 Bean으로 등록
    @Bean
    public SecurityFilterChain securityFilterChain(HttpSecurity http) throws Exception {
        http
            // CSRF(Cross-Site Request Forgery) 보호 기능을 비활성화
            .csrf(csrf -> csrf.disable())
            
            // HTTP 요청에 대한 보안 정책 설정
            .authorizeHttpRequests(authz -> authz
                // "/register" 및 "/login" 경로는 인증 없이 접근 가능
                .requestMatchers("/register", "/login").permitAll()
                // 그 외의 모든 요청은 인증 필요
                .anyRequest().authenticated()
            )
            
            // 폼 로그인을 활성화하고, 커스텀 로그인 페이지를 지정
            .formLogin(form -> form
                // 로그인 페이지 경로 설정 ("/login" 경로에 로그인 폼이 있음)
                .loginPage("/login")
                // 로그인 성공 시 리다이렉트할 경로 설정 ("/home" 경로로 이동)
                .defaultSuccessUrl("/home", true)
            )
            
            // 로그아웃 설정
            .logout(logout -> logout
                // 로그아웃 성공 시 리다이렉트할 경로 설정 ("/login" 페이지로 이동)
                .logoutSuccessUrl("/login")
            );

        // 위에서 설정한 보안 설정을 적용한 SecurityFilterChain 객체를 반환
        return http.build();
    }
}
