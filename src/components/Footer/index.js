import React, { useState } from "react"

import { StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native"

import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons"
import MaterialIcons from "react-native-vector-icons/MaterialIcons"
import FontAwesome5 from "react-native-vector-icons/FontAwesome5"
import Feather from "react-native-vector-icons/Feather"
import Animated, { useAnimatedStyle, useSharedValue, withDecay, withSpring, withTiming } from "react-native-reanimated"

export function Footer({
    sendAction,
    value,
    onChangeText
}) {

    const [isOpen, setIsOpen] = useState(false)

    const cardValue = useSharedValue(150)
    const iconValue = useSharedValue("0deg")

    const cardStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                translateY: cardValue.value
            }]
        }
    })

    const iconStyle = useAnimatedStyle(() => {
        return {
            transform: [{
                rotate: iconValue.value
            }]
        }
    })

    function toogleCard() {
        setIsOpen(!isOpen)

        cardValue.value = withSpring(isOpen ? 150 : 0, {
            damping: 6
        })

        iconValue.value = withTiming(isOpen ? "360deg" : "0deg", { duration: 1000 })
    }

    return (
        <>
            <Animated.View style={[styles.card, cardStyle]}>

                <View style={styles.cardContent}>
                    <TouchableOpacity activeOpacity={.8} style={styles.buttonCard}>
                        <MaterialIcons name="photo-library" color="#fff" size={24} />
                    </TouchableOpacity>

                    <Text style={styles.cardText}>Galeria</Text>
                </View>

                <View style={styles.cardContent}>
                    <TouchableOpacity activeOpacity={.8} style={styles.buttonCard}>
                        <MaterialIcons name="photo-camera" color="#fff" size={24} />
                    </TouchableOpacity>

                    <Text style={styles.cardText}>Câmera</Text>
                </View>

                <View style={styles.cardContent}>
                    <TouchableOpacity activeOpacity={.8} style={styles.buttonCard}>
                        <MaterialCommunityIcons name="file-document" color="#fff" size={24} />
                    </TouchableOpacity>

                    <Text style={styles.cardText}>Arquivo</Text>
                </View>

            </Animated.View>
            <View style={styles.container}>
                <Animated.View style={[iconStyle]}>
                    <TouchableOpacity style={styles.button} onPress={() => toogleCard()} activeOpacity={.8}>
                        <MaterialCommunityIcons name={isOpen ? "close" : "paperclip"} color="#fff" size={20} />
                    </TouchableOpacity>
                </Animated.View>

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
        </>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        padding: 15,
        backgroundColor: "#fff",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        maxHeight: 70,
    },
    button: {
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: "#0755DB",
        justifyContent: "center",
        alignItems: "center",
    },
    input: {
        flex: 1,
        marginHorizontal: 20,
        fontSize: 16
    },
    card: {
        position: "absolute",
        bottom: 80,
        marginHorizontal: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
        width: "90%",
        backgroundColor: "#fff",
        padding: 20,
        borderRadius: 10
    },
    cardContent: {
        alignItems: "center"
    },
    buttonCard: {
        backgroundColor: "#0755DB",
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: "center",
        alignItems: "center"
    },
    cardText: {
        marginTop: 10,
        fontWeight: "bold",
        fontSize: 16
    }
})