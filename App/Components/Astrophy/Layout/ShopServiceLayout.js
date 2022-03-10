import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import ShopServiceCard from './ShopServiceCard';

const ShopServiceLayout = () => {
  const [shop, setShop] = useState([
    {
      id: 1,
      imageLink:
        'https://www.astro-raj.com/photos/1551173245astrology%20services%20astrology%20products.jpg',
      titleText: 'Psychic Love Reading, Same day..',
      shopPrice: '₹ 00.00',
    },
    {
      id: 2,
      imageLink:
        'https://3.imimg.com/data3/BY/DK/MY-3320247/gemstones-precious-semi-precious-500x500.jpg',
      titleText: 'Psychic Love Reading, Same day..',
      shopPrice: '₹ 00.00',
    },
    {
      id: 3,
      imageLink:
        'https://assets.bigcartel.com/product_images/260933594/IMG_1309.jpg?auto=format&fit=max&w=1500',
      titleText: 'Psychic Love Reading, Same day..',
      shopPrice: '₹ 00.00',
    },
    {
      id: 4,
      imageLink:
        'https://static.onecms.io/wp-content/uploads/sites/13/2018/12/07/zodiac.jpg',
      titleText: 'Psychic Love Reading, Same day..',
      shopPrice: '₹ 00.00',
    },
    {
      id: 5,
      imageLink:
        'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/astroproducts-1632368726.jpg?crop=0.502xw:1.00xh;0.250xw,0&resize=640:*',
      titleText: 'Psychic Love Reading, Same day..',
      shopPrice: '₹ 00.00',
    },
    {
      id: 6,
      imageLink:
        'https://3.imimg.com/data3/JJ/VK/MY-10043852/vastu-products-500x500.jpg',
      titleText: 'Psychic Love Reading, Same day..',
      shopPrice: '₹ 00.00',
    },
  ]);
  return (
    <View style={styles.mainView}>
      <FlatList
        style={styles.flatItem}
        keyExtractor={(item, index) => index}
        key={'#'}
        numColumns={2}
        data={shop}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ShopServiceCard
              imgsrc={{uri: item.imageLink}}
              title={item.titleText}
              price={item.shopPrice}
            />
          );
        }}
      />
    </View>
  );
};

export default ShopServiceLayout;

const styles = StyleSheet.create({
  mainView: {
    //flex: 1,
    //backgroundColor: 'red',
    //alignItems: 'center',
    //height: 300,
  },
  flatItem: {marginHorizontal: 10, marginTop: 10},
});
