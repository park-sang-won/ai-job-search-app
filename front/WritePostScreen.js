// WritePostScreen.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, Image } from 'react-native';

export default function WritePostScreen({ route, navigation }) {
  const { onAddPost } = route.params;
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSavePost = () => {
    if (title.trim() && content.trim()) {
      onAddPost({ title, content, author: '글쓴이', likes: 0 });
      navigation.goBack();
    } else {
      alert('제목과 내용을 입력해주세요!');
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      {/* 헤더 */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.closeButton}>
          <Image
            source={{ uri: 'https://img.icons8.com/ios-filled/50/000000/delete-sign.png' }}
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        <Text style={styles.title}>글작성</Text>
        <TouchableOpacity onPress={handleSavePost} style={styles.submitButton}>
          <Text style={styles.submitButtonText}>작성</Text>
        </TouchableOpacity>
      </View>

      {/* 입력 폼 */}
      <View style={styles.form}>
        <TextInput
          style={styles.titleInput}
          placeholder="제목"
          placeholderTextColor="#B0B0B0"
          value={title}
          onChangeText={setTitle}
        />
        <TextInput
          style={styles.contentInput}
          placeholder="내용을 작성하세요."
          placeholderTextColor="#B0B0B0"
          value={content}
          onChangeText={setContent}
          multiline
        />
      </View>

      {/* 작성자 표시 */}
      <View style={styles.authorContainer}>
        <Text style={styles.authorText}>글쓴이</Text>
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
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  closeButton: {
    padding: 5,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  submitButton: {
    backgroundColor: '#1E90FF',
    paddingHorizontal: 15,
    paddingVertical: 6,
    borderRadius: 15,
  },
  submitButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
    fontSize: 14,
  },
  form: {
    padding: 16,
  },
  titleInput: {
    fontSize: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#D3D3D3',
    marginBottom: 20,
    paddingVertical: 5,
    color: '#000000',
  },
  contentInput: {
    fontSize: 14,
    textAlignVertical: 'top',
    height: 200,
    color: '#000000',
  },
  authorContainer: {
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    padding: 16,
  },
  authorText: {
    fontSize: 14,
    color: '#B0B0B0',
    textAlign: 'right',
  },
});
