// DeveloperAptitudeTestScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function DeveloperAptitudeTestScreen({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState({});

  // 새로운 질문 배열
  const questions = [
    { id: 1, text: '새로운 프레임워크나 라이브러리가 나왔을 때 바로 적용해보고 싶나요?' },
    { id: 2, text: '앱의 성능 최적화 작업을 즐겨 하시나요?' },
    { id: 3, text: '사용자 인터페이스(UI) 개선에 대한 관심이 많으신가요?' },
    { id: 4, text: '제한된 시간 내에 기능을 빠르게 개발하는 것을 선호하시나요?' },
    { id: 5, text: '데이터를 시각적으로 표현하는 데에 흥미가 있나요?' },
    { id: 6, text: '방대한 데이터를 다루는 데에서 오는 스트레스를 잘 견디시나요?' },
    { id: 7, text: '통계 분석 툴을 활용하는 데 자신 있나요?' },
    { id: 8, text: '데이터 정제 작업이 단순하다고 느끼시나요?' },
    { id: 9, text: '새로운 AI 모델이 출시되면 바로 적용해보고 싶으신가요?' },
    { id: 10, text: '데이터 수집 및 전처리에 흥미가 있나요?' },
    { id: 11, text: '모델의 학습 속도 최적화에 도전하는 것을 즐기시나요?' },
    { id: 12, text: 'AI 모델의 성능을 분석하고 개선하는 작업을 선호하시나요?' },
    { id: 13, text: '사용자 경험(UX)에 대한 이해가 뛰어나다고 생각하시나요?' },
    { id: 14, text: '최신 웹디자인 트렌드를 파악하고 적용하는 것을 좋아하시나요?' },
    { id: 15, text: '웹페이지의 색상 조합을 고민하는 것을 즐기시나요?' },
    { id: 16, text: '심미성과 기능성을 동시에 고려할 수 있나요?' },
    { id: 17, text: '새로운 보안 취약점이 발견되면 바로 분석해보고 싶으신가요?' },
    { id: 18, text: '정보보호 관련 규정을 이해하고 준수하는 것을 중요하게 생각하시나요?' },
    { id: 19, text: '외부 공격에 대비한 방어 체계를 구축하는 것에 흥미가 있나요?' },
    { id: 20, text: '침입 탐지 시스템의 로그 분석을 자주 수행하는 편인가요?' },
  ];

  const options = [
    { id: 1, text: '매우 긍정', color: '#0000FF' },
    { id: 2, text: '긍정', color: '#008000' },
    { id: 3, text: '보통', color: '#808080' },
    { id: 4, text: '부정', color: '#FFA500' },
    { id: 5, text: '매우 부정', color: '#FF0000' },
  ];

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const handleCompletion = () => {
    if (Object.keys(selectedOptions).length === questions.length) {
      navigation.goBack();
    } else {
      alert("모든 문항에 응답해주세요.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>개발자 적성 검사</Text>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/close-window.png' }}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.scrollView}>
        {questions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <Text style={styles.questionNumber}>Q{question.id}</Text>
            <Text style={styles.questionText}>{question.text}</Text>
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionButton,
                    selectedOptions[question.id] === option.id && { backgroundColor: option.color },
                  ]}
                  onPress={() => handleOptionSelect(question.id, option.id)}
                >
                  <View
                    style={[
                      styles.optionCircle,
                      selectedOptions[question.id] === option.id && { backgroundColor: option.color },
                    ]}
                  />
                  <Text style={[styles.optionText, { color: option.color }]}>{option.text}</Text>
                </TouchableOpacity>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      <TouchableOpacity style={styles.completeButton} onPress={handleCompletion}>
        <Text style={styles.completeButtonText}>검사 완료</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 16,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  scrollView: {
    paddingHorizontal: 16,
  },
  questionContainer: {
    marginBottom: 30,
  },
  questionNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 18,
    marginVertical: 10,
  },
  optionsContainer: {
    marginTop: 10,
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  optionCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: '#D3D3D3',
    marginRight: 10,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 15,
    alignItems: 'center',
    margin: 16,
    borderRadius: 10,
  },
  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
