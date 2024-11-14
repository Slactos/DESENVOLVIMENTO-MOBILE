import React, {useState} from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput } from 'react-native';

export default function App() {
  const [cor_texto,setCor_texto]=useState('#ff0000');

  const trocacor = () => {
    setCor_texto('#0000ff');
  }

  return (
    <View style={estilos.container}>
    <Text style={[estilos.texto, {color: cor_texto}]}>Meu primeiro APP</Text>

      <Button title="Clique Aqui" onPress={trocacor}></Button>
    </View>
  );
}

const estilos = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
    alignItems: 'center',
    justifyContent: 'center',
  },

  texto: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },

});