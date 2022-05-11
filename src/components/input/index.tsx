import React from 'react';
import {StyleProp, Text, TextInput, TextStyle, View} from 'react-native';

interface Props {
  label: string;
  onChange: (text: string) => void;
  isPassword?: boolean;
  defaultValue?: string;
  textStyle?: StyleProp<TextStyle>;
  inputStyle?: StyleProp<TextStyle>;
}

export function Input(props: Props) {
  const {label, onChange, isPassword, textStyle, inputStyle, defaultValue} = props;
  return (
    <View>
      <Text
        style={[
          {color: 'white', paddingBottom: 7, fontSize: 16, letterSpacing: 0},
          textStyle,
        ]}>
        {label}
      </Text>
      <TextInput
        secureTextEntry={isPassword}
        style={[
          {
            width: 300,
            height: 35,
            borderRadius: 5,
            paddingHorizontal: 5,
          },
          inputStyle,
        ]}
        defaultValue={defaultValue}
        onChangeText={onChange}
      />
    </View>
  );
}
