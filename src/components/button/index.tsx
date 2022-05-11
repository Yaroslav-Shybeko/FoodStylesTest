import React from 'react';
import {FlexStyle, Pressable, StyleProp, Text, TextStyle, View} from 'react-native';
import { Icon } from '../icon';
import {styles} from './styles';

interface Props {
  text: string;
  icon?: 'Apple' | 'Facebook' | 'Google';
  rounded?: boolean;
  buttonStyle?: StyleProp<FlexStyle>;
  textStyle?: StyleProp<TextStyle>;
  onClick?: () => void;
}

export function Button(props: Props) {
  const {text, icon, rounded, textStyle, buttonStyle,onClick} = props;

  const wrapperStyle = rounded ? [styles.wrapper, styles.rounded] : styles.wrapper;

  return (
    <Pressable onPress={onClick} style={[wrapperStyle, buttonStyle]}>
      <View style={styles.content}>
        {icon && <Icon type={icon} style={styles.icon} />}
        <Text style={[styles.text, textStyle]}>{text}</Text>
      </View>
    </Pressable>
  );
}
