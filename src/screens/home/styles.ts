import {StyleSheet} from 'react-native';
import {Dimensions} from 'react-native';
import {Colors} from '../../utils';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

export const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  label: {
    top: 65,
    left: -75,
    height: 40,
    width: '80%',
    backgroundColor: Colors.RED,
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
    transform: [{rotate: '-30deg'}],
  },
  labelText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: Colors.WHITE,
  },
  logo: {
    transform: [{scaleX: 0.5}, {scaleY: 0.5}],
  },
  signInText: {
    color: Colors.WHITE,
    fontSize: 18,
    textAlign: 'center',
    width: 299,
    marginTop: -50,
    marginBottom: 30,
  },
  button: {
    marginBottom: 15,
  },
  buttons: {
    alignItems: "center"
  },
  logInText: {
    color: Colors.WHITE,
    marginTop: 5,
    fontSize: 16,
  },
  terms: {
    alignItems: "center",
  },
  firstPart: {
    width: 300,
    opacity: 0.8,
    fontSize: 13,
    marginTop: 20,
    textAlign: 'center',
    color: Colors.WHITE,
  },
  secondPart: {
    flexDirection: "row"
  },
  separator: {
    color: Colors.WHITE,
    marginHorizontal: 5
  },
  link: {
    textDecorationLine: 'underline',
    color: Colors.WHITE,
  },
});
