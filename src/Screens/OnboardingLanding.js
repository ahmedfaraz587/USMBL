import React from 'react'
import  Onboarding from 'react-native-onboarding-swiper';
import OnboardingScreen2 from './OnboardingScreen2';
import OnboardingScreen3 from './OnboardingScreen3';
import OnboardingScreen1 from './OnboardingScreen1';

const OnboardingLanding = ({navigation}) => {
     return (
       <Onboarding
         onDone={() => navigation.navigate('Signup')}
         onSkip={() => navigation.navigate('Signup')}
         bottomBarHighlight={false}
         imageContainerStyles={{
           flex: 1,
            alignSelf: 'center',
           paddingBottom: 0,
           width: '100%',
         }}
         pages={[
           {
             backgroundColor: '#FFF2EA',
             image: <OnboardingScreen1 />,
             title: ' ',
             subtitle: ' ',
           },
           {
             backgroundColor: '#FFF2EA',
             image: <OnboardingScreen2 />,
             title: '',
             subtitle: '',
           },
           {
             backgroundColor: '#fff',
             image: <OnboardingScreen3 />,
             title: '',
             subtitle: '',
           },
         ]}
       />
     );
}

export default OnboardingLanding;