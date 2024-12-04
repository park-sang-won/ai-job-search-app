// JobRecommendationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function JobRecommendationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>적성검사</Text>
      </View>

      <TouchableOpacity style={styles.testButton} onPress={() => navigation.navigate('DeveloperAptitudeTestScreen')}>
        <Text style={styles.testButtonText}>개발자 적성 검사</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/checkmark.png' }}
          style={styles.checkIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.testButton}>
        <Text style={styles.testButtonText}>개인취향조사</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/ffffff/checkmark.png' }}
          style={styles.checkIcon}
        />
      </TouchableOpacity>

      <TouchableOpacity style={styles.completeButton} onPress={() => navigation.goBack()}>
        <Text style={styles.completeButtonText}>모든 검사 완료</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // 제목을 수평 중앙에 배치
    padding: 16,
    backgroundColor: '#FFFFFF',
    position: 'relative', // 상대적 위치를 설정
  },
  backButton: {
    position: 'absolute', // 뒤로 가기 버튼을 절대 위치로 설정
    left: 16, // 왼쪽 여백
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  testButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    backgroundColor: '#0066FF',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 10,
    marginBottom: 20,
  },
  testButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  checkIcon: {
    width: 24,
    height: 24,
  },
  completeButton: {
    width: '100%',
    paddingVertical: 15,
    backgroundColor: '#D3D3D3',
    alignItems: 'center',
    borderRadius: 10,
  },
  completeButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#000000',
  },
});

