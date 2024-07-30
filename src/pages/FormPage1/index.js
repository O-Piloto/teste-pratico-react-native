import React, { useState } from 'react';
import { TouchableOpacity, View, Text, TextInput, ScrollView } from 'react-native';
import {styles} from "./styles";
import AppBackButton from '../../components/AppBackButton/index';
import AppInput from '../../components/AppInput/index';
import {Picker} from '@react-native-picker/picker';

export default function FormPage1 ({ navigation }) {

  const [value, setValue] = useState('');
  const [selectedState, setSelectedState] = useState('sp');

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <AppBackButton/>
      </View>
      <Text style={styles.headerText}>Para começar, vamos precisar de alguns dados</Text>
      <ScrollView automaticallyAdjustKeyboardInsets={true} style={styles.body}>
        <AppInput name='Nome do Imóvel' />
        <Text style={styles.smallPrint}>
          O nome do imóvel será exibido na sua tela inicial e na reserva para o hóspede
        </Text>
        <TextInput
          style={styles.detailsInput}
          placeholder='Descrição'
          placeholderTextColor='gray'
          onChangeText={setValue}
          maxLength={250}
        />
        <Text style={styles.counter}>
          {value.length}/250
        </Text>
        <AppInput name='CEP' type='numeric' />
        <AppInput name='Endereço' />
        <View style={styles.innerBody}>
          <TextInput
            style={styles.doubledInput}
            placeholder='Número'
            placeholderTextColor='gray'
            onChangeText=''
          />
          <TextInput
            style={styles.doubledInput}
            placeholder='Complemento'
            placeholderTextColor='gray'
            onChangeText=''
          />
        </View>
        <View style={styles.innerBody}>
          <TextInput
            style={styles.shortInput}
            placeholder='Cidade'
            placeholderTextColor='gray'
            onChangeText=''
          />
          <View style={styles.pickerContainer}>
            <Picker
              style={styles.defautPicker}
              selectedValue={selectedState}
              onValueChange={(itemValue, itemIndex) =>
                setSelectedState(itemValue)
              }>
              <Picker.Item label="RJ" value="rj" />
              <Picker.Item label="SP" value="sp" />
            </Picker>
          </View>
        </View>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Continuar</Text>
        </TouchableOpacity>
        <View style={{ height: 30 }} />
      </ScrollView>
    </View>
  );
};
