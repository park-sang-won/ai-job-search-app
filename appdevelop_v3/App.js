import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './HomeScreen';
import LoginScreen from './LoginScreen';
import SignupScreen from './SignupScreen';
import ProfileInputScreen from './ProfileInputScreen';
import ContestParticipationScreen from './ContestParticipationScreen';
import SelfIntroductionScreen from './SelfIntroductionScreen';
import CertificationScreen from './CertificationScreen';
import CertificationSelectionScreen from './CertificationSelectionScreen';
import MainScreen from './MainScreen';
import JobRecommendationScreen from './JobRecommendationScreen';
import CompanyRecommendationScreen from './CompanyRecommendationScreen';
import CommunityScreen from './CommunityScreen';
import ProfileScreen from './ProfileScreen';
import DeveloperAptitudeTestScreen from './DeveloperAptitudeTestScreen';
import WritePostScreen from './WritePostScreen';
import PostDetailScreen from './PostDetailScreen';
import ResultScreen from './ResultScreen';

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인' }}  options={{headerShown: false}}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: '회원가입' }} options={{headerShown: false}}/>
        <Stack.Screen name="ProfileInput" component={ProfileInputScreen} options={{ title: '이력정보 입력' }} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="ContestParticipation" component={ContestParticipationScreen} options={{ title: '대회 참여 내역' }} 
          options={{headerShown: false}}
        /> 
        <Stack.Screen name="SelfIntroduction" component={SelfIntroductionScreen} options={{ title: '간단 자기소개서' }} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="Certification" component={CertificationScreen} options={{ title: '자격증' }} />
        <Stack.Screen name="CertificationSelection" component={CertificationSelectionScreen} options={{ title: '자격증 종류' }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ title: '메인' }} options={{ headerShown: false }} />
        <Stack.Screen name="JobRecommendation" component={JobRecommendationScreen} options={{ title: '적성검사' }} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="CompanyRecommendation" component={CompanyRecommendationScreen} options={{ title: '기업 찾기' }} 
          options={{headerShown: false}}
        />
        <Stack.Screen name="Community" component={CommunityScreen} options={{title: '커뮤니티'}} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
        <Stack.Screen name="WritePost" component={WritePostScreen} options={{ title: '글 작성' }} />
        <Stack.Screen name="PostDetail" component={PostDetailScreen} options={{ title: '글 상세' }} />
        <Stack.Screen
          name="DeveloperAptitudeTestScreen"
          component={DeveloperAptitudeTestScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="ResultScreen"
          component={ResultScreen}
          options={{ title: '결과' }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
