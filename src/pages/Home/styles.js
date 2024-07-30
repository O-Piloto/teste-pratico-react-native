import {StyleSheet} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: '7%',
    paddingTop: '10%',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  create: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  plus: {
    paddingTop: 3,
    paddingRight: 5
  },
  createText:{
    color: '#7b2cbf',
    fontSize: 14
  },
  welcomeText: {
    fontSize: 24,
    marginVertical: 20,
    fontWeight: 'bold',
  },
  body: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  bodyEmptyText: {
    fontSize: 18,
    marginVertical: 20,
    textAlign: 'center',
    color: '#757575',
  },
  createButton: {
    borderColor: '#7b2cbf',
    borderWidth: 1,
    borderRadius: 10,
    height: 30,
    width: '85%',
    justifyContent: 'center',
    alignItems: 'center',
    color: '#7b2cbf',
  },
  bodyButtonText: {
    color: '#7b2cbf',
    fontSize: 12
  }
});


export {styles}