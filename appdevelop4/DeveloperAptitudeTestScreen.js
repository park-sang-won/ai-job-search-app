// DeveloperAptitudeTestScreen.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function DeveloperAptitudeTestScreen({ navigation }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const options = [
    { id: 1, text: '매우 긍정', color: '#0000FF' },
    { id: 2, text: '긍정', color: '#008000' },
    { id: 3, text: '보통', color: '#808080' },
    { id: 4, text: '부정', color: '#FFA500' },
    { id: 5, text: '매우 부정', color: '#FF0000' },
  ];

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

      <View style={styles.questionContainer}>
        <Text style={styles.questionNumber}>Q1</Text>
        <Text style={styles.questionText}>나는 어떤 문제라도 반드시 해결방법은 있다고 생각한다.</Text>
      </View>

      <View style={styles.optionsContainer}>
        {options.map((option) => (
          <TouchableOpacity
            key={option.id}
            style={[
              styles.optionButton,
              selectedOption === option.id && { backgroundColor: option.color },
            ]}
            onPress={() => setSelectedOption(option.id)}
          >
            <View style={styles.optionCircle}></View>
            <Text style={[styles.optionText, { color: option.color }]}>{option.text}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingBottom: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  questionContainer: {
    marginVertical: 20,
  },
  questionNumber: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  questionText: {
    fontSize: 18,
    marginTop: 10,
  },
  optionsContainer: {
    marginTop: 20,
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
});
