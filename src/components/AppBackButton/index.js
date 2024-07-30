import { View, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { styles } from './styles';
import { FontAwesome5 } from '@expo/vector-icons';

function AppBackButton() {
  const navigation = useNavigation();

  function handleBack() {
    navigation.goBack()
  }

  return (
    <TouchableOpacity onPress={handleBack} style={styles.backButton}>
      <View style={styles.backArrow}>
        <FontAwesome5 name="arrow-left" size={24} color="#7b2cbf" />
      </View>
    </TouchableOpacity>
  );
}

export default AppBackButton;