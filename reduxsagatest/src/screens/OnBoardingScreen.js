import React, {useEffect} from 'react';
import {View, Text, Image} from 'react-native';
import Onboarding from 'react-native-onboarding-swiper';
import SplashScreen from 'react-native-splash-screen';

const OnBoardingScreen = ({navigation}) => {
  useEffect(() => {
    SplashScreen.hide();
  }, []);
  return (
    <Onboarding
      onSkip={() => navigation.replace('Home')}
      onDone={() => navigation.replace('Home')}
      pages={[
        {
          backgroundColor: '#a6e4d0',
          image: (
            <Image
              source={require('../assets/OnBoardingAssets/onboarding-img1.png')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#fdeb93',
          image: (
            <Image
              source={require('../assets/OnBoardingAssets/onboarding-img2.png')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
        {
          backgroundColor: '#e9bcbe',
          image: (
            <Image
              source={require('../assets/OnBoardingAssets/onboarding-img3.png')}
            />
          ),
          title: 'Onboarding',
          subtitle: 'Done with React Native Onboarding Swiper',
        },
      ]}
    />
  );
};

export default OnBoardingScreen;
