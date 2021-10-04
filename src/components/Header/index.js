import React from "react"

import { StyleSheet, Text, View } from "react-native"

export function Header() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Ralisson Mattias</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 20,
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontWeight: "bold",
        fontSize: 18
    }
})