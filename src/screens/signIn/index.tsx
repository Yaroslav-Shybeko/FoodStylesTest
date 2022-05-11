import React, {useEffect, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Icon, Input} from '../../components';
import {styles} from './styles';
import {useMutation} from '@apollo/client';
import {Colors, Screens, setToken, setUserData} from '../../utils';
import {LOG_IN} from '../../apollo/mutations/user';
import LinearGradient from 'react-native-linear-gradient';

interface IFormObject {
  email: string;
  password: string;
}

export function SignInScreen() {
  const {goBack, navigate} = useNavigation();
  const [data, setData] = useState<IFormObject>({email: '', password: ''});
  const [error, setError] = useState(false);

  const [loginMutation] = useMutation(LOG_IN);

  const submit = async () => {
    try {
      const res = await loginMutation({variables: {...data}});
      await setUserData(res.data.loginWithEmail.user);
      await setToken(res.data.loginWithEmail.accessToken);
      navigate(Screens.PROFILE);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  useEffect(() => {
    return () => setData({email: '', password: ''});
  }, []);

  return (
    <LinearGradient
      colors={[Colors.ORANGE, Colors.RED]}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={goBack} style={styles.backButton}>
            <Icon type={'Back'} style={styles.backIcon} />
          </Pressable>
          <Text style={styles.signInText}>Log In</Text>
        </View>

        <View style={styles.form}>
          <Input
            inputStyle={styles.inputStyle}
            label={'Email'}
            onChange={email => setData({...data, email})}
          />

          <Input
            inputStyle={styles.inputStyle}
            isPassword
            label={'Password'}
            onChange={password => setData({...data, password})}
          />

          {error && (
            <View style={styles.errorContainer}>
              <Text style={styles.textError}>
                Email or password is not correct
              </Text>
            </View>
          )}
        </View>

        <Pressable
          onPress={submit}
          style={[styles.signInButton, error && {marginTop: 50}]}>
          <Text style={styles.buttonText}>LOG IN</Text>
        </Pressable>
        <Pressable style={styles.forgotButton}>
          <Text style={styles.forgotText}>Forgot my password</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}
