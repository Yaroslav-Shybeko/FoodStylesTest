import React from 'react';
import {Image, ImageStyle, StyleProp} from 'react-native';

interface Props {
  type: 'Apple' | 'Facebook' | 'Google' | 'Back';
  style?: StyleProp<ImageStyle>;
}

export function Icon(props: Props) {
  const {type, style} = props;

  switch (type) {
    case 'Apple':
      return (
        <Image
          source={require('../../../assets/images/apple.png')}
          style={style}
        />
      );
    case 'Google':
      return (
        <Image
          source={require('../../../assets/images/google.png')}
          style={style}
        />
      );
    case 'Facebook':
      return (
        <Image
          source={require('../../../assets/images/facebook.png')}
          style={style}
        />
      );
    case 'Back':
      return (
        <Image
          source={require('../../../assets/images/back.png')}
          style={style}
        />
      );
    default:
      return null;
  }
}
