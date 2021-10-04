import React from "react"

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import MaterialIcons from "react-native-vector-icons/MaterialIcons"

export function Footer({
    sendAction,
    value,
    onChangeText
}) {
    return (
        <View style={styles.container}>

            <TouchableOpacity style={styles.button}>

            </TouchableOpacity>


            <TextInput
                placeholder="Digite uma mensagem"
                style={styles.input}
                value={value}
                onChangeText={onChangeText}
            />

            {value.length > 0 &&
                <TouchableOpacity activeOpacity={.8} onPress={sendAction}>
                    <MaterialIcons name="send" size={30} color="#0755DB" />
                </TouchableOpacity>
            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between"
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0755DB"
    },
    input: {
        flex: 1,
        marginHorizontal: 20,
        fontSize: 16
    }
})