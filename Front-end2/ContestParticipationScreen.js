// ContestParticipationScreen.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView } from 'react-native';

export default function ContestParticipationScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>대회 참여 내역</Text>
      <View style={styles.header}>
        <Text style={styles.label}>대회명 작성</Text>
        <Text style={styles.label}>참여 및 수상여부</Text>
      </View>
      <ScrollView>
        {[...Array(5)].map((_, index) => (
          <View key={index} style={styles.row}>
            <TextInput
              style={styles.input}
              placeholder="대회명을 입력해주세요"
              placeholderTextColor="#B0B0B0"
            />
            <TouchableOpacity style={[styles.statusButton, index % 2 === 0 ? styles.participation : styles.award]}>
              <Text style={styles.statusButtonText}>{index % 2 === 0 ? '참여' : '수상'}</Text>
            </TouchableOpacity>
          </View>
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
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#000',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#F5F5F5',
    marginRight: 10,
  },
  statusButton: {
    width: 50,
    height: 30,
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  participation: {
    backgroundColor: '#FFA500',
  },
  award: {
    backgroundColor: '#32CD32',
  },
  statusButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  saveText: {
    fontSize: 16,
    color: '#1E90FF',
    textAlign: 'right',
    marginTop: 20,
  },
});
