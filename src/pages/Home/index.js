import React from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import {styles} from "./styles";
import {useNavigation} from '@react-navigation/native'
import AppBackButton from '../../components/AppBackButton/index';
import { FontAwesome5 } from '@expo/vector-icons';
import Filter from '../../components/Filter/index';

export default function HomeScreen () {

  const navigation = useNavigation();

  function goToForm(){
    navigation.navigate('FormPage1')
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppBackButton/>
        <TouchableOpacity style={styles.create} onPress={goToForm}>
          <FontAwesome5 name="plus" size={13} color="#7b2cbf" style={styles.plus} />
          <Text style={styles.createText}>Cadastrar Imóvel</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.welcomeText}>Bem-vindo, Raphael!</Text>
      </View>
      <Filter/>
      <View style={styles.body}>
        <FontAwesome5 name="frown-open" size={50} color="#7b2cbf" style={styles.bodyIcon} />
        <Text style={styles.bodyEmptyText}>
          Você não tem nenhum imóvel cadastrado. Que tal cadastrar agora?
        </Text>
        <TouchableOpacity onPress={goToForm} style={styles.createButton}>
          <Text style={styles.bodyButtonText}>Cadastrar meu primeiro imóvel</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
