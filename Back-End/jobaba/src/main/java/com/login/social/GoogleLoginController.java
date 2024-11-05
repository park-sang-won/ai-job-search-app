package com.login.social;

import com.google.api.client.googleapis.auth.oauth2.GoogleIdToken;  // Google ID 토큰 객체
import com.google.api.client.googleapis.auth.oauth2.GoogleIdTokenVerifier;  // Google ID 토큰 검증기
import com.google.api.client.googleapis.javanet.GoogleNetHttpTransport;  // Google 서버와의 안전한 통신을 위한 클래스
import com.google.api.client.json.JsonFactory;  // JSON 파싱을 위한 인터페이스
import com.google.api.client.json.gson.GsonFactory;  // Gson을 사용한 JSON 파싱
import org.springframework.web.bind.annotation.PostMapping;  // POST 요청을 처리하는 어노테이션
import org.springframework.web.bind.annotation.RequestBody;  // 요청 본문을 매핑하기 위한 어노테이션
import org.springframework.web.bind.annotation.RestController;  // RESTful 컨트롤러임을 나타내는 어노테이션

import java.util.Collections;  // 단일 아이템 리스트 생성 시 사용
import java.util.Map;  // 데이터를 키-값 쌍으로 반환할 때 사용

@RestController  // 이 클래스는 RESTful API 컨트롤러임을 나타냄
public class GoogleLoginController {

    // Google OAuth 2.0 클라이언트 ID
    private final String CLIENT_ID = "YOUR_GOOGLE_CLIENT_ID";  // 실제 Google 클라이언트 ID로 변경해야 함

    // Google 로그인 처리. 클라이언트에서 ID 토큰을 받아 이를 검증함
    @PostMapping("/login/google")  // "/login/google" 경로로 들어오는 POST 요청 처리
    public Map<String, Object> loginWithGoogle(@RequestBody Map<String, String> payload) throws Exception {
        // 클라이언트로부터 전달된 idToken 값을 받아옴
        String idTokenString = payload.get("idToken");

        // Gson을 사용하여 JsonFactory 인스턴스 생성
        JsonFactory jsonFactory = new GsonFactory();
        // Google ID 토큰 검증기를 생성
        GoogleIdTokenVerifier verifier = new GoogleIdTokenVerifier.Builder(
                GoogleNetHttpTransport.newTrustedTransport(),  // 안전한 네트워크 통신을 위한 설정
                jsonFactory  // JSON 파싱을 위한 GsonFactory 사용
        ).setAudience(Collections.singletonList(CLIENT_ID))  // Google 클라이언트 ID를 검증 대상에 설정
          .build();

        // 전달받은 ID 토큰 검증
        GoogleIdToken idToken = verifier.verify(idTokenString);
        if (idToken != null) {  // 토큰이 유효한 경우
            GoogleIdToken.Payload idTokenPayload = idToken.getPayload();  // 토큰의 페이로드를 추출
            // 사용자 이름과 이메일 정보를 반환 (Map 형식)
            return Map.of(
                    "name", idTokenPayload.get("name"),  // Google 계정의 사용자 이름
                    "email", idTokenPayload.getEmail()  // Google 계정의 이메일
            );
        } else {
            // ID 토큰이 유효하지 않으면 예외 발생
            throw new IllegalArgumentException("Invalid ID token.");
        }
    }
}
