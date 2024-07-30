import { View, TextInput } from 'react-native';
import { styles } from './styles';

function AppInput(props) {

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.defautInput}
        placeholder={props.name}
        placeholderTextColor='gray'
        onChangeText={props.func}
        keyboardType={props.type}
      />
    </View>
  );
}

export default AppInput;