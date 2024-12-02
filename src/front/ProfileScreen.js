// ProfileScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, Image, StyleSheet, SafeAreaView } from 'react-native';

export default function ProfileScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.greeting}>ooo님 반갑습니다</Text>
        <View style={styles.profileBox}></View>
      </View>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>비밀번호 변경</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton} onPress={() => navigation.navigate('ProfileInput')}>
        <Text style={styles.optionText}>이력 정보 변경</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.optionButton}>
        <Text style={styles.optionText}>기타 설정</Text>
        <Image
          source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/settings.png' }}
          style={styles.settingsIcon}
        />
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    backgroundColor: '#00C2C2',
    padding: 20,
    alignItems: 'center',
  },
  backButton: {
    position: 'absolute',
    top: 20,
    left: 20,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 10,
  },
  profileBox: {
    width: '80%',
    height: 50,
    backgroundColor: '#B2F2F2',
    borderRadius: 10,
    marginVertical: 20,
  },
  optionButton: {
    paddingVertical: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 20,
  },
  optionText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  settingsIcon: {
    width: 20,
    height: 20,
    tintColor: '#000000',
  },
});
