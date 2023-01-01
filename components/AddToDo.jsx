import { StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/AntDesign'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const AddToDo = () => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('AddScreen')}
      style={styles.addtodo}>
      <Icon
        style={styles.plus}
        size={60}
        name='pluscircle'
        color={'#161a1f'} />
    </TouchableOpacity>
  )
}

export default AddToDo

const styles = StyleSheet.create({
  addtodo: {
    position: 'absolute',
    bottom: 20,
    right: 20,
  },
  plus: {
  }
})