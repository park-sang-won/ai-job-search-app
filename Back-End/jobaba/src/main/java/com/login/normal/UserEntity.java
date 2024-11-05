package com.login.normal;

import javax.persistence.*;  // JPA 관련 어노테이션을 사용하기 위한 임포트

@Entity  // 이 클래스가 JPA 엔티티임을 나타냅니다. 데이터베이스 테이블에 매핑됨
public class UserEntity {
    
    @Id  // 이 필드가 데이터베이스의 기본 키(Primary Key)임을 나타냅니다
    @GeneratedValue(strategy = GenerationType.IDENTITY)  // ID 값은 데이터베이스에서 자동으로 생성됨 (Auto Increment)
    private Long id;

    @Column(nullable = false, unique = true)  // username 컬럼은 Null을 허용하지 않으며, 고유값이어야 함 (중복 불가)
    private String username;

    @Column(nullable = false)  // password 컬럼도 Null을 허용하지 않음
    private String password;

    // 기본 생성자: JPA는 파라미터가 없는 기본 생성자를 필요로 함
    public UserEntity() {}

    // 사용자 정의 생성자: 객체 생성 시 username과 password를 설정할 수 있음
    public UserEntity(String username, String password) {
        this.username = username;
        this.password = password;
    }

    // Getter와 Setter 메서드: 각 필드의 값을 가져오고 설정할 수 있게 해줌
    public Long getId() { 
        return id; 
    }
    
    public String getUsername() { 
        return username; 
    }
    
    public void setUsername(String username) { 
        this.username = username; 
    }
    
    public String getPassword() { 
        return password; 
    }
    
    public void setPassword(String password) { 
        this.password = password; 
    }
}
