import { View, Text, TouchableOpacity } from 'react-native';
import { styles } from './styles';

function Filter() {
  return (
    <View style={styles.filter}>
      <TouchableOpacity onPress={() => {}} style={styles.filterButtonSelected}>
        <Text style={styles.filterTextSelected}>Todos os flats</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => {}} style={styles.filterButtonUnselected}>
        <Text style={styles.filterTextUnselected}>Indisponíveis</Text>
      </TouchableOpacity>
    </View>
  );
}

export default Filter;