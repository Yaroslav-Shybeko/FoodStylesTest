import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  rounded: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  wrapper: {
    width: 236,
    height: 43,
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginRight: 3,
    transform: [{scaleX: 0.6}, {scaleY: 0.6}],
  },
  text: {
    fontSize: 16,
    // fontFamily: "ProximaNovaAlt"
  },
});
