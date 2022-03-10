import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image, Pressable} from 'react-native';
import {Icon} from 'native-base';
import ProductCommonLayout from './ProductCommonLayout';

const ProductLayout = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      prodimage:
        'https://rudrapuja.com/wp-content/uploads/2019/05/cut-work-shree-yantra-1.jpg',
      prodtitle: 'Zodiac Sign Bracelet',
    },
    {
      id: 2,
      prodimage: 'https://m.media-amazon.com/images/I/71rNjwReaFL._UL1500_.jpg',
      prodtitle: 'Zodiac Sign Bracelet',
    },
    {
      id: 3,
      prodimage:
        'https://cdn.shopify.com/s/files/1/0220/0648/products/Pisces-silver-charm-bracelet_2500x.jpg?v=1625623271',
      prodtitle: 'Zodiac Sign Bracelet',
    },
  ]);
  return (
    <View>
      <FlatList
        style={styles.ProdLoop}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={product}
        renderItem={({item}) => {
          return (
            <ProductCommonLayout
              imgsrc={{uri: item.prodimage}}
              title={item.prodtitle}
              cartTextItem="+ Add to Cart"
            />
          );
        }}
      />
    </View>
  );
};

export default ProductLayout;

const styles = StyleSheet.create({
  ProdLoop: {marginTop: 20, marginHorizontal: 10 /*backgroundColor: 'green'*/},
});
