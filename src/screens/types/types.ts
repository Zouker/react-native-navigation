import {
    CompositeScreenProps,
    NavigationProp,
    NavigatorScreenParams,
    useNavigation
} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import type {BottomTabScreenProps} from '@react-navigation/bottom-tabs';
import type {StackScreenProps} from '@react-navigation/stack';

export type RootStackParamList = {
    Home: undefined
    Details: undefined
    Users?: NavigatorScreenParams<NestedStack>
}

export type NestedStack = {
    Main: undefined
    MainDetails: {
        id: number
    }
}

export type MainDetailsPropsType = NativeStackScreenProps<NestedStack, 'MainDetails'>

export type MainDetailsPropsType_ = CompositeScreenProps<BottomTabScreenProps<NestedStack, 'MainDetails'>,
    StackScreenProps<RootStackParamList>>

export type UsersPropsType = NativeStackScreenProps<RootStackParamList, 'Users'>


type UseNavigationType = NavigationProp<RootStackParamList>

export const useAppNavigation = () => useNavigation<UseNavigationType>()

//https://javascript.plainenglish.io/react-navigation-v6-with-typescript-nested-navigation-part-2-87844f643e37
