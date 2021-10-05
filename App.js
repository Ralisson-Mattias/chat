import React, { useEffect, useRef, useState } from 'react';
import {
  FlatList,
  SafeAreaView, StyleSheet, Text
} from 'react-native';
import { Footer } from './src/components/Footer';
import { Header } from './src/components/Header';
import { Messages } from './src/components/Messages';

import moment from 'moment';
import "moment-timezone"
import "moment/locale/pt-br"

import uuid from 'react-native-uuid'
import { ModalImage } from './src/components/ModalImage';


const App = () => {

  const listRef = useRef(null)

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
        name: "Ralisson Mattias",
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
      image: "https://cdn.pixabay.com/photo/2021/08/31/18/51/forest-6589852_960_720.jpg"
    },
  ])


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

  function handleClickImage(item) {

  }

  return (
    <SafeAreaView style={styles.container}>
      <Header />


      <FlatList
        ref={listRef}
        keyExtractor={(item) => String(item._id)}
        data={messages}
        renderItem={({ item }) => <Messages item={item} imageAction={() => handleClickImage(item)} />}
        contentContainerStyle={styles.contentContainerStyle}
        style={styles.list}
        initialScrollIndex={messages.length - 1}
      />

      <Footer
        sendAction={() => handleSend()}
        value={message}
        onChangeText={text => setMessage(text)}
      />

      {/* <ModalImage /> */}
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
    paddingHorizontal: 20,
    flexGrow: 1
  },
  list: {
    flex: 1,
  }

})


export default App;
