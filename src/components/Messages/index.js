import React from "react"

import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native"

import moment from "moment"
import "moment/locale/pt-br"

const condition = {
    current_user: {
        container: {
            justifyContent: "flex-end"
        },
        content: {
            backgroundColor: "#0755DB",
            maxWidth: "80%"
        },
        messageText: {
            color: "#fff",
        },
        clockText: {
            color: "#fff",
        }
    },
    other_user: {
        container: {
            justifyContent: "flex-start"
        },
        content: {
            backgroundColor: "#fff",
            maxWidth: "70%"
        },
        messageText: {
            color: "#646F9A",
        },
        clockText: {
            color: "#1D3158",
        }
    }
}

export function Messages({ item, imageAction }) {

    const format_hour = moment(item.createdAt).format("HH:mm")

    return (
        <View style={[styles.container, item.user._id === 1 ? condition.current_user.container : condition.other_user.container]}>

            {item.user._id !== 1 &&
                < Image
                    source={{ uri: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg" }}
                    style={styles.avatar}
                />
            }

            {!item.image &&
                <View style={[styles.content, item.user._id === 1 ? condition.current_user.content : condition.other_user.content]}>
                    <Text style={[styles.messageText, item.user._id === 1 ? condition.current_user.messageText : condition.other_user.messageText]}>{item.text}</Text>
                    <Text style={[styles.clockText, item.user._id === 1 ? condition.current_user.messageText : condition.other_user.messageText]}>{format_hour}</Text>
                </View>
            }


            {item.image &&
                <View style={[styles.content, item.user._id === 1 ? condition.current_user.content : condition.other_user.content]}>
                    <TouchableOpacity activeOpacity={.8} onPress={imageAction}>
                        <Image
                            source={{ uri: "https://cdn.pixabay.com/photo/2021/08/31/18/51/forest-6589852_960_720.jpg" }}
                            style={[styles.image]}
                        />
                    </TouchableOpacity>
                    <Text style={[styles.clockText, item.user._id === 1 ? condition.current_user.messageText : condition.other_user.messageText]}>{format_hour}</Text>
                </View>

            }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        width: "100%",
        flexDirection: "row",
        marginBottom: 20,
        alignItems: "flex-end",
    },
    avatar: {
        width: 40,
        height: 40,
        borderRadius: 20,
        marginRight: 20
    },
    content: {
        elevation: 6,
        padding: 10,
        borderRadius: 10,
    },
    messageText: {
        fontWeight: "normal",
        fontSize: 14
    },
    clockText: {
        fontWeight: "600",
        fontSize: 12,
        textAlign: "right",
        marginTop: 5
    },
    image: {
        width: 140,
        height: 100,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: "#fff"
    }
})