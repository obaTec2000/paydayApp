import { StyleSheet, Text, View, TouchableOpacity, ScrollView } from 'react-native'
import React from 'react'
import IconBtn from '../../components/IconBtn'
import TopBar from '../MainScreen/TopBar'
import { TxtBtn } from '../../components/ProfileButton'


export default function Home({ navigation }) {
    return (

        <View style={{}}>

            <View style={{}}>
                {/* <TopBar />  */}
            </View>

            <ScrollView>
                <View style={{ borderBottomWidth: 1, alignItems: 'center', paddingTop: 10 }}>
                    <View style={{}}>
                        <Text style={{ color: 'gray' }}>N<Text style={{ fontSize: 40 }}>0</Text><Text>.00</Text></Text>
                    </View>
                </View>

                <View>
                    <IconBtn />
                </View>


                <View style={styles.body}>

                    <View style={styles.box}>
                        <View style={{marginTop: 20}}>
                        <TxtBtn
                            icon="arrow-down-circle"
                            firstText='Send money'
                            SecondText='Transfer money locally or abroad' />

                        <TxtBtn
                            icon="arrow-down-circle"
                            firstText='Request money'
                            SecondText='Get cash from a contact or via a' />
                        </View>
                    </View>

                    <View style={styles.box2}>
                        <View style={{ marginRight: 160, marginTop: 1 }}>
                            <Text style={{ fontWeight: '700', color: 'gray' }}>Get start with Payday</Text>
                        </View>

                        <View style={{marginTop: 15}}>
                            <TxtBtn
                                icon="arrow-down-circle"
                                firstText=''
                                SecondText='This lets you unlock other'
                                thridText='Link' />

                            <TxtBtn
                                icon="arrow-down-circle"
                                firstText='Create a new account'
                                SecondText='up to 10 currencies supported' />


                            <TxtBtn
                                icon="arrow-down-circle"
                                firstText='Create a virtual card'
                                SecondText='Shop across hunderds of stores' />

                        </View>

                    </View>

                </View>
            </ScrollView>

        </View>

    )
}

const styles = StyleSheet.create({
    body: {
        backgroundColor: '#F8F8FF',
        alignItems: 'center',
        height: 500,
        marginTop: 103
    },
    box: {
        backgroundColor: 'white',
        height: '36%',
        width: '90%',
        bottom: 95,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 19,
        // borderWidth: 0.7,
        borderColor: 'gray'
    },
    box2: {
        backgroundColor: 'white',
        height: '50%',
        width: '90%',
        bottom: 77,
        alignItems: 'center',
        justifyContent:'space-evenly',
        borderRadius: 19,
        // borderWidth: 0.7,
        borderColor: 'gray',

    }
})