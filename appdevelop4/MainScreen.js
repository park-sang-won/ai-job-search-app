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
      {/* Custom Back Button */}
      <TouchableOpacity onPress={handleBackToLogin} style={styles.backButton}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
          style={styles.backIcon}
        />
      </TouchableOpacity>

      {/* Profile (MY) Button */}
      <TouchableOpacity style={styles.profileButton} onPress={() => navigation.navigate('Profile')}>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/user.png' }}
          style={styles.profileIcon}
        />
        <Text style={styles.profileText}>MY</Text>
      </TouchableOpacity>

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
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
    zIndex: 10, // 화면 위로 올리기
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  profileButton: {
    position: 'absolute',
    top: 20,
    right: 20,
    alignItems: 'center',
    zIndex: 10, // 화면 위로 올리기
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
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 60, // 상단 여백 확보
  },
  menuItem: {
    alignItems: 'center',
    marginVertical: 20,
  },
  menuIcon: {
    width: 50,
    height: 50,
    marginBottom: 10,
  },
  menuText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});
