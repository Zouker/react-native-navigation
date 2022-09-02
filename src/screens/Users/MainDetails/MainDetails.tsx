import {Text, View} from 'react-native';
import React from 'react';
import {MainDetailsPropsType_} from '../../types/types';

export function MainDetails({route}: MainDetailsPropsType_) {

    return (
        <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
            <Text>Main Details Screen</Text>
            <Text>{route.params.id}</Text>
        </View>
    );
}