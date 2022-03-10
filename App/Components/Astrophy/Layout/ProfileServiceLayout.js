import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import {Icon} from 'native-base';
import ProfileServiceCard from './ProfileServiceCard';

const ProfileServiceLayout = () => {
  const [service, setService] = useState([
    {
      id: 1,
      shopImage:
        'https://www.infobooks.org/wp-content/uploads/2021/03/Astrology-Books.jpg',
      ratingText: '4.6/5 (124 sales)',
      shopName: 'Psychic Love Reading, Same day..',
      price: '₹ 00.00',
      customerImg:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      customerName: 'Alex Martin',
    },
    {
      id: 2,
      shopImage:
        'https://www.infobooks.org/wp-content/uploads/2021/03/Astrology-Books.jpg',
      ratingText: '4.6/5 (124 sales)',
      shopName: 'Psychic Love Reading, Same day..',
      price: '₹ 00.00',
      customerImg:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      customerName: 'Alex Martin',
    },
    {
      id: 3,
      shopImage:
        'https://www.infobooks.org/wp-content/uploads/2021/03/Astrology-Books.jpg',
      ratingText: '4.6/5 (124 sales)',
      shopName: 'Psychic Love Reading, Same day..',
      price: '₹ 00.00',
      customerImg:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      customerName: 'Alex Martin',
    },
    {
      id: 4,
      shopImage:
        'https://www.infobooks.org/wp-content/uploads/2021/03/Astrology-Books.jpg',
      ratingText: '4.6/5 (124 sales)',
      shopName: 'Psychic Love Reading, Same day..',
      price: '₹ 00.00',
      customerImg:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      customerName: 'Alex Martin',
    },
  ]);
  return (
    <View>
      <FlatList
        style={{marginTop: 20, marginHorizontal: 10}}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={service}
        renderItem={({item}) => {
          return (
            <ProfileServiceCard
              shopImg={{uri: item.shopImage}}
              rating={item.ratingText}
              nameOfShop={item.shopName}
              priceShop={item.price}
              customerImage={{uri: item.customerImg}}
              Name={item.customerName}
            />
          );
        }}
      />
    </View>
  );
};

export default ProfileServiceLayout;

const styles = StyleSheet.create({});
