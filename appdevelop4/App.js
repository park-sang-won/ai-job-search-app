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

const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }} />
        <Stack.Screen name="Login" component={LoginScreen} options={{ title: '로그인' }} />
        <Stack.Screen name="Signup" component={SignupScreen} options={{ title: '회원가입' }} />
        <Stack.Screen name="ProfileInput" component={ProfileInputScreen} options={{ title: '이력정보 입력' }} />
        <Stack.Screen name="ContestParticipation" component={ContestParticipationScreen} options={{ title: '대회 참여 내역' }} /> 
        <Stack.Screen name="SelfIntroduction" component={SelfIntroductionScreen} options={{ title: '간단 자기소개서' }} />
        <Stack.Screen name="Certification" component={CertificationScreen} options={{ title: '자격증' }} />
        <Stack.Screen name="CertificationSelection" component={CertificationSelectionScreen} options={{ title: '자격증 종류' }} />
        <Stack.Screen name="Main" component={MainScreen} options={{ title: '메인' }} options={{ headerShown: false }} />
        <Stack.Screen name="JobRecommendation" component={JobRecommendationScreen} options={{ title: '적성검사' }} />
        <Stack.Screen name="CompanyRecommendation" component={CompanyRecommendationScreen} options={{ title: '기업 찾기' }} />
        <Stack.Screen name="Community" component={CommunityScreen} options={{title: '커뮤니티'}} options={{headerShown: false}}/>
        <Stack.Screen name="Profile" component={ProfileScreen} options={{ title: '프로필' }} />
        <Stack.Screen name="DeveloperAptitudeTest" component={DeveloperAptitudeTestScreen} options={{title: '개발자 적성 검사'}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}
