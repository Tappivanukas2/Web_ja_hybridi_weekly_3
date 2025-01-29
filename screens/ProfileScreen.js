import { View, Text, StyleSheet, ToastAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Button, TextInput } from 'react-native-paper';
import { useProfile } from '../hooks/useProfile';

export default function ProfileScreen() {
  const [profile, setProfile] = useState({email: '', phone: ''})
  const {getProfile, saveProfile} = useProfile()

    useEffect(() => {
      getProfile().then(data => {setProfile(data)
      }).catch(error => {
        console.log(error)
      })
    }, [])

    const save = () => {
      saveProfile(profile).then(() => {
        console.log('Profile saved')
        ToastAndroid.showWithGravity('Profile saved!', ToastAndroid.SHORT, ToastAndroid.CENTER)
      }).catch(error => {
        console.log(error)
      })
    }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        label={'Email'}
        keyboardType='email-address'
        right={<TextInput.Icon icon="email" />}
        value={profile.email}
        onChangeText={text => setProfile({...profile, email: text})}
        />
        <TextInput
        style={styles.input}
        label={'Phone'}
        keyboardType='phone-pad'
        right={<TextInput.Icon icon="phone" />}
        value={profile.phone}
        onChangeText={text => setProfile({...profile, phone: text})}
        />
        <Button
        mode="contained"
        onPress={save}>
        Save
        </Button>
    </View>
  )
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 16,
  },
  input: {
    width: '100%',
    marginBottom: 16,
  }
});