package com.login.normal;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service  // 이 클래스가 Spring의 서비스 컴포넌트임을 나타냅니다. 비즈니스 로직을 처리하는 역할
public class UserService {

    // UserRepository를 통해 데이터베이스와 상호작용
    private final UserRepository userRepository;

    // 비밀번호를 안전하게 암호화하기 위한 PasswordEncoder. BCryptPasswordEncoder를 사용하여 비밀번호를 해시함
    private final PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

    // 생성자를 통해 UserRepository를 주입받음 (의존성 주입)
    public UserService(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    // 회원가입 로직: username과 password를 받아서 새로운 사용자를 등록
    public void register(String username, String password) {
        // 입력된 비밀번호를 BCrypt로 암호화한 후, 새로운 UserEntity 객체를 생성
        UserEntity user = new UserEntity(username, passwordEncoder.encode(password));
        // 생성된 사용자를 데이터베이스에 저장
        userRepository.save(user);
    }

    // 사용자 이름(username)으로 사용자를 찾는 메서드
    public UserEntity findByUsername(String username) {
        // UserRepository를 사용하여 username에 해당하는 사용자를 데이터베이스에서 조회
        return userRepository.findByUsername(username);
    }
}
