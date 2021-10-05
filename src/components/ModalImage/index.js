import React from "react"

import { Image, StyleSheet, TouchableOpacity, View } from "react-native"
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"

// import { styles } from "./styles"

export function ModalImage() {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <TouchableOpacity activeOpacity={.8} style={styles.button}>
                    <MaterialCommunityIcons name="close" color="#fff" size={20} />
                </TouchableOpacity>

                <TouchableOpacity activeOpacity={.8} style={styles.button}>
                    <MaterialCommunityIcons name="download" color="#fff" size={20} />
                </TouchableOpacity>
            </View>

            <Image
                source={{ uri: "https://cdn.pixabay.com/photo/2021/08/31/18/51/forest-6589852_960_720.jpg" }}
                style={styles.image}
                resizeMode="cover"
            />

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    header: {
        padding: 20,
        flexDirection: "row",
        justifyContent: "space-between"
    },
    button: {
        backgroundColor: "#0755DB",
        width: 40,
        height: 40,
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 20
    },
    image: {
        flex: 1
    }
})