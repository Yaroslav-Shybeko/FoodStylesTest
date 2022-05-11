import React, {useLayoutEffect, useState} from 'react';
import {
  NavigationContainer,
  useNavigationContainerRef,
} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {
  HomeScreen,
  SignUpScreen,
  SignInScreen,
  ProfileScreen,
} from '../screens';
import {getToken, Screens} from '../utils';

type StackParamsList = Record<Screens, undefined>;

const Stack = createNativeStackNavigator<StackParamsList>();

function AppStack() {
  const navigationRef = useNavigationContainerRef<StackParamsList>();
  const [initialRoute, setInitialRoute] = useState<Screens | null>(null);

  useLayoutEffect(() => {
    getToken().then(token =>
      setInitialRoute(token ? Screens.PROFILE : Screens.HOME),
    );
  }, []);

  return (
    initialRoute && (
      <NavigationContainer ref={navigationRef}>
        <Stack.Navigator
          initialRouteName={initialRoute}
          screenOptions={{headerShown: false}}>
          <Stack.Screen name={Screens.HOME} component={HomeScreen} />
          <Stack.Screen name={Screens.SIGN_UP} component={SignUpScreen} />
          <Stack.Screen name={Screens.SIGN_IN} component={SignInScreen} />
          <Stack.Screen name={Screens.PROFILE} component={ProfileScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    )
  );
}

export default AppStack;
