import {StyleSheet} from 'react-native';
import { Colors } from '../../utils';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.WHITE_SECONDARY,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  header: {
    marginBottom: 20,
    color: Colors.BLACK,
    fontWeight: '700',
  },
  form: {
    height: '40%',
    alignItems: "center",
    justifyContent: 'space-between',
  },
  inputText: {
    color: Colors.BLACK,
    fontWeight: '600',
  },
  inputStyle: {
    backgroundColor: Colors.GRAY_SECONDARY,
  },
  logOutView: {
    alignItems: 'center',
  },
  logOutButton: {
    backgroundColor: Colors.WHITE_SECONDARY,
    width: 162,
    height: 44,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: Colors.GRAY_SECONDARY,
    borderRadius: 25,
    marginBottom: 41,
  },
  logOutText: {
    fontWeight: '700',
  },
  footer: {
    height: 47,
    width: 390,
    backgroundColor: Colors.WHITE,
    alignItems: 'center',
    shadowOffset: {width: 5, height: 5},
    shadowColor: Colors.BLACK,
    shadowOpacity: 0.4,
    shadowRadius: 15,
  },
  doneButton: {
    top: -20,
    position: 'absolute',
    backgroundColor: Colors.AQUA_GREEN,
    width: 129,
    height: 43,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: Colors.GRAY_SECONDARY,
    borderRadius: 100,
  },
  doneText: {
    color: Colors.WHITE,
    fontWeight: '700',
  },
  success: {
    backgroundColor: Colors.AQUA_GREEN,
    width: 250,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
    borderRadius: 5,
  },
  error: {
    backgroundColor: Colors.RED,
    width: 250,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 17,
    borderRadius: 5,
  }
});
