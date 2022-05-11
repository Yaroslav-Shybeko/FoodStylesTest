import React, {useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import LinearGradient from 'react-native-linear-gradient';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {Icon, Input} from '../../components';
import {styles} from './styles';
import {useMutation} from '@apollo/client';
import {SIGN_UP} from '../../apollo/mutations/user';
import {User} from '../../models';
import {Colors, Screens, setToken} from '../../utils';

interface IFormObject {
  name: string;
  email: string;
  password: string;
}

export function SignUpScreen() {
  const {goBack, navigate} = useNavigation();
  const [data, setData] = useState<IFormObject>({
    name: '',
    email: '',
    password: '',
  });
  const [error, setError] = useState(false);

  const [signUpMutation] = useMutation<{
    user: User;
    accessToken: string;
    refreshToken: string;
  }>(SIGN_UP);

  const submit = async () => {
    try {
      const res = await signUpMutation({variables: {...data}});
      setToken(res.data?.accessToken || '')
      navigate(Screens.SIGN_IN);
    } catch (e) {
      setError(true);
      console.log(e);
    }
  };

  return (
    <LinearGradient
      colors={[Colors.ORANGE, Colors.RED]}
      style={styles.gradient}>
      <SafeAreaView style={styles.container}>
        <View style={styles.header}>
          <Pressable onPress={goBack} style={styles.backButton}>
            <Icon type={'Back'} style={styles.backIcon} />
          </Pressable>
          <Text style={styles.signUpText}>Sign up with Email</Text>
        </View>
        <View style={styles.form}>
          <Input
            inputStyle={styles.inputStyle}
            label={'Your name'}
            onChange={name => setData({...data, name})}
          />
          <Input
            inputStyle={styles.inputStyle}
            label={'Email'}
            onChange={email => setData({...data, email})}
          />
          <Input
            inputStyle={styles.inputStyle}
            isPassword
            label={'Password (min 6 characters)'}
            onChange={password => setData({...data, password})}
          />
        </View>
        {error && (
          <View style={styles.errorContainer}>
            <Text style={styles.textError}>Validation Error</Text>
          </View>
        )}
        <Pressable style={styles.signUpButton} onPress={submit}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </Pressable>
      </SafeAreaView>
    </LinearGradient>
  );
}
