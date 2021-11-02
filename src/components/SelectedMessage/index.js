import React from 'react';

import {Image, StyleSheet, Text, View} from 'react-native';
import {
  BorderlessButton,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export function SelectedMessage({selectedMessageStyle, closeAction, infos}) {
  return (
    <Animated.View style={[styles.container, selectedMessageStyle]}>
      <Image
        source={{
          uri: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg',
        }}
        style={styles.image}
      />

      <View style={styles.textsArea}>
        <Text style={styles.name}>
          {infos?.user?._id === 1 ? 'Você' : infos?.user?.name}
        </Text>

        {infos?.image ? (
          <View style={styles.row}>
            <MaterialIcons name="photo" size={20} />
            <Text style={[styles.message, {marginLeft: 5}]} numberOfLines={1}>
              Foto
            </Text>
          </View>
        ) : (
          <Text style={styles.message}>{infos?.text}</Text>
        )}
      </View>

      {infos?.image && (
        <Image source={{uri: infos?.image}} style={styles.previewImage} />
      )}

      <GestureHandlerRootView>
        <BorderlessButton onPress={closeAction}>
          <MaterialCommunityIcons name="close" size={24} />
        </BorderlessButton>
      </GestureHandlerRootView>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    left: 0,
    backgroundColor: '#fff',
    right: 0,
    padding: 10,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomWidth: 1,
    borderBottomColor: '#f4f4f4',
  },
  image: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  textsArea: {
    flex: 1,
    marginLeft: 20,
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    color: '#0755DB',
  },
  message: {
    fontWeight: '400',
    fontSize: 14,
    color: '#646F9A',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  previewImage: {
    width: 40,
    height: 40,
    marginHorizontal: 20,
  },
});
