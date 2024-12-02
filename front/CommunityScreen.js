import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, ScrollView, Image } from 'react-native';

export default function CommunityScreen({ navigation }) {
  const [posts, setPosts] = useState([
    { id: 1, title: '백엔드', content: '모집합니다~', author: '글쓴이 1', time: '몇 분 전' },
  ]);

  const handleAddPost = (post) => {
    setPosts((prevPosts) => [...prevPosts, { id: prevPosts.length + 1, ...post }]);
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
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

      {/* 검색창 */}
      <TextInput
        style={styles.searchBox}
        placeholder="제목을 입력해주세요"
        placeholderTextColor="#B0B0B0"
      />

      {/* 글작성 버튼 */}
      <TouchableOpacity
        style={styles.writeButton}
        onPress={() => navigation.navigate('WritePost', { onAddPost: handleAddPost })}
      >
        <Text style={styles.writeButtonText}>글작성</Text>
      </TouchableOpacity>

      {/* 게시글 목록 */}
      <ScrollView>
        {posts.map((post) => (
          <TouchableOpacity
            key={post.id}
            style={styles.postContainer}
            onPress={() => navigation.navigate('PostDetail', { post })} // 게시글 데이터를 전달
          >
            <Text style={styles.postTitle}>{post.title}</Text>
            <Text style={styles.postContent}>{post.content}</Text>
            <View style={styles.postFooter}>
              <Text style={styles.postTime}>{post.time}</Text>
              <Text style={styles.postAuthor}>{post.author}</Text>
            </View>
          </TouchableOpacity>
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
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    marginRight: 10,
  },
  backIcon: {
    width: 24,
    height: 24,
  },
  title: {
    flex: 1,
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  searchButton: {
    marginLeft: 10,
  },
  searchIcon: {
    width: 24,
    height: 24,
  },
  searchBox: {
    height: 40,
    borderColor: '#D3D3D3',
    borderWidth: 1,
    borderRadius: 20,
    paddingHorizontal: 15,
    marginHorizontal: 16,
    marginVertical: 10,
    backgroundColor: '#F5F5F5',
  },
  writeButton: {
    alignSelf: 'flex-end',
    marginHorizontal: 16,
    marginVertical: 10,
    paddingVertical: 6,
    paddingHorizontal: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 15,
  },
  writeButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  postContainer: {
    backgroundColor: '#F5F5F5',
    padding: 16,
    marginHorizontal: 16,
    marginVertical: 8,
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  postContent: {
    fontSize: 14,
    color: '#707070',
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  postTime: {
    fontSize: 12,
    color: '#A0A0A0',
  },
  postAuthor: {
    fontSize: 12,
    color: '#A0A0A0',
  },
});

