import {Button, Text, View} from 'react-native';
import React from 'react';
import {useAppNavigation} from '../types/types';

export function HomeScreen() {
    const navigation = useAppNavigation()
    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Home Screen</Text>
            <Button title={'Jump to Users Screen'} onPress={() => {
                // navigation.navigate('Users', {id: 1000, name: 'Denis', isDone: false})
                navigation.navigate('Users')
            }}/>
        </View>
    );
}