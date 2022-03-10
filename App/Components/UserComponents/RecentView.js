import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const RecentView = () => {
  const [view, setView] = useState([
    {
      id: 1,
      text: 'Xaomi TV',
      price: '11,990',
      image:
        'https://static.dezeen.com/uploads/2020/08/xiaomi-mi-tv-lux-technology-design_dezeen_2364_col_0-852x500.jpg',
    },
    {
      id: 2,
      text: 'Microsoft TV',
      price: '35,990',
      image:
        'https://cdn1.cloudpro.co.uk/sites/cloudprod7/files/2016/05/windows_store_main_banner_may_2016_edit_694x414.jpg',
    },
    {
      id: 3,
      text: 'Apple TV',
      price: '45,990',
      image:
        'https://cdn.pocket-lint.com/r/s/970x/assets/images/142286-tv-review-apple-tv-4k-review-making-4k-affordable-image1-vzclok2ald-jpg.webp',
    },
    {
      id: 4,
      text: 'Amazon TV',
      price: '20,990',
      image:
        'https://images.indianexpress.com/2021/08/3ca7fa23-cfcb-42bf-87f0-879e2fa7bcf4.jpg',
    },
    {
      id: 5,
      text: 'NetFlix TV',
      price: '25,990',
      image:
        'https://www.cnet.com/a/img/R0vLcLHuPk0hPjDelghe4AfDkZE=/1200x675/2021/04/22/decf3f44-6b03-4093-bcef-35d2892be761/004-how-to-watch-netflix-on-your-tv-2021.jpg',
    },
    {
      id: 6,
      text: 'MX TV',
      price: '10,990',
      image:
        'https://image3.mouthshut.com/images/Top_pages/Pages_Images/mx-player-upcoming-web-series.jpg',
    },
  ]);
  return (
    <View style={styles.recentView}>
      <Text
        style={{
          fontSize: 25,
          fontWeight: 'bold',
          paddingTop: 10,
          paddingLeft: 10,
          color: '#080808',
        }}>
        Recent Viewed
      </Text>
      <FlatList
        keyExtractor={(item, index) => index}
        horizontal={true}
        data={view}
        renderItem={({item}) => {
          return (
            <View style={styles.recentViewList}>
              <Image
                source={{uri: item.image}}
                style={styles.recentViewListImage}
              />
              <Text style={styles.recentViewText1}>{item.text}</Text>
              <Text style={styles.recentViewText2}>{item.price}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default RecentView;

const styles = StyleSheet.create({
  recentView: {
    height: 220,
    width: '100%',
    backgroundColor: '#fff',
  },
  recentViewList: {
    paddingHorizontal: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  recentViewListImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  recentViewText1: {
    fontSize: 14,
    color: '#080808',
  },
  recentViewText2: {
    fontSize: 14,
    color: '#038B0B',
  },
});
