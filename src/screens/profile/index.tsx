import React, {useEffect, useState} from 'react';
import {Pressable, Text, View} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Input} from '../../components';
import {styles} from './style';
import {useNavigation} from '@react-navigation/native';
import {clearStorage, getUserData, Screens, setUserData} from '../../utils';
import {useMutation} from '@apollo/client';
import {UPDATE} from '../../apollo/mutations/user';
import {User} from '../../models';

interface IFormObject {
  name: string;
  email: string;
}

export function ProfileScreen() {
  const {reset} = useNavigation();
  const [data, setData] = useState<IFormObject>({name: '', email: ''});
  const [info, setInfo] = useState<{type: 'success' | 'error'; text: string}>();

  useEffect(() => {
    getUserData().then(setData);
  }, []);

  const onLogoutClick = () => {
    clearStorage();
    reset({
      index: 1,
      routes: [{name: Screens.HOME }, {name: Screens.SIGN_IN}],
    });
  };

  const [updateMutation] = useMutation<User>(UPDATE);
  const onSubmit = () => {
    try {
      updateMutation({variables: {...data}});
      setUserData(data as User);
      setInfo({type: 'success', text: 'Data updated successfully'});
    } catch (e) {
      setInfo({type: 'error', text: 'Data updation error'});
    }
  };

  return (
    <>
      <SafeAreaView style={styles.container}>
        <View>
          <Text style={styles.header}>PROFILE</Text>
          <View style={styles.form}>
            <Input
              defaultValue={data.name}
              textStyle={styles.inputText}
              inputStyle={styles.inputStyle}
              label={'Name shown on your shared cards'}
              onChange={name => setData({...data, name})}
            />
            <Input
              defaultValue={data.email}
              inputStyle={styles.inputStyle}
              textStyle={styles.inputText}
              label={'Email'}
              onChange={email => setData({...data, email})}
            />
            {info && (
              <View
                style={info.type === 'success' ? styles.success : styles.error}>
                <Text style={styles.doneText}>{info.text}</Text>
              </View>
            )}
          </View>
        </View>
        <View style={styles.logOutView}>
          <Pressable
            onPress={() => onLogoutClick()}
            style={styles.logOutButton}>
            <Text style={styles.inputText}>LOG OUT</Text>
          </Pressable>
        </View>
      </SafeAreaView>
      <View style={styles.footer}>
        <Pressable onPress={onSubmit} style={styles.doneButton}>
          <Text style={styles.doneText}>DONE</Text>
        </Pressable>
      </View>
    </>
  );
}
