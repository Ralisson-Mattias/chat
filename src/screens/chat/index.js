import React, { useEffect, useRef, useState } from 'react';
import {
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    PanResponder,
    Dimensions
} from 'react-native';
import { Footer } from '../../components/Footer';
import { Header } from '../../components/Header';
import { Messages } from '../../components/Messages';

import moment from 'moment';
import "moment-timezone"
import "moment/locale/pt-br"

import uuid from 'react-native-uuid'
import { ModalImage } from '../../components/ModalImage';
import Animated, { useAnimatedStyle, useSharedValue, withSpring, withTiming } from 'react-native-reanimated';
import { SelectedMessage } from '../../components/SelectedMessage';
import { useNavigation } from '@react-navigation/native';

const { height } = Dimensions.get("window")


const Chat = () => {

    const navigation = useNavigation()

    const listRef = useRef(null)
    const inputRef = useRef(null)

    const modalImageValue = useSharedValue(999)
    const selectMessageValue = useSharedValue(0)

    const [selectedModalImage, setSelectedModalImage] = useState(null)
    const [selectedMessageInfos, setSelectedMessageInfos] = useState(null)

    const [message, setMessage] = useState("")

    const [messages, setMessages] = useState([
        {
            _id: 1,
            text: "Mensagem de teste",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 2,
            text: "Mensagem de teste 2",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 2,
                name: "Felipe José",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 3,
            text: "Mensagem de teste 3",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 4,
            text: "Mensagem de teste 3",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 5,
            text: "Mensagem de teste 3",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 6,
            text: "Mensagem de teste 3",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 7,
            text: "Mensagem de teste 3",
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        },
        {
            _id: 8,
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 2,
                name: "Felipe José",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            },
            image: "https://cdn.pixabay.com/photo/2021/08/31/18/51/forest-6589852_960_720.jpg"
        },
        {
            _id: 9,
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            },
            image: "https://cdn.pixabay.com/photo/2021/08/06/05/04/mountain-6525356_960_720.jpg"
        },
    ])

    const modalImageStyle = useAnimatedStyle(() => {
        return {
            top: modalImageValue.value
        }
    })

    const selectedMessageStyle = useAnimatedStyle(() => {
        return {
            bottom: selectMessageValue.value
        }
    })


    function handleSend() {

        const id = uuid.v4()

        const newMessage =
        {
            _id: id,
            text: message,
            createdAt: moment().tz("America/Sao_Paulo"),
            user: {
                _id: 1,
                name: "Ralisson Mattias",
                avatar: "https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg"
            }
        }


        setMessages([...messages, newMessage])
        setMessage("")
    }

    function handleClickImage(item, e) {
        // modalImageValue.value = withTiming(0, { duration: 600 })
        navigation.navigate("ModalImage", { image: item.image })
        setSelectedModalImage(item.image)
    }

    function closeModalImage() {
        modalImageValue.value = withTiming(4000, {
            duration: 800
        })
    }

    function handleSelectedMessage(item) {
        inputRef?.current?.focus()
        setSelectedMessageInfos(item)
        selectMessageValue.value = withTiming(70, {
            duration: 500
        })
    }

    function handleCloseSelectedMessage() {
        inputRef?.current?.blur()
        selectMessageValue.value = withTiming(0, {
            duration: 100
        })
    }

    return (
        <SafeAreaView style={styles.container}>
            <Header />


            <FlatList
                ref={listRef}
                keyExtractor={(item) => String(item._id)}
                data={messages}
                renderItem={({ item }) => <Messages
                    item={item}
                    imageAction={(e) => handleClickImage(item, e)}
                    onSwipeableWillClose={() => handleSelectedMessage(item)}
                />}
                contentContainerStyle={styles.contentContainerStyle}
                style={styles.list}
                initialScrollIndex={messages.length - 1}
            />


            <SelectedMessage
                selectedMessageStyle={selectedMessageStyle}
                closeAction={() => handleCloseSelectedMessage()}
                infos={selectedMessageInfos}
            />


            <Footer
                sendAction={() => handleSend()}
                value={message}
                onChangeText={text => setMessage(text)}
                inputRef={inputRef}
            />

            <ModalImage
                modaImageStyle={modalImageStyle}
                closeAction={closeModalImage}
                image={selectedModalImage}
            />

        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#FAFAFF"
    },
    contentContainerStyle: {
        justifyContent: "flex-end",
        flexGrow: 1,
    },
    list: {
        flex: 1,
    }

})


export default Chat;
