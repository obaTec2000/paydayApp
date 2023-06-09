import { Text, View, StyleSheet, Dimensions, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView } from 'react-native'
import React from 'react'
import BottomBar from './BottomBar';
import { CircleBtn } from '../../components/ProfileButton';
import { useState } from 'react';
import TopBar from './TopBar';
import Home from '../Body/Home';
import Wallet from '../Body/Wallet';

import { AntDesign } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Foundation } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

const { width, height } = Dimensions.get('window')



export default function MainScreen({ navigation }) {

    const [BottomTab, setBottomTab] = useState("home")

    const handleHome = () => {
        setBottomTab('home')
    }

    const handleWallet = () => {
        setBottomTab('wallet') 
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#263238' }}>

            <View>
                {
                    BottomTab === "home" ?
                        <TopBar />
                        :
                       null
                }
            </View>


            <ScrollView>
                <View style={styles.container}>

                    {
                        BottomTab === "home" ?
                            <Home />
                            :
                            BottomTab === "wallet" ?
                                <Wallet />
                                :
                                <Home />
                    }

                </View>
            </ScrollView>


            <View>
                <BottomBar homePress={handleHome} walletPress={handleWallet} />
            </View>


        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center'
    },
    TopContainer: {
        borderTopColor: '#393E46',
        borderBottomWidth: 1,
        width: width,
        alignItems: 'center',
        paddingVertical: 15,
        marginTop: 40
    },
    TopControl: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '80%',
    },
})

