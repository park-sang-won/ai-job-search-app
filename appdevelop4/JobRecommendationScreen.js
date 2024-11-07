// JobRecommendationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function JobRecommendationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>적성검사</Text>

      <TouchableOpacity style={styles.testButton}>
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
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginVertical: 20,
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
