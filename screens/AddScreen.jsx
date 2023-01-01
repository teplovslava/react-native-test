import { KeyboardAvoidingView, StyleSheet, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { Button } from 'react-native-elements';
import axios from 'axios';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import { pushArr } from '../store/slice/mainSlice';


const AddScreen = () => {
    const [search, setSearch] = useState("");

    const navigation = useNavigation()

    const array = useSelector((state) => state.mainSlice.todoList)


    const dispatch = useDispatch()

    async function handleAdd(search) {
        if (search.trim().length) {
            let index = 0;
            for (i = 0; i < array.length; i++) {
                if (Number(array[i].id) > index) index = Number(array[i].id)
            }
            try {

                await axios.post('https://62fcbb79b9e38585cd44c58f.mockapi.io/table',
                    {
                        name: search,
                        checked: false,
                    })
            } catch (error) {
                alert(error);
            }
            finally {
                setSearch('')
                navigation.goBack()
                dispatch(pushArr(
                    {
                        name: search,
                        checked: false,
                        id: index + 1,
                    }
                ))
            }
        }
    }



    return (
        <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
            style={styles.container}
        >
            <View style={styles.main}>
                <TextInput
                    style={styles.input}
                    placeholder='Текст новой задачи'
                    value={search}
                    onChangeText={text => setSearch(text)} />
                <Button
                    onPress={() => handleAdd(search)}
                    title="Добавить"
                    buttonStyle={{ backgroundColor: 'rgba(39, 39, 39, 1)', borderRadius: 10, }}
                    containerStyle={{
                        width: '90%',
                        marginHorizontal: 50,
                        marginVertical: 10,
                    }}
                    titleStyle={{ color: 'white', marginHorizontal: 20 }}
                />
            </View>
        </KeyboardAvoidingView>
    )
}

export default AddScreen

const styles = StyleSheet.create({
    input: {
        width: '90%',
        borderColor: 'gray',
        borderStyle: 'solid',
        borderWidth: 2,
        borderRadius: 10,
        padding: 10,
    },
    main: {
        flex: 1,
        justifyContent: 'center',
        alignItems: "center"
    },
    container: {
        flex: 1,
    }
})