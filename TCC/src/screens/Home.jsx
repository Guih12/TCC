import React from 'react';
import { View, SafeAreaView, Text, Image, TouchableOpacity, ScrollView} from 'react-native';
import { AntDesign } from '@expo/vector-icons'; 
import styles from './styles';


import ListMembers from '../components/ListMembers/ListMembers';

const Home = () => {
  return (
      <SafeAreaView style={styles.safeArea}>
            <View style={styles.header}>
                <TouchableOpacity style={styles.buttonOPtions}>
                    <AntDesign name="arrowleft" size={24} color="black" />
                </TouchableOpacity>

                <Image
                style={styles.logo}
                source={require('../icons/Rino.png')}
                />

                <TouchableOpacity style={styles.buttonOPtions}>
                    <AntDesign name="shoppingcart" size={24} color="black" />
                </TouchableOpacity>

            </View>

            <View style={styles.card}>
                    <View style={styles.viewTitle}>
                        <Text style={styles.title}>Membros</Text>
                        <View style={styles.separetor}></View>
                    </View>

                    <ScrollView style={{marginTop: 10, flex: 1}}>
                            <ListMembers name="Kleber Souza"  age="20" avatar={require('../images/Kleber.jpg')}/>
                            <ListMembers name="George Borsato"  age="20" avatar={require('../images/George.jpg')}/>
                            <ListMembers name="João Carlos Germano"  age="18" avatar={require('../images/Joao.jpg')}/>
                            <ListMembers name="Luciano Paulo"  age="20" avatar={require('../images/Luciano.jpg')}/>
                    </ScrollView>
            </View>
      </SafeAreaView>
  )
}

export default Home;