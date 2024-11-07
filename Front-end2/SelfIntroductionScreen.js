// SelfIntroductionScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function SelfIntroductionScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>간단 자기소개서</Text>
      <Text style={styles.label}>자기소개서 작성</Text>
      <TextInput
        style={styles.textArea}
        placeholder="자신을 어필할 수 있는 내용을 3~6줄 내로 요약해보세요"
        placeholderTextColor="#B0B0B0"
        multiline={true}
        numberOfLines={6}
      />
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.saveText}>저장하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  textArea: {
    height: 150,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F5F5F5',
    textAlignVertical: 'top',
    fontSize: 16,
    color: '#000',
  },
  saveText: {
    fontSize: 16,
    color: '#1E90FF',
    textAlign: 'right',
    marginTop: 20,
  },
});
