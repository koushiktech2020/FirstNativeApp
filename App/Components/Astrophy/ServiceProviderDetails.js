import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HeaderLayout from './Layout/HeaderLayout';
import ServiceProviderCard from './Layout/ServiceProviderCard';

const ServiceProviderDetails = () => {
  const [images, setImages] = useState([
    {
      id: 1,
      imgLink:
        'https://5.imimg.com/data5/QD/BD/MY-3456141/astrology-gemstones-500x500.png',
      shopname: 'Shop Name',
      imgPerson:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      namePerson: 'Alex Martin',
    },
    {
      id: 2,
      imgLink:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/june-moodboard-collage-1558036337.jpg',
      shopname: 'Shop Name',
      imgPerson:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      namePerson: 'Alex Martin',
    },
    {
      id: 3,
      imgLink:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/astroproducts-1632368726.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      shopname: 'Shop Name',
      imgPerson:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      namePerson: 'Alex Martin',
    },
    {
      id: 4,
      shopname: 'Shop Name',
      imgPerson:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      namePerson: 'Alex Martin',
      imgLink:
        'https://cdn.trendhunterstatic.com/thumbs/astrology-products.jpeg',
    },
    {
      id: 5,
      shopname: 'Shop Name',
      imgPerson:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      namePerson: 'Alex Martin',
      imgLink:
        'https://www.stylegods.com/wp-content/uploads/2018/04/Julep-Zodiac-Collection-Nail-Polish-vogue-india.jpg',
    },
    {
      id: 6,
      shopname: 'Shop Name',
      imgPerson:
        'https://m.media-amazon.com/images/M/MV5BOWQyZDRjMzMtMTgzZS00Mjk0LWE0NmEtZjMxNDA2NzgxYmYwXkEyXkFqcGdeQXVyMjQwMDg0Ng@@._V1_.jpg',
      namePerson: 'Alex Martin',
      imgLink:
        'https://library.kissclipart.com/20180926/voe/kissclipart-astrology-stone-clipart-astrology-noida-gemstone-f6a538a3a892522b.jpg',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <HeaderLayout title="Shop" iconName="menu" iconType="Feather" />
      <Text style={{backgroundColor: '#EDEDED', height: 1.5, marginTop: 10}} />
      <FlatList
        style={styles.flatService}
        keyExtractor={(item, index) => index}
        key={'#'}
        numColumns={2}
        data={images}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ServiceProviderCard
              imgsrc={{uri: item.imgLink}}
              shopName={item.shopname}
              imagePerson={{uri: item.imgPerson}}
              personName={item.namePerson}
            />
          );
        }}
      />
    </View>
  );
};

export default ServiceProviderDetails;

const styles = StyleSheet.create({flatService: {paddingLeft: 4}});
