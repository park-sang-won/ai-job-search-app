package com.login.normal;

import org.springframework.data.jpa.repository.JpaRepository;

// UserRepository 인터페이스는 JPA 리포지토리로 UserEntity에 대한 데이터베이스 작업을 처리
public interface UserRepository extends JpaRepository<UserEntity, Long> {
    
    // 이 메서드는 username으로 특정 사용자를 찾는 쿼리를 자동으로 생성하여 처리함
    // Spring Data JPA는 메서드 이름을 기반으로 쿼리를 자동 생성 (findBy + 필드명)
    UserEntity findByUsername(String username);
}
