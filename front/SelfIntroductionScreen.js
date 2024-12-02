// SelfIntroductionScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function SelfIntroductionScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>간단 자기소개서</Text>
      </View>

      {/* 본문 */}
      <View style={styles.content}>
        <Text style={styles.label}>자기소개서 작성</Text>
        <TextInput
          style={styles.textArea}
          placeholder="자신을 어필할 수 있는 내용을 작성하세요"
          placeholderTextColor="#A0A0A0"
          multiline
        />
        <TouchableOpacity style={styles.saveButton} onPress={() => navigation.goBack()}>
          <Text style={styles.saveButtonText}>저장하기</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FAFAFA',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    left: 16,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333333',
  },
  content: {
    marginTop: 20, // 헤더와 본문 간격
    paddingHorizontal: 20, // 좌우 여백 추가
  },
  label: {
    fontSize: 18,
    fontWeight: '600',
    color: '#555555',
    marginBottom: 10,
  },
  textArea: {
    height: 300, // 입력창을 크게 설정
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 10,
    padding: 20, // 입력창 내부 여백을 늘림
    backgroundColor: '#F5F5F5',
    textAlignVertical: 'top',
    fontSize: 18, // 폰트 크기를 키워 가독성 향상
    color: '#333333',
    marginBottom: 20,
  },
  saveButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  saveButtonText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#FFFFFF',
  },
});
