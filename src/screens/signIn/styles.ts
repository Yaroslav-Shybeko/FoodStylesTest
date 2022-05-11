import {StyleSheet} from 'react-native';
import {Colors} from '../../utils';

export const styles = StyleSheet.create({
  gradient: {
    flex: 1
  },
  container: {
    flex: 1,
    alignItems: 'center',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 6,
  },
  backButton: {
    width: 40,
    height: 40,
    borderRadius: 50,
    backgroundColor: Colors.WHITE,
  },
  backIcon: {
    transform: [{scale: 0.5}],
  },
  signInText: {
    color: Colors.WHITE,
    fontSize: 20,
    flex: 1,
    paddingRight: 46,
    textAlign: 'center',
  },
  form: {
    marginTop: 18,
    height: '18dd%',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  signInButton: {
    backgroundColor: Colors.AQUA_GREEN,
    justifyContent: 'center',
    alignItems: 'center',
    width: 151,
    height: 43,
    borderRadius: 20,
    marginTop: 26,
  },
  buttonText: {
    fontSize: 16,
    color: Colors.WHITE,
  },
  forgotButton: {
    marginTop: 21,
  },
  forgotText: {
    color: Colors.WHITE,
    fontSize: 16,
  },
  inputStyle: {
    backgroundColor: Colors.WHITE,
  },
  errorContainer: {
    width: 250,
    height: 30,
    backgroundColor: Colors.RED,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
    borderRadius: 5,
  },
  textError: {
    color: Colors.WHITE,
    fontSize: 16,
  },
});
