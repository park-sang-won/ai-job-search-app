package com.login.normal;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@Controller  // 이 클래스는 Spring MVC에서 웹 요청을 처리하는 컨트롤러로 동작
public class AuthController {
    
    private final UserService userService;

    // 생성자를 통해 UserService를 주입받음 (의존성 주입)
    public AuthController(UserService userService) {
        this.userService = userService;
    }

    // 회원가입 폼을 표시하는 메서드. 사용자가 "/register" 경로로 GET 요청을 보낼 때 호출
    @GetMapping("/register")
    public String showRegisterForm() {
        // "register"라는 이름의 템플릿(HTML)을 반환하여 회원가입 페이지를 사용자에게 보여줌
        return "register";
    }

    // 회원가입 폼 제출을 처리하는 메서드. "/register" 경로로 POST 요청을 보낼 때 호출
    @PostMapping("/register")
    public String registerUser(@RequestParam String username, @RequestParam String password) {
        // 요청 파라미터로 받은 username과 password를 UserService를 통해 회원가입 처리
        userService.register(username, password);
        // 회원가입이 완료되면 로그인 페이지로 리다이렉트 (다시 "/login" 경로로 이동)
        return "redirect:/login";
    }

    // 로그인 폼을 표시하는 메서드. 사용자가 "/login" 경로로 GET 요청을 보낼 때 호출
    @GetMapping("/login")
    public String showLoginForm() {
        // "login"이라는 이름의 템플릿(HTML)을 반환하여 로그인 페이지를 사용자에게 보여줌
        return "login";
    }

    // 사용자가 홈 페이지에 접근할 때 호출되는 메서드. "/home" 경로로 GET 요청을 보낼 때 호출
    @GetMapping("/home")
    public String home() {
        // "home"이라는 이름의 템플릿(HTML)을 반환하여 홈 페이지를 사용자에게 보여줌
        return "home";
    }
}
