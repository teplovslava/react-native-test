import { TouchableOpacity } from 'react-native'
import { CheckBox } from 'react-native-elements'
import React from 'react'
import { useDispatch } from 'react-redux'
import { setCheck } from '../store/slice/mainSlice'



const Checkbox = ({ checked, id }) => {

    const dispatch = useDispatch()

    async function handleChecked(checked, id) {
        dispatch(setCheck(id))
        try {
            await fetch(`https://62fcbb79b9e38585cd44c58f.mockapi.io/table/${id}`, {
                method: 'PUT',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    checked: !checked,
                }),
            }).then(res => {
                if (res.ok) { console.log("HTTP request successful") }
                else { console.log("HTTP request unsuccessful") }
                return res
            })
                .catch(error => console.log(error))
        }
        catch (error) {
            console.log(error)
        }
    }

    return (
        <TouchableOpacity >
            <CheckBox
                checkedColor='red'
                checked={checked}
                onPress={() => handleChecked(checked, id)}
            />
        </TouchableOpacity>
    )
}

export default Checkbox

