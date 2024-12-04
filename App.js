import React, { useState, useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { initializeApp } from '@firebase/app';
import { getAuth, onAuthStateChanged, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from '@firebase/auth';
import HomeScreen from './front/HomeScreen';
import LoginScreen from './front/LoginScreen';
import SignupScreen from './front/SignupScreen';
import ProfileInputScreen from './front/ProfileInputScreen';
import ContestParticipationScreen from './front/ContestParticipationScreen';
import SelfIntroductionScreen from './front/SelfIntroductionScreen';
import CertificationScreen from './front/CertificationScreen';
import CertificationSelectionScreen from './front/CertificationSelectionScreen';
import MainScreen from './front/MainScreen';
import JobRecommendationScreen from './front/JobRecommendationScreen';
import CompanyRecommendationScreen from './front/CompanyRecommendationScreen';
import CommunityScreen from './front/CommunityScreen';
import ProfileScreen from './front/ProfileScreen';
import DeveloperAptitudeTestScreen from './front/DeveloperAptitudeTestScreen';
import WritePostScreen from './front/WritePostScreen';
import PostDetailScreen from './front/PostDetailScreen';
import ResultScreen from './front/ResultScreen';

// Firebase Configuration
const firebaseConfig = {
  apiKey: "AIzaSyBBo_jKQ4Ihsv7q5AnuTUbj7jEw7OnQihM",
  authDomain: "jobaba-4ca97.firebaseapp.com",
  databaseURL: "https://jobaba-4ca97-default-rtdb.firebaseio.com",
  projectId: "jobaba-4ca97",
  storageBucket: "jobaba-4ca97.firebasestorage.app",
  messagingSenderId: "67124286362",
  appId: "1:67124286362:web:4b07382e519d12edd6a023",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const Stack = createStackNavigator();

// Auth Screens
function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인', headerShown: false }} />
      <Stack.Screen name="Signup" component={SignupScreen} options={{ title: '회원가입', headerShown: false }} />
    </Stack.Navigator>
  );
}

// Main App Screens
function MainAppStack() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
      <Stack.Screen name="Main" component={MainScreen} options={{ title: '메인', headerShown: false }} />
      <Stack.Screen name="ProfileInput" component={ProfileInputScreen} options={{ title: '이력정보 입력', headerShown: false }} />
      <Stack.Screen name="ContestParticipation" component={ContestParticipationScreen} options={{ title: '대회 참여 내역', headerShown: false }} />
      <Stack.Screen name="SelfIntroduction" component={SelfIntroductionScreen} options={{ title: '간단 자기소개서', headerShown: false }} />
      <Stack.Screen name="Certification" component={CertificationScreen} options={{ title: '자격증' }} />
      <Stack.Screen name="CertificationSelection" component={CertificationSelectionScreen} options={{ title: '자격증 종류' }} />
      <Stack.Screen name="JobRecommendation" component={JobRecommendationScreen} options={{ title: '적성검사', headerShown: false }} />
      <Stack.Screen name="CompanyRecommendation" component={CompanyRecommendationScreen} options={{ title: '기업 찾기', headerShown: false }} />
      <Stack.Screen name="Community" component={CommunityScreen} options={{ title: '커뮤니티', headerShown: false }} />
      <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
      <Stack.Screen name="WritePost" component={WritePostScreen} options={{ title: '글 작성' }} />
      <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: '글 상세' }} />
      <Stack.Screen name="DeveloperAptitudeTestScreen" component={DeveloperAptitudeTestScreen} options={{ headerShown: false }} />
      <Stack.Screen name="ResultScreen" component={ResultScreen} options={{ title: '결과' }} />
    </Stack.Navigator>
  );
}

export default function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <NavigationContainer>
      {user ? <MainAppStack /> : <AuthStack />}
    </NavigationContainer>
  );
}
