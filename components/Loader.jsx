import { View } from 'react-native'
import React from 'react'
import { ActivityIndicator } from 'react-native'

const Loader = () => {
    return (
        <View>
            <ActivityIndicator size='large' color="red" />
        </View>
    )
}

export default Loader

