import React from 'react';
import {useNavigation} from '@react-navigation/native';
import {View, Text, SafeAreaView, Image} from 'react-native';
import {Button} from '../../components';
import {styles} from './styles';
import {Colors, Screens} from '../../utils';
import LinearGradient from 'react-native-linear-gradient';

export function HomeScreen() {
  const {navigate} = useNavigation();

  return (
    <LinearGradient colors={[Colors.ORANGE, Colors.RED]} style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.label}>
          <Text style={styles.labelText}>BETA VERSION</Text>
        </View>
        <View>
          <Image
            source={require('../../../assets/images/logo.png')}
            style={styles.logo}
          />
        </View>
        <View style={styles.buttons}>
          <Text style={styles.signInText}>
            Sign in to be able to save your preferences and settings.
          </Text>
          <View style={styles.buttons}>
            <Button
              text="Sign in with Apple"
              icon="Apple"
              buttonStyle={styles.button}
              rounded
            />
            <Button
              text="Sign in with Facebook"
              icon="Facebook"
              buttonStyle={styles.button}
              rounded
            />
            <Button
              text="Sign in with Google"
              icon="Google"
              buttonStyle={styles.button}
              rounded
            />
            <Button
              text="Sign up with Email"
              buttonStyle={styles.button}
              onClick={() => navigate(Screens.SIGN_UP)}
              rounded
            />
            <Button
              text="Log in with Email"
              onClick={() => navigate(Screens.SIGN_IN)}
              textStyle={styles.logInText}
            />
          </View>
        </View>
        <View style={styles.terms}>
          <Text style={styles.firstPart}>By signing in you accept the</Text>
          <View style={styles.secondPart}>
            <Text style={styles.link}>General Terms</Text>
            <Text style={styles.separator}>and</Text>
            <Text style={styles.link}>Privacy Policy</Text>
          </View>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}
