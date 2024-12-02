// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// 데이터베이스 변수
const database = firebase.database();

// 데이터 저장
database.ref('students').set({
  "full_name": "Andrew",
  "age": 17,
  "grade": "A"
});


// 출처: https://totally-developer.tistory.com/60 [Totally 개발자:티스토리]