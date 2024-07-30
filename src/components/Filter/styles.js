import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  filter: {
    flexDirection: 'row',
  },
  filterButtonSelected: {
    marginBottom: 10,
    marginLeft: 10,
    backgroundColor: '#7b2cbf',
    borderRadius: 30,
    height: 24,
    width: 95,
    justifyContent: 'center'
  },
  filterButtonUnselected: {
    marginBottom: 10,
    marginLeft: 10,
    borderWidth: 0.2,
    borderColor: 'gray',
    backgroundColor: 'white',
    borderRadius: 30,
    height: 24,
    width: 95,
    justifyContent: 'center'
  },
  filterTextSelected: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'white'
  },
  filterTextUnselected: {
    alignSelf: 'center',
    fontSize: 12,
    color: 'gray'
  }
});

export { styles };