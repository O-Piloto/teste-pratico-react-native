import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    padding: '7.5%',
    paddingTop: '10%',
  },
  headerText: {
    fontSize: 18,
    marginHorizontal: '7.5%',
    marginBottom: 15,
  },
  smallPrint: {
    paddingHorizontal: '7.5%',
    fontSize: 12,
    color: 'gray',
  },
  detailsInput: {
    width: '85%',
    height: 70,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 5,
    paddingLeft: 10,
    marginVertical: 7,
    marginHorizontal: '7.5%',
  },
  counter: {
    color: 'gray',
    textAlign: 'right',
    marginHorizontal: '10%',
    marginTop: -7,
    fontSize: 12,
    marginBottom: 7
  },
  innerBody: {
    flexDirection: 'row',
    marginHorizontal: '4.5%',
  },
  doubledInput: {
    width: '43.7%',
    height: 50,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 7,
    marginHorizontal: '3%'
  },
  shortInput: {
    width: '60%',
    height: 50,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 5,
    padding: 10,
    marginVertical: 7,
    marginHorizontal: '3%'
  },
  pickerContainer: {
    width: '27.5%',
    height: 50,
    borderWidth: 0.2,
    borderColor: 'gray',
    borderRadius: 5,
    marginVertical: 7,
    marginHorizontal: '3%',
    justifyContent: 'center'
  },
  defautPicker: {
    color: 'gray',
    width: '100%',
    height: 50,
  },
  button: {
    width: '85%',
    height: 50,
    backgroundColor: '#7b2cbf',
    borderRadius: 10,
    padding: 10,
    marginTop: 40,
    marginHorizontal: '7.5%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  }
});

export { styles };