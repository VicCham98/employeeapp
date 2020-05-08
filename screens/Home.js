import React from 'react';
import { Text, StyleSheet, View, Image, FlatList } from 'react-native'
import { Card, FAB  } from 'react-native-paper'

const Home = ({ navigation }) => {
    const data = [
        { id: 1, name: 'mukesh', email: 'abc@abc.com', salary: '5 lpa', phone: '123', position: 'web dev', picture: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80'},
        { id: 2, name: 'ramesh', email: 'ramesh@abc.com', salary: '6 lpa', phone: '456', position: 'App dev', picture: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80'},
        { id: 3, name: 'suresh', email: 'suresh@abc.com', salary: '7 lpa', phone: '789', position: 'ml expert', picture: 'https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80'}
    ]

    const renderList = ((item) => {
        return (
            <Card key={item.id} style={styles.mycard}
                onPress={() => navigation.navigate("Profile", {item:item})}
            >
                <View style={styles.cardView}>
                    <Image
                        style={{width: 60, height: 60, borderRadius: 30}}
                        source={{uri: "https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=611&q=80"}}
                    />
                    <View style={{marginLeft: 10}}>
                        <Text style={styles.text}>{item.name}</Text>
                        <Text style={styles.text}>{item.position}</Text>
                    </View>
                </View>
            </Card>
        )
    })

    return ( 
        <View style={{flex: 1}}>
            <FlatList
                keyExtractor={item => item.id}
                data={data}
                renderItem={({item}) => {
                    return renderList(item)
                }}
            />
            <FAB
                onPress={() => navigation.navigate("Create")}
                style={styles.fab}
                small={false}
                icon="plus"
                theme={{colors: {accent: '#006aff'}}}
            />
        </View>
     );
}

const styles = StyleSheet.create({
    mycard: {
        margin: 5,
    },
    cardView: {
        flexDirection: 'row',
        padding: 6
    },
    text: {
        fontSize: 18
    },
    fab: {
        position: 'absolute',
        margin: 16,
        right: 0,
        bottom: 0,
      },
})
 
export default Home;