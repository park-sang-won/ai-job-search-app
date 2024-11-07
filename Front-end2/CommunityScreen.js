// CommunityScreen.js
import React from 'react';
import { View, Text, TouchableOpacity, TextInput, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function CommunityScreen({ navigation }) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/left.png' }}
            style={styles.backIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>커뮤니티</Text>
        <TouchableOpacity style={styles.searchButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/search.png' }}
            style={styles.searchIcon}
          />
        </TouchableOpacity>
      </View>

      <TouchableOpacity style={styles.writeButton}>
        <Text style={styles.writeButtonText}>글작성</Text>
      </TouchableOpacity>

      <ScrollView style={styles.postList}>
        {[1, 2, 3, 4].map((_, index) => (
          <View key={index} style={styles.postItem}>
            <Text style={styles.postTitle}>제목</Text>
            <View style={styles.postContent}>
              <Text style={styles.postText}>내용</Text>
            </View>
            <Text style={styles.postInfo}>몇 분 전 | 글쓴이</Text>
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
    padding: 16,
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    flex: 1,
    textAlign: 'center',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  writeButton: {
    alignSelf: 'flex-end',
    backgroundColor: '#4CAF50',
    borderRadius: 15,
    paddingVertical: 6,
    paddingHorizontal: 15,
    margin: 16,
  },
  writeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
  postList: {
    paddingHorizontal: 16,
  },
  postItem: {
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
    marginBottom: 10,
  },
  postTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    backgroundColor: '#F5F5F5',
    padding: 10,
    borderRadius: 8,
  },
  postText: {
    color: '#707070',
  },
  postInfo: {
    color: '#B0B0B0',
    fontSize: 12,
    marginTop: 5,
  },
});
