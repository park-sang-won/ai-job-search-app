import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image, Alert } from 'react-native';

export default function DeveloperAptitudeTestScreen({ navigation }) {
  const [selectedOptions, setSelectedOptions] = useState({});

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
    { id: 1, text: '매우 긍정', score: 5, color: '#0000FF' },
    { id: 2, text: '긍정', score: 4, color: '#008000' },
    { id: 3, text: '보통', score: 3, color: '#808080' },
    { id: 4, text: '부정', score: 2, color: '#FFA500' },
    { id: 5, text: '매우 부정', score: 1, color: '#FF0000' },
  ];

  const handleOptionSelect = (questionId, optionId) => {
    setSelectedOptions((prev) => ({ ...prev, [questionId]: optionId }));
  };

  const calculateGroupScores = () => {
    const groupScores = [];
    for (let i = 0; i < questions.length; i += 4) {
      const group = questions.slice(i, i + 4);
      let groupScore = 0;

      group.forEach((question) => {
        const selectedOptionId = selectedOptions[question.id];
        if (selectedOptionId) {
          const selectedOption = options.find((option) => option.id === selectedOptionId);
          groupScore += selectedOption ? selectedOption.score : 0;
        }
      });

      groupScores.push(groupScore);
    }
    return groupScores;
  };

  const callGPT = async (jobTitle) => {
    const apiKey = ''; // 여기에 API 키를 입력하세요
    const prompt = `
      직업: ${jobTitle}
      1. 이 직업에 대한 간단한 설명.
      2. 이 직업을 가지기 위해 필요한 자격증 3가지.
      3. 이 직업을 준비하는 데 도움이 되는 가이드라인.
    `;

    try {
      const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${apiKey}`,
        },
        body: JSON.stringify({
          model: 'gpt-3.5-turbo',
          messages: [{ role: 'user', content: prompt }],
          max_tokens: 1000,
          temperature: 0.7,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error.message);
      }

      const data = await response.json();
      if (data.choices && data.choices.length > 0) {
        return data.choices[0].message.content;
      } else {
        throw new Error('GPT 응답이 비어 있습니다.');
      }
    } catch (error) {
      return `오류 발생: ${error.message}`;
    }
  };

  const handleCompletion = async () => {
    const allQuestionsAnswered = questions.every(
      (question) => selectedOptions[question.id] !== undefined
    );

    if (allQuestionsAnswered) {
      const groupScores = calculateGroupScores();
      const jobTitles = ['모바일 앱 개발자', '데이터 분석가', 'AI 개발자', '웹 디자이너', '보안 전문가'];
      const highestScoreIndex = groupScores.indexOf(Math.max(...groupScores));
      const highestScoreJob = jobTitles[highestScoreIndex];

      try {
        const gptResponse = await callGPT(highestScoreJob);

        // 결과 화면으로 이동하며 데이터 전달
        navigation.navigate('ResultScreen', {
          jobTitle: highestScoreJob,
          gptResponse: gptResponse,
        });
      } catch (error) {
        Alert.alert('오류 발생', `결과를 가져오는 중 오류가 발생했습니다: ${error.message}`);
      }
    } else {
      Alert.alert('응답 부족', '모든 문항에 응답해주세요.');
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

      <ScrollView contentContainerStyle={styles.scrollContentContainer} style={styles.scrollView}>
        {questions.map((question) => (
          <View key={question.id} style={styles.questionContainer}>
            <View style={styles.questionHeader}>
              <Text style={styles.questionNumber}>Q{question.id}</Text>
              <Text style={styles.questionText}>{question.text}</Text>
            </View>
            <View style={styles.optionsContainer}>
              {options.map((option) => (
                <TouchableOpacity
                  key={option.id}
                  style={[
                    styles.optionButton,
                    selectedOptions[question.id] === option.id && {
                      backgroundColor: option.color,
                      borderColor: option.color,
                    },
                  ]}
                  onPress={() => handleOptionSelect(question.id, option.id)}
                >
                  <Text
                    style={[
                      styles.optionText,
                      selectedOptions[question.id] === option.id && { color: '#FFFFFF' },
                    ]}
                  >
                    {option.text}
                  </Text>
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
    backgroundColor: '#F9F9F9',
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
    flexGrow: 1,
  },
  scrollContentContainer: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  questionContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  questionHeader: {
    marginBottom: 12,
  },
  questionNumber: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  questionText: {
    fontSize: 16,
    color: '#555',
    marginTop: 4,
  },
  optionsContainer: {
    flexDirection: 'column',
    gap: 8,
  },
  optionButton: {
    paddingVertical: 10,
    paddingHorizontal: 12,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    marginBottom: 8,
    alignItems: 'center',
  },
  optionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#555',
  },
  completeButton: {
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    marginHorizontal: 16,
    borderRadius: 8,
    alignItems: 'center',
    marginBottom: 16,
    elevation: 2,
  },
  completeButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});