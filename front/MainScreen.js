// MainScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

export default function MainScreen() {
  const navigation = useNavigation();
  const handleBackToLogin = () => {
    navigation.reset({
      index: 0,
      routes: [{ name: 'Login' }],
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 상단 헤더 */}
      <View style={styles.header}>
        {/* Custom Back Button */}
        <TouchableOpacity onPress={handleBackToLogin} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>

        <Text style={styles.headerTitle}>메인 화면</Text>

        {/* Profile (MY) Button */}
        <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/user.png' }}
            style={styles.profileIcon}
          />
          <Text style={styles.profileText}>MY</Text>
        </TouchableOpacity>
      </View>

      {/* 메인 내용 */}
      <View style={styles.contentContainer}>
        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('JobRecommendation')}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios/50/000000/box.png' }}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>적성에 맞는 직업군 추천</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('CompanyRecommendation')}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios/50/000000/company.png' }}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>기업 추천</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.menuItem} onPress={() => navigation.navigate('Community')}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios/50/000000/chat.png' }}
            style={styles.menuIcon}
          />
          <Text style={styles.menuText}>커뮤니티</Text>
        </TouchableOpacity>
      </View>
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
    justifyContent: 'space-between', // 양쪽 끝에 버튼 배치
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#F5F5F5',
  },
  backButton: {
    padding: 5,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1, // 제목이 중앙에 위치하도록 설정
  },
  profileButton: {
    alignItems: 'center',
    padding: 5,
  },
  profileIcon: {
    width: 30,
    height: 30,
  },
  profileText: {
    fontSize: 12,
    fontWeight: 'bold',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center', // 세로 중앙 정렬
    alignItems: 'center', // 가로 중앙 정렬
  },
  menuItem: {
    alignItems: 'center',
    marginVertical: 20,
    width: '80%',
    paddingVertical: 10,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
    elevation: 2, // 그림자 효과 (Android)
    shadowColor: '#000', // 그림자 효과 (iOS)
    shadowOpacity: 0.2,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
