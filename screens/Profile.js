import React from 'react';
import { StyleSheet, Text, View, Image, Linking, Platform } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'
import { Title, Card, Button } from 'react-native-paper'
import { MaterialIcons, Entypo } from '@expo/vector-icons'

const Profile = (props) => {
    const { id, name, picture, phone, salary, email, position } = props.route.params.item

    const openDial = () => {
        if(Platform.OS === 'android') {
            Linking.openURL('tel: 12345')
        } else {
            Linking.openURL('telpronpt: 12345')
        }
    }

    return ( 
        <View style={styles.root}>
            <LinearGradient
                colors={['#0033ff', '#6bc1ff']}
                style={{height: '20%'}}
            />
            <View style={{alignItems: 'center'}}>
                <Image
                    style={{width: 140, height: 140, borderRadius: 140/2, marginTop: -50}}
                    source={{uri: picture}}
                />
            </View>
            <View style={{alignItems: 'center', margin: 15}}>
                <Title>{name}</Title>
                <Text style={{fontSize: 18}}>{position}</Text>
            </View>
            <Card style={styles.mycard} onPress={() => {
                Linking.openURL('mailto: abc@abc.com')
            }}>
                <View style={styles.cardContent}>
                    <MaterialIcons name='email' size={32} color='#006aff' />
                    <Text style={styles.myText}>{email}</Text>
                </View>
            </Card>
            <Card style={styles.mycard} onPress={() => openDial()}>
                <View style={styles.cardContent}>
                    <Entypo name='phone' size={32} color='#006aff' />
                    <Text style={styles.myText}>{phone}</Text>
                </View>
            </Card>
            <Card style={styles.mycard}>
                <View style={styles.cardContent}>
                    <MaterialIcons name='attach-money' size={32} color='#006aff' />
                    <Text style={styles.myText}>{salary}</Text>
                </View>
            </Card>
            <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
                <Button
                    icon="account-edit" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => console.log("saved")}
                    >
                        Edit
                </Button>
                <Button
                    icon="delete" 
                    mode="contained" 
                    theme={theme}
                    onPress={() => console.log("saved")}
                    >
                        Fire employee
                </Button>
            </View>
        </View>
     );
}

const theme = {
    colors: {
        primary: '#006aff'
    }
}

const styles = StyleSheet.create({
    root: {
        flex: 1
    },
    mycard: {
        margin: 3
    },
    cardContent: {
        flexDirection: 'row',
        padding: 8,
    },
    myText: {
        fontSize: 18,
        marginTop: 3,
        marginLeft: 5
    }
});
 
export default Profile;