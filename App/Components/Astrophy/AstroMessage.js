import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  FlatList,
} from 'react-native';
import HeaderLayout from './Layout/HeaderLayout';
import SearchLayout from './Layout/SearchLayout';
import ChatMessageLayout from './Layout/ChatMessageLayout';
import Navigation from '../../Navigation';

const AstroMessage = () => {
  const [chat, setChat] = useState([
    {
      id: 1,
      imglink:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      name: 'Alex Martin',
      message: 'Hello',
      timeTitle: 'Today',
    },
    {
      id: 2,
      imglink:
        'https://www.eluniversal.com.mx/sites/default/files/2021/08/15/alex_fernandez_jr._ok.jpg',
      name: 'uamar Murty',
      message: 'Hello',
      timeTitle: 'Today',
    },
    {
      id: 3,
      imglink:
        'https://im.idiva.com/photogallery/2015/May/nargis_fakhri_idiva.jpg',
      name: ' Sajal Innuganti',
      message: 'Hello',
      timeTitle: 'Yesterday',
    },
    {
      id: 4,
      imglink:
        'https://i1.wp.com/3.bp.blogspot.com/-kJAk7Cn7_lk/WkgCxODk1cI/AAAAAAAAXQg/THX5J1QWsqUdUXHpA6KzTkoS3QwTXK6ggCLcBGAs/s1600/1.jpg?w=750&ssl=1',
      name: 'Kanha Pendyala',
      message: 'Hello',
      timeTitle: 'Yesterday',
    },
    {
      id: 5,
      imglink:
        'https://tamil.samayam.com/photo/msid-85894279,imgsize-124518/pic.jpg',
      name: 'Hemangi Chandna',
      message: 'Hello',
      timeTitle: '2 months ago',
    },
    {
      id: 6,
      imglink:
        'https://filmfare.wwmindia.com/content/2020/nov/kritisanondomesticabuse41606223308.jpg',
      name: 'Himaghna Tarpana',
      message: 'Hello',
      timeTitle: '2 months ago',
    },
    {
      id: 7,
      imglink:
        'http://www.hindustantimes.com/rf/image_size_960x540/HT/p2/2017/01/17/Pictures/profile-shoot-residence-bollywood-actor-sonam-kapoor_67a9618a-dcbb-11e6-a538-54bd197a5a1b.jpg',
      name: 'Suhali Balakrishnan',
      message: 'Hello',
      timeTitle: '2 months ago',
    },
  ]);
  const onMenuClick = () => {
    Navigation.openDrawer();
  };
  return (
    <View style={{flex: 1}}>
      <HeaderLayout
        title="Chat"
        iconName="menu"
        iconType="Feather"
        actionBack={onMenuClick}
      />
      <SearchLayout />
      <FlatList
        style={styles.chatLoop}
        keyExtractor={(item, index) => index}
        vertical={true}
        showsVerticalScrollIndicator={false}
        data={chat}
        renderItem={({item}) => {
          return (
            <ChatMessageLayout
              imgsrc={{uri: item.imglink}}
              name={item.name}
              chatMessage={item.message}
              timeTitle={item.timeTitle}
            />
          );
        }}
      />
    </View>
  );
};

export default AstroMessage;

const styles = StyleSheet.create({
  chatLoop: {
    /*backgroundColor: 'green'*/
  },
});
