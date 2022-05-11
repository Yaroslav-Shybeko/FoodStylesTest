import AsyncStorage from '@react-native-async-storage/async-storage';
import { User } from '../models';

export async function setUserData(userData: User) {
  console.log(userData);
  await AsyncStorage.setItem("userData", JSON.stringify(userData));
}

export async function getUserData() {
  try {
   const response =  await AsyncStorage.getItem('userData')
   return response != null ? JSON.parse(response) : null
  } catch(e) {
    console.log(e)
  }
}

export async function clearStorage() {
  await AsyncStorage.clear();
}

export async function setToken(token: string) {
  await AsyncStorage.setItem("token", token);
}

export async function getToken() {
  return await AsyncStorage.getItem("token");
}