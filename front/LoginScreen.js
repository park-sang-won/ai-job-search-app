import React from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function LoginScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('Home')} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>로그인</Text>
      </View>

      {/* 로그인 폼 */}
      <View style={styles.formContainer}>
        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/user--v1.png' }} />
          <TextInput
            style={styles.input}
            placeholder="아이디"
            placeholderTextColor="#D3D3D3"
          />
        </View>

        <View style={styles.inputContainer}>
          <Image style={styles.icon} source={{ uri: 'https://img.icons8.com/ios-glyphs/30/000000/lock--v1.png' }} />
          <TextInput
            style={styles.input}
            placeholder="비밀번호"
            placeholderTextColor="#D3D3D3"
            secureTextEntry
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Main')}>
          <Text style={styles.loginButtonText}>로그인</Text>
        </TouchableOpacity>

        {/* 소셜 로그인 */}
        <View style={styles.socialContainer}>
          <Image style={styles.socialIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/google-logo.png' }} />
          <Image style={styles.socialIcon} source={{ uri: 'https://img.icons8.com/color/48/000000/kakaotalk.png' }} />
          <Image style={styles.socialIcon} source={{ uri: 'https://clova-phinf.pstatic.net/MjAxODAzMjlfOTIg/MDAxNTIyMjg3MzM3OTAy.WkiZikYhauL1hnpLWmCUBJvKjr6xnkmzP99rZPFXVwgg.mNH66A47eL0Mf8G34mPlwBFKP0nZBf2ZJn5D4Rvs8Vwg.PNG/image.png' }} />
        </View>

        {/* 회원가입 링크 */}
        <TouchableOpacity onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupText}>회원가입</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    backgroundColor: '#F5F5F5',
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
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    flex: 1,
    justifyContent: 'center', // 수직으로 중앙 정렬
    alignItems: 'center', // 수평으로 중앙 정렬
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%', // 좌우 여백을 주기 위해 너비 설정
    height: 50,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 25,
    marginVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: '#F9F9F9',
  },
  icon: {
    width: 24,
    height: 24,
    marginRight: 10,
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  loginButton: {
    width: '80%', // 좌우 여백을 유지하며 너비 설정
    height: 50,
    backgroundColor: '#3B5998',
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 12,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 16,
  },
  socialIcon: {
    width: 48,
    height: 48,
    marginHorizontal: 10,
  },
  signupText: {
    marginTop: 16,
    color: '#007BFF',
    fontSize: 16,
    textAlign: 'center',
  },
});

