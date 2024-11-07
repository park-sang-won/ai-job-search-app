import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileInputScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>이력정보 입력</Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('SelfIntroduction')}>
        <Text style={styles.buttonText}>간단 자기소개서</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('ContestParticipation')}>
        <Text style={styles.buttonText}>대회 참여 내역</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Certification')}>
        <Text style={styles.buttonText}>자격증</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Main')}>
        <Text style={styles.linkText}>메인으로 가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  button: {
    width: '80%',
    paddingVertical: 15,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    alignItems: 'center',
    marginVertical: 10,
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
  linkText: {
    fontSize: 16,
    color: '#1E90FF',
    marginTop: 20,
  },
});