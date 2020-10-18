import React from 'react';
import { View, TouchableOpacity, Text, Image} from 'react-native';
import * as Speech from 'expo-speech'

import styles from './styles';

const ListMembers = ({name, age, avatar}) => {

  const handlleClick = ()=>{
    switch (name){
        case 'Kleber Souza': 
            Speech.speak(`${name} comedor de casadas do grupo`, {
                language: 'pt-BR'
            })
        break;

        case 'George Borsato':
            Speech.speak(`${name} o nerd do grupo`, {
                language: 'pt-BR'
            })
        break;
        case 'João Carlos Germano':
            Speech.speak(`${name} mais conhecido como talarico do grupo`, {
                language: 'pt-BR'
            })
        break;

        case 'Luciano Paulo':
            Speech.speak(`${name} frequentador do banho dos campeões`, {
                language: 'pt-BR'
            })
        break;
    }
  }

  return (
    <View style={styles.container}>
        <TouchableOpacity 
        style={styles.listMembers}
        onPress={handlleClick}
        >
            <Image source={avatar}  style={styles.image} />
        <View style={styles.information}>
            <Text style={styles.name}> {name} </Text>
            <Text style={styles.age}> {age} anos </Text>
        </View>
        </TouchableOpacity>
    </View>
  );
}

export default ListMembers;