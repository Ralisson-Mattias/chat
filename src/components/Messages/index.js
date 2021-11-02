import moment from 'moment';
import 'moment/locale/pt-br';
import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView, Swipeable} from 'react-native-gesture-handler';
import Animated from 'react-native-reanimated';
import {SharedElement} from 'react-navigation-shared-element';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const condition = {
  current_user: {
    container: {
      justifyContent: 'flex-end',
    },
    content: {
      backgroundColor: '#0755DB',
      maxWidth: '80%',
    },
    messageText: {
      color: '#fff',
    },
    clockText: {
      color: '#fff',
    },
    quickReplieColors: ['#0755DB'],
  },
  other_user: {
    container: {
      justifyContent: 'flex-start',
    },
    content: {
      backgroundColor: '#fff',
      maxWidth: '70%',
    },
    messageText: {
      color: '#646F9A',
    },
    clockText: {
      color: '#1D3158',
    },
    quickReplieColors: ['#646F9A'],
  },
};

export function Messages({
  item,
  imageAction,
  onSwipeableWillClose,
  quickReplieClick,
  quickReplieSelected,
  quickReplieIndicatorStyle,
}) {
  const format_hour = moment(item.createdAt).format('HH:mm');

  return (
    <GestureHandlerRootView>
      <Swipeable
        renderLeftActions={() => <View />}
        overshootLeft
        onSwipeableWillClose={onSwipeableWillClose}>
        <View
          style={[
            styles.container,
            item.user._id === 1
              ? condition.current_user.container
              : condition.other_user.container,
          ]}>
          {item.user._id !== 1 && (
            <Image
              source={{
                uri: 'https://cdn.pixabay.com/photo/2018/01/15/07/51/woman-3083377_960_720.jpg',
              }}
              style={styles.avatar}
            />
          )}

          {item.user._id === 1 && quickReplieSelected === item._id && (
            <Animated.View
              style={[quickReplieIndicatorStyle, {marginHorizontal: 10}]}>
              <MaterialIcons
                name="radio-button-checked"
                size={30}
                color="#0755DB"
              />
            </Animated.View>
          )}

          {!item.image && !item.quickReplie && (
            <View
              style={[
                styles.content,
                item.user._id === 1
                  ? condition.current_user.content
                  : condition.other_user.content,
              ]}>
              <Text
                style={[
                  styles.messageText,
                  item.user._id === 1
                    ? condition.current_user.messageText
                    : condition.other_user.messageText,
                ]}>
                {item.text}
              </Text>
              <Text
                style={[
                  styles.clockText,
                  item.user._id === 1
                    ? condition.current_user.messageText
                    : condition.other_user.messageText,
                ]}>
                {format_hour}
              </Text>
            </View>
          )}

          {item.image && (
            <View
              style={[
                styles.content,
                item.user._id === 1
                  ? condition.current_user.content
                  : condition.other_user.content,
              ]}>
              <TouchableOpacity activeOpacity={0.8} onPress={imageAction}>
                <SharedElement id={item.image}>
                  <Image source={{uri: item.image}} style={[styles.image]} />
                </SharedElement>
              </TouchableOpacity>
              <Text
                style={[
                  styles.clockText,
                  item.user._id === 1
                    ? condition.current_user.messageText
                    : condition.other_user.messageText,
                ]}>
                {format_hour}
              </Text>
            </View>
          )}

          {item.quickReplie && (
            <View style={[styles.content, styles.quickReplieContainer]}>
              <TouchableOpacity
                onPress={quickReplieClick}
                activeOpacity={0.8}
                style={[
                  styles.quickReplieContent,
                  {
                    borderLeftColor:
                      item.user._id === 1
                        ? condition.current_user.quickReplieColors[0]
                        : condition.other_user.quickReplieColors[0],
                  },
                ]}>
                <View style={{flex: 2}}>
                  <Text style={styles.title}>
                    {item.quickReplie.user._id === 1
                      ? 'Você'
                      : item.quickReplie.user.name}
                  </Text>

                  {item.quickReplie.image ? (
                    <View style={styles.row}>
                      <MaterialIcons name="photo" size={20} />
                      <Text
                        style={[styles.message, {marginLeft: 5}]}
                        numberOfLines={1}>
                        Foto
                      </Text>
                    </View>
                  ) : (
                    <Text numberOfLines={1} style={styles.messageText}>
                      {item.quickReplie.text}
                    </Text>
                  )}
                </View>

                <View style={{flex: 1}}>
                  {item?.quickReplie?.image && (
                    <Image
                      source={{uri: item?.quickReplie?.image}}
                      style={styles.previewImage}
                    />
                  )}
                </View>
              </TouchableOpacity>

              <Text style={(styles.messageText, {marginTop: 10})}>
                {item.text}
              </Text>
            </View>
          )}

          {item.user._id !== 1 && quickReplieSelected === item._id && (
            <Animated.View
              style={[quickReplieIndicatorStyle, {marginHorizontal: 10}]}>
              <MaterialIcons
                name="radio-button-checked"
                size={30}
                color="#0755DB"
              />
            </Animated.View>
          )}
        </View>
      </Swipeable>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    flexDirection: 'row',
    marginBottom: 20,
    alignItems: 'flex-end',
    paddingHorizontal: 20,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 20,
  },
  content: {
    elevation: 6,
    padding: 10,
    borderRadius: 10,
  },
  messageText: {
    fontWeight: 'normal',
    fontSize: 14,
  },
  clockText: {
    fontWeight: '600',
    fontSize: 12,
    textAlign: 'right',
    marginTop: 5,
  },
  image: {
    width: 140,
    height: 100,
    borderRadius: 10,
  },
  quickReplieContainer: {
    backgroundColor: '#fff',
    width: '60%',
  },
  quickReplieContent: {
    borderLeftWidth: 5,
    borderRadius: 5,
    paddingLeft: 10,
    paddingRight: 10,
    paddingVertical: 8,
    backgroundColor: 'rgba(7,85,219, 0.1)',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    fontWeight: 'bold',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  previewImage: {
    width: 40,
    height: 40,
    marginLeft: 20,
  },
});
