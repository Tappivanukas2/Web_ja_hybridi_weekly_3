import * as SecureStore from 'expo-secure-store'
import { get } from 'react-native/Libraries/TurboModule/TurboModuleRegistry'

const key = 'profile'

export function useProfile() {

    const saveProfile = async (profile_object) => {
      // Save profile to the server
      await SecureStore.setItemAsync('profile', JSON.stringify(profile_object))
    }
      const getProfile = async () => {
        const result = await SecureStore.getItemAsync(key)
        return result ? JSON.parse(result) : {email: '', phone: ''}
      }

    return {getProfile, saveProfile}
}