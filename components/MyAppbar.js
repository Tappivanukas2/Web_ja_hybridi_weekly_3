import React from 'react'
import { Appbar } from 'react-native-paper'

export default function MyAppbar({navigation, back, route}) {
    const title = route.name ? route.name : 'Profile'
    return (
        <Appbar.Header>
            {back && <Appbar.BackAction onPress={() => {  navigation.goBack()}} />}
            <Appbar.Content title={title} />
            {!back && <Appbar.Action icon="account" onPress={() => {navigation.navigate('Profile') }} />}
        </Appbar.Header>
    )
}