// CertificationSelectionScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

export default function CertificationSelectionScreen() {
  const navigation = useNavigation();
  const route = useRoute();
  const { index, setCertifications } = route.params;

  const certifications = [
    '컴활 2급 필기',
    '컴활 2급 실기',
    '정보처리기능사',
    '리눅스 마스터 2급',
    '리눅스 마스터 1급',
    '정보처리기사',
  ];

  const handleSelectCertification = (certification) => {
    setCertifications((prev) => {
      const newCertifications = [...prev];
      newCertifications[index] = certification;
      return newCertifications;
    });
    navigation.goBack();
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>자격증 종류</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {certifications.map((cert, idx) => (
          <TouchableOpacity
            key={idx}
            style={styles.certificationButton}
            onPress={() => handleSelectCertification(cert)}
          >
            <Text style={styles.certificationText}>{cert}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
        <Text style={styles.backText}>뒤로 가기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
  },
  scrollContainer: {
    alignItems: 'center',
  },
  certificationButton: {
    width: '90%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 25,
    backgroundColor: '#FFFFFF',
    marginVertical: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
  },
  certificationText: {
    fontSize: 16,
    color: '#000',
  },
  backButton: {
    alignSelf: 'center',
    marginTop: 20,
  },
  backText: {
    fontSize: 16,
    color: '#1E90FF',
  },
});

