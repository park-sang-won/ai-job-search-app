import React from 'react';
import { View, Text, SafeAreaView, StyleSheet, TouchableOpacity, Image } from 'react-native';

export default function HomeScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <Text style={styles.brandText}>JOB ABA</Text>
        <Text style={styles.subtitle}>너의 직업을 찾아봐</Text>
      </View>

      {/* 컴퓨터 아이콘 */}
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/100/3498db/computer.png' }}
          style={styles.image}
        />
      </View>

      {/* 메인 버튼 */}
      <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.startButtonText}>시작하기</Text>
      </TouchableOpacity>

      {/* 푸터 */}
      <Text style={styles.footerText}>당신의 꿈을 JOB ABA에서 시작하세요!</Text>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F9F9F9',
    paddingHorizontal: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  brandText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#34495E',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#3498DB',
    fontWeight: '600',
    textAlign: 'center',
    marginTop: 5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 30,
  },
  image: {
    width: 100,
    height: 100,
    tintColor: '#3498DB',
  },
  startButton: {
    width: '80%',
    paddingVertical: 15,
    backgroundColor: '#3B5998',
    borderRadius: 25,
    alignItems: 'center',
    elevation: 3, // Android shadow
    shadowColor: '#000', // iOS shadow
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 5,
  },
  startButtonText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#FFFFFF',
  },
  footerText: {
    fontSize: 16,
    color: '#7D7D7D',
    marginTop: 30,
    textAlign: 'center',
  },
});
