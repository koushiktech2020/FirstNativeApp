import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import {Icon} from 'native-base';
import ProductCommonLayout from './ProductCommonLayout';

const ProductList = () => {
  const [products, setProducts] = useState([
    {
      id: 1,
      prodimage:
        'https://www.whiteauravastustore.com/wp-content/uploads/2020/11/Meru-Shriparni.jpg',
      prodtitle: 'Parad Meru Shri Shree Yantra',
    },
    {
      id: 2,
      prodimage:
        'https://cdn.shopify.com/s/files/1/0220/0648/products/Pisces-silver-charm-bracelet_2500x.jpg?v=1625623271',
      prodtitle: 'Zodiac Sign Bracelet',
    },
    {
      id: 3,
      prodimage:
        'https://www.whiteauravastustore.com/wp-content/uploads/2020/11/Meru-Shriparni.jpg',
      prodtitle: 'Parad Meru Shri Shree Yantra',
    },
    {
      id: 4,
      prodimage:
        'https://cdn.shopify.com/s/files/1/0220/0648/products/Pisces-silver-charm-bracelet_2500x.jpg?v=1625623271',
      prodtitle: 'Zodiac Sign Bracelet',
    },
    {
      id: 5,
      prodimage:
        'https://cdn.shopify.com/s/files/1/0220/0648/products/Pisces-silver-charm-bracelet_2500x.jpg?v=1625623271',
      prodtitle: 'Zodiac Sign Bracelet',
    },
    {
      id: 6,
      prodimage:
        'https://www.whiteauravastustore.com/wp-content/uploads/2020/11/Meru-Shriparni.jpg',
      prodtitle: 'Parad Meru Shri Shree Yantra',
    },
  ]);
  return (
    <View style={{flex: 1}}>
      <FlatList
        style={styles.flatProduct}
        keyExtractor={(item, index) => index}
        key={'#'}
        numColumns={2}
        data={products}
        showsVerticalScrollIndicator={false}
        renderItem={({item}) => {
          return (
            <ProductCommonLayout
              imgsrc={{uri: item.prodimage}}
              title={item.prodtitle}
              cartTextItem="+ Add To Cart"
            />
          );
        }}
      />
    </View>
  );
};

export default ProductList;

const styles = StyleSheet.create({
  flatProduct: {paddingLeft: 4},
});
