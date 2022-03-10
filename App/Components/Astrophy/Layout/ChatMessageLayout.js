import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const ChatMessageLayout = props => {
  return (
    <View style={styles.chatView}>
      <View style={styles.chatSubView}>
        <Image style={styles.chatImg} source={props.imgsrc} />
        <View>
          <Text style={styles.chatPersonName}>{props.name}</Text>
          <Text style={styles.chatMesaageText}>{props.chatMessage}</Text>
        </View>
      </View>
      <Text style={styles.chatDateTime}>{props.timeTitle}</Text>
    </View>
  );
};

export default ChatMessageLayout;

const styles = StyleSheet.create({
  chatView: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 22,
    marginHorizontal: 20,
  },
  chatSubView: {
    flexDirection: 'row',
    //backgroundColor: 'green',
    //width: 170,
  },
  chatImg: {height: 50, width: 50, borderRadius: 100, marginRight: 10},
  chatPersonName: {fontSize: 18, fontWeight: 'bold', color: '#0A0E17'},
  chatMesaageText: {color: '#0A0E1799', fontSize: 16},
  chatDateTime: {color: '#A3AABA', fontSize: 14},
});
