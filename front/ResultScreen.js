import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, ScrollView } from 'react-native';

export default function ResultScreen({ route, navigation }) {
  const { jobTitle, gptResponse } = route.params;

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.content}>
        <Text style={styles.title}>적성 검사 결과</Text>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>가장 적합한 직업</Text>
          <Text style={styles.jobTitle}>{jobTitle}</Text>
        </View>
        <View style={styles.card}>
          <Text style={styles.sectionTitle}>GPT 추천 정보</Text>
          <Text style={styles.description}>{gptResponse}</Text>
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.button} onPress={() => navigation.goBack()}>
        <Text style={styles.buttonText}>다시 검사하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F9F9F9',
  },
  content: {
    padding: 16,
    paddingBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#333',
  },
  card: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 8,
    color: '#555',
  },
  jobTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#4CAF50',
    textAlign: 'center',
    marginTop: 4,
  },
  description: {
    fontSize: 16,
    lineHeight: 24,
    color: '#555',
  },
  button: {
    backgroundColor: '#4CAF50',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    marginHorizontal: 16,
    marginBottom: 16,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
