import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function CertificationScreen() {
  const navigation = useNavigation();
  const [certifications, setCertifications] = useState(Array(5).fill("취득하신 자격증을 골라주세요"));

  const handleSelectCertification = (index) => {
    navigation.navigate('CertificationSelection', { index, setCertifications });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>자격증</Text>
      <View style={styles.header}>
        <Text style={styles.label}>취득한 자격증</Text>
      </View>
      <ScrollView>
        {certifications.map((cert, index) => (
          <TouchableOpacity
            key={index}
            style={styles.certificationButton}
            onPress={() => handleSelectCertification(index)}
          >
            <Text style={[styles.placeholderText, cert !== "취득하신 자격증을 골라주세요" && styles.selectedText]}>
              {cert}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
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
  header: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  certificationButton: {
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
    backgroundColor: '#F5F5F5',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  placeholderText: {
    color: '#B0B0B0',
    fontSize: 16,
  },
  selectedText: {
    color: '#000000', // 선택된 자격증의 텍스트 색상
  },
  saveText: {
    fontSize: 16,
    color: '#1E90FF',
    textAlign: 'right',
    marginTop: 20,
  },
});
