import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, Image } from 'react-native';

export default function PostDetailScreen({ route, navigation }) {
  const { post } = route.params;
  const [likes, setLikes] = useState(post.likes || 0); // 좋아요 수
  const [isLiked, setIsLiked] = useState(false); // 좋아요 상태
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState([]); // 댓글 목록 상태

  const handleLikeToggle = () => {
    setIsLiked((prevState) => !prevState);
    setLikes((prevLikes) => (isLiked ? prevLikes - 1 : prevLikes + 1));
  };

  const handleCommentSubmit = () => {
    if (comment.trim()) {
      setComments((prevComments) => [...prevComments, { id: prevComments.length + 1, text: comment }]);
      setComment('');
    } else {
      alert('댓글을 입력해주세요.');
    }
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
      </View>

      {/* 게시글 상세 내용 */}
      <View style={styles.postContainer}>
        <Text style={styles.postTitle}>{post.title}</Text>
        <Text style={styles.postContent}>{post.content}</Text>
        <View style={styles.postFooter}>
          <Text style={styles.postAuthor}>글쓴이: {post.author}</Text>
          <Text style={styles.postTime}>몇 분 전</Text>
        </View>
        <TouchableOpacity style={styles.likeButton} onPress={handleLikeToggle}>
          <Image
            source={{
              uri: isLiked
                ? 'https://img.icons8.com/ios-filled/50/FF0000/filled-like.png' // 좋아요 상태
                : 'https://img.icons8.com/ios/50/000000/like--v1.png', // 좋아요 해제 상태
            }}
            style={styles.likeIcon}
          />
          <Text style={styles.likesCount}>{likes}</Text>
        </TouchableOpacity>
      </View>

      {/* 댓글 목록 */}
      <FlatList
        data={comments}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.commentItem}>
            <Text style={styles.commentText}>{item.text}</Text>
          </View>
        )}
        style={styles.commentsList}
      />

      {/* 댓글 입력창 */}
      <View style={styles.commentContainer}>
        <TextInput
          style={styles.commentInput}
          placeholder="댓글을 작성해주세요."
          placeholderTextColor="#B0B0B0"
          value={comment}
          onChangeText={setComment}
        />
        <TouchableOpacity style={styles.commentButton} onPress={handleCommentSubmit}>
          <Text style={styles.commentButtonText}>작성</Text>
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
  postContainer: {
    margin: 16,
    padding: 16,
    backgroundColor: '#F5F5F5',
    borderRadius: 10,
  },
  postTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  postContent: {
    fontSize: 16,
    marginBottom: 10,
  },
  postFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
  },
  postAuthor: {
    fontSize: 14,
    color: '#707070',
  },
  postTime: {
    fontSize: 14,
    color: '#707070',
  },
  likeButton: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  likeIcon: {
    width: 24,
    height: 24,
    marginRight: 5,
  },
  likesCount: {
    fontSize: 16,
    color: '#000',
  },
  commentsList: {
    flex: 1,
    marginHorizontal: 16,
    marginTop: 10,
  },
  commentItem: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  commentText: {
    fontSize: 14,
    color: '#000',
  },
  commentContainer: {
    flexDirection: 'row',
    padding: 16,
    backgroundColor: '#FFFFFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
  },
  commentInput: {
    flex: 1,
    borderWidth: 1,
    borderColor: '#D3D3D3',
    borderRadius: 20,
    paddingHorizontal: 15,
    backgroundColor: '#F5F5F5',
  },
  commentButton: {
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#1E90FF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  commentButtonText: {
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});
