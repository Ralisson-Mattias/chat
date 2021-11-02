import {useNavigation, useRoute} from '@react-navigation/native';
import React from 'react';

import {Image, StyleSheet, TouchableOpacity, View} from 'react-native';
import Animated from 'react-native-reanimated';
import {SharedElement} from 'react-native-shared-element';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

export function ModalImage({modaImageStyle, closeAction, image}) {
  const navigation = useNavigation();
  const route = useRoute();
  const params = route?.params;

  return (
    <Animated.View style={[styles.container, modaImageStyle]}>
      <View style={styles.header}>
        <TouchableOpacity
          activeOpacity={0.8}
          style={styles.button}
          onPress={() => navigation.goBack()}>
          <MaterialCommunityIcons name="close" color="#fff" size={20} />
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={0.8} style={styles.button}>
          <MaterialCommunityIcons name="download" color="#fff" size={20} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerImage}>
        <SharedElement id={params?.image}>
          <Image
            source={{uri: params?.image}}
            style={styles.image}
            resizeMode="cover"
          />
        </SharedElement>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#fff',
  },
  header: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
  },
  button: {
    backgroundColor: '#0755DB',
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 20,
  },
  containerImage: {
    flex: 1,
    justifyContent: 'center',
  },
  image: {
    height: 300,
    width: '100%',
  },
});
