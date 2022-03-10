import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';
import ChatMessageLayout from './ChatMessageLayout';
import {Icon} from 'native-base';
import ServiceRating from './ServiceRating';

const ServiceComments = () => {
  const [comments, setComments] = useState([
    {
      id: 1,
      imgLink:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      person: 'Alex Martin',
      timeDate: '02, Feb 2021',
      msg: 'Obsessed! I began going to her this week and I already got 4 readings.She is super accurate. I think I finally found the right one on here!Will continue to purchase more gigs',
    },
    {
      id: 2,
      imgLink:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      person: 'Alex Martin',
      timeDate: '02, Feb 2021',
      msg: 'Obsessed! I began going to her this week and I already got 4 readings.She is super accurate. I think I finally found the right one on here!Will continue to purchase more gigs',
    },
    {
      id: 3,
      imgLink:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      person: 'Alex Martin',
      timeDate: '02, Feb 2021',
      msg: 'Obsessed! I began going to her this week and I already got 4 readings.She is super accurate. I think I finally found the right one on here!Will continue to purchase more gigs',
    },
  ]);
  return (
    <View>
      <FlatList
        style={styles.flatItem}
        keyExtractor={(item, index) => index}
        data={comments}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <View>
              <View style={styles.chatView}>
                <View style={styles.chatSubView}>
                  <Image style={styles.chatImg} source={{uri: item.imgLink}} />
                  <View>
                    <Text style={styles.chatPersonName}>{item.person}</Text>
                    <ServiceRating />
                  </View>
                </View>
                <Text style={styles.chatDateTime}>{item.timeDate}</Text>
              </View>
              <Text style={styles.textStyle}>{item.msg}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default ServiceComments;

const styles = StyleSheet.create({
  flatItem: {marginHorizontal: 10, marginTop: 10},
  iconView: {
    flexDirection: 'row',
    //marginLeft: 70,
  },
  iconStyle: {
    fontSize: 22,
    color: '#F2C94C',
  },
  textStyle: {
    margin: 20,
    color: '#0A0E17',
    fontSize: 16.5,
  },
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
  starRating: {color: '#0A0E1799', fontSize: 16},
  chatDateTime: {color: '#A3AABA', fontSize: 14},
});
