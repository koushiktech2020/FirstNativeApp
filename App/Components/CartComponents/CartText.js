import React, {useState} from 'react';
import {Alert, StyleSheet, Text, View, Modal, Pressable} from 'react-native';
import {Icon} from 'native-base';

const CartText = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <View style={styles.cartDetails}>
      <Pressable style={styles.cartPress} onPress={() => setModalVisible(true)}>
        <Text style={{fontSize: 22, color: 'black'}}>Description</Text>
        <Modal
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>
                Mi TV 4X 108cm (43) Get a stellar visual experience on the Mi TV
                4X 43. The Mi TV 4X 43 features a 4K HDR 10-bit display that
                provides an incredible level of detail and color fidelity for
                truly entertaining viewing. The 20W speakers Dolby™+ DTS-HD®
                delivers room-filling sound to complete the spectacle. Exciting
                binge-worthy content comes to the improved PatchWall with the
                addition of 4K content. Features: - 4K Ultra-HD display for
                richly detailed viewing experience - Equipped with Dolby™+
                DTS-HD® audio technology, clear sonorous sound is always
                delivered - PatchWall comes with a choice of all-new exciting
                content partners including Amazon Prime Video, Netflix, Hungama
                and 15 others - What makes this TV truly smart is the addition
                of Android TV™ + Google Assistant that allows you to play
                content, find answers and more - Data Saver mode allows you to
                stream up to 3 times more video content, see the media from your
                phone on your TV and stream content with ease Enjoy your media a
                little more on the Mi TV 4X 43!
              </Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Icon name="down" type="AntDesign" style={{fontSize: 22}} />
      </Pressable>
      <View style={styles.cartDesc}>
        <Text style={{fontSize: 22, color: 'black'}}>Reviews</Text>
        <View style={{flexDirection: 'row'}}>
          <Text style={{fontSize: 15, fontWeight: '600', color: 'black'}}>
            1561
          </Text>
          <Icon name="down" type="AntDesign" style={{fontSize: 22}} />
        </View>
      </View>
      <View style={styles.cartDesc}>
        <Text style={{fontSize: 22, color: 'black'}}>Characteristics</Text>
        <Icon name="down" type="AntDesign" style={{fontSize: 22}} />
      </View>
      <View style={styles.cartDesc}>
        <Text style={{fontSize: 22, color: 'black'}}>Similar Items</Text>
        <Icon name="down" type="AntDesign" style={{fontSize: 22}} />
      </View>
    </View>
  );
};

export default CartText;

const styles = StyleSheet.create({
  cartDetails: {
    //backgroundColor: '#DEE1DE',
    height: 250,
    width: '100%',
    paddingHorizontal: 10,
    justifyContent: 'space-around',
  },
  cartPress: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
    //backgroundColor: 'green',
  },
  cartDesc: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    paddingHorizontal: 5,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});
