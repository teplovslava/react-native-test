import { StyleSheet, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native'
import Loader from '../components/Loader'
import Logo from '../components/Logo'
import ToDo from '../components/ToDo'
import axios from 'axios'
import { StatusBar } from 'expo-status-bar'
import AddToDo from '../components/AddToDo'
import { useDispatch, useSelector } from 'react-redux'
import { addArr } from '../store/slice/mainSlice'

const Main = () => {

  const array = useSelector((state) => state.mainSlice.todoList)


  const dispatch = useDispatch()

  const [loading, setLoading] = useState(true)

  async function getToDos() {
    try {
      await axios.get('https://62fcbb79b9e38585cd44c58f.mockapi.io/table')
        .then(function (response) {
          dispatch(addArr(response.data))
        })
    }
    catch (error) {
      alert(error);
      dispatch(addArr([]))
    }
    finally {
      setLoading(false)
    }

  }

  useEffect(() => {

    getToDos()

  }, [])



  return (
    <SafeAreaView style={loading ? styles.SafeAreaView : styles.SafeAreaViewBox}>
      <StatusBar theme={'auto'} />
      {loading
        ? <View style={styles.container}>
          <Logo />
          <Loader />
        </View>
        : <View style={styles.containerBox}>
          <Logo style={styles.logo} />
          <ToDo arr={array} />
          <AddToDo />
        </View>}
    </SafeAreaView>
  )
}

export default Main

const styles = StyleSheet.create({

  container: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  },

  SafeAreaView: {
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: 'white'
  },

  SafeAreaViewBox: {
    flex: 1,
    flexDirection: "column",
    alignItems: "start",
    justifyContent: "start",
    backgroundColor: 'white',
    padddingBottom: 20,
  },

  containerBox: {
    flex: 1,
    width: "100%",
    flexDirection: 'column',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  }
})