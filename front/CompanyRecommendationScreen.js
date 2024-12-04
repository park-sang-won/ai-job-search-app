// CompanyRecommendationScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function CompanyRecommendationScreen({ navigation }) {
  const categories = ["전 분야", "프론트엔드", "백엔드/서버", "풀스택", "안드로이드", "인공지능/머신러닝"];
  const companies = [
    { name: "(주)우아한 형제들", category: "백엔드/서버" },
    { name: "빗썸코리아", category: "프론트엔드" },
    { name: "(주)위메이드", category: "풀스택" },
    { name: "(주)11번가", category: "백엔드/서버" },
    { name: "(주)이스트게임즈", category: "안드로이드" },
    { name: "(주)숲", category: "전 분야" },
    { name: "한국타이어앤테크놀로지", category: "인공지능/머신러닝" },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>기업 찾기</Text>
      </View>
      <TextInput
        style={styles.searchBox}
        placeholder="찾고싶은 회사를 찾아보세요"
        placeholderTextColor="#B0B0B0"
      />

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.categoryContainer}>
        {categories.map((category, index) => (
          <TouchableOpacity key={index} style={styles.categoryButton}>
            <Text style={styles.categoryText}>{category}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView style={styles.companyList}>
        {companies.map((company, index) => (
          <View key={index} style={styles.companyItem}>
            <Text style={[styles.companyName, styles[`category_${company.category}`]]}>{company.name}</Text>
            <Text style={styles.companyCategory}>{company.category}</Text>
            <TouchableOpacity style={styles.infoButton}>
              <Image
                source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/info.png' }}
                style={styles.infoIcon}
              />
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center', // 제목을 중앙으로 배치
    padding: 16,
    backgroundColor: '#FFFFFF',
    position: 'relative', // 뒤로 가기 버튼과 제목의 위치를 독립적으로 설정
  },
  backButton: {
    position: 'absolute', // 뒤로 가기 버튼을 제목과 독립적으로 위치
    left: 16, // 화면 왼쪽에 고정
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchBox: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
    marginBottom: 10,
  },
  categoryContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  categoryButton: {
    paddingVertical: 6,
    paddingHorizontal: 15,
    borderRadius: 15,
    backgroundColor: '#E0E0E0',
    marginHorizontal: 5,
  },
  categoryText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000000',
  },
  companyList: {
    flex: 1,
  },
  companyItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  companyName: {
    flex: 1,
    fontSize: 16,
    fontWeight: 'bold',
  },
  companyCategory: {
    color: '#707070',
    fontSize: 14,
    marginRight: 10,
  },
  infoButton: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
  },
  infoIcon: {
    width: 24,
    height: 24,
    tintColor: '#007BFF',
  },
  category_프론트엔드: { color: '#4CAF50' }, // 프론트엔드 색상
  category_백엔드서버: { color: '#FF5722' }, // 백엔드/서버 색상
  category_풀스택: { color: '#9C27B0' }, // 풀스택 색상
  category_안드로이드: { color: '#2196F3' }, // 안드로이드 색상
  category_인공지능머신러닝: { color: '#FFC107' }, // 인공지능/머신러닝 색상
  category_전분야: { color: '#9E9E9E' }, // 전 분야 색상
});
