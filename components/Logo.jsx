import { StyleSheet, Text, View } from 'react-native'
import { Image } from 'react-native-elements'
import img from '../assets/Untitled.png'




const Logo = () => {

    return (
        <View style={styles.main} >
            <Image
                source={img}
                style={{ width: 50, height: 50 }}
            />
            <Text style={styles.text}>AzaliaNow</Text>
        </View>
    )
}

export default Logo

const styles = StyleSheet.create({
    main: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: 'white',
        marginLeft: 20,
        marginBottom: 20,
        marginTop: 80,
    },
    text: {
        fontSize: 40,
        color: '#ff0000',
        marginLeft: 10,

    }

})