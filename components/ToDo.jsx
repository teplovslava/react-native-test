import { StyleSheet, Text, View, Dimensions, Animated } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SwipeListView } from 'react-native-swipe-list-view';
import Checkbox from './Checkbox';
import { TouchableHighlight } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { deleteItem } from '../store/slice/mainSlice';



const ToDo = () => {

  const dispatch = useDispatch()

  const arr = useSelector((state) => state.mainSlice.todoList)

  const [listData, setListData] = useState(
    arr.map((item) => ({
      key: item.id,
      name: item.name,
      checked: item.checked,
      id: item.id
    }))
  );

  useEffect(() => {
    setListData(arr.map((item) => ({
      key: item.id,
      name: item.name,
      checked: item.checked,
      id: item.id
    })))
  }, [arr])




  const onSwipeValueChange = (swipeData) => {

    const { key, value } = swipeData;
    if (
      value < -Dimensions.get('window').width
    ) {

      const newData = [...listData];
      const prevIndex = listData.findIndex(item => item.key === key);
      newData.splice(prevIndex, 1);
      setListData(newData);
      handleDelete(key)
    }
  };




  async function handleDelete(id) {
    try {
      await fetch(`https://62fcbb79b9e38585cd44c58f.mockapi.io/table/${id}`, {
        method: 'DELETE',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        }
      }).then(res => {
        if (res.ok) { console.log("HTTP request successful") }
        else { console.log("HTTP request unsuccessful") }
        return res

      })
        .catch(error => alert(error))

    }
    catch (error) {
      alert(error)
    }
    finally {
      dispatch(deleteItem(id))
    }
  }


  const renderItem = data => (

    <Animated.View >
      <TouchableHighlight >
        <View style={styles.item}>
          <Checkbox
            checked={data.item.checked}
            id={data.item.id} />
          <Text style={styles.text}>
            {data.item.name}
          </Text>
        </View>
      </TouchableHighlight>
    </Animated.View>
  );


  const renderHiddenItem = () => (
    <View >
    </View>
  );


  return (
    <View style={styles.main}>
      <SwipeListView style={styles.list}
        disableRightSwipe
        data={listData}
        renderItem={renderItem}
        renderHiddenItem={renderHiddenItem}
        leftOpenValue={50}
        rightOpenValue={-Dimensions.get('window').width}
        previewRowKey={'0'}
        previewOpenValue={-40}
        previewOpenDelay={3000}
        onSwipeValueChange={onSwipeValueChange}
        useNativeDriver={false}
      />
    </View>
  )
}

export default ToDo


const styles = StyleSheet.create({
  main: {
    flex: 1,
    width: '100%',


  },
  list: {
    flex: 1,
    width: '100%',
    paddingTop: 40,

  },
  item: {
    padding: 8,
    marginBottom: 10,
    shadowColor: 'black',
    borderRadius: 10,
    backgroundColor: 'white',
    marginLeft: 20,
    marginRight: 20,
    borderWidth: 1,
    borderColor: "thistle",
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    fontSize: 18,
  }
})