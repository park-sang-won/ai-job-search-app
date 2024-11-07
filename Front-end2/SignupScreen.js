import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView } from 'react-native';

export default function SignupScreen({ navigation }) {
  const handleSignup = () => {
    // 회원가입 성공 로직을 여기에 추가
    navigation.navigate('ProfileInput'); // 회원가입 성공 시 이력정보 입력 화면으로 이동
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <View style={styles.inputRow}>
          <TextInput style={styles.input} placeholder="아이디" />
          <TouchableOpacity style={styles.checkButton}>
            <Text style={styles.checkButtonText}>확인</Text>
          </TouchableOpacity>
        </View>
        <TextInput style={styles.input} placeholder="비밀번호" secureTextEntry />
      </View>
      <TouchableOpacity style={styles.signupButton} onPress={handleSignup}>
        <Text style={styles.signupButtonText}>가입하기</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  formContainer: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 5,
    padding: 10,
    marginBottom: 20,
  },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    paddingBottom: 8,
    marginBottom: 8,
  },
  input: {
    flex: 1,
    padding: 10,
    fontSize: 16,
  },
  checkButton: {
    backgroundColor: '#F5F5F5',
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  checkButtonText: {
    color: '#000000',
  },
  signupButton: {
    width: '100%',
    paddingVertical: 14,
    backgroundColor: '#3B5998',
    borderRadius: 5,
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});
