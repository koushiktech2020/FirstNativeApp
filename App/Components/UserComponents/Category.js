import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const Category = () => {
  const [product, setProduct] = useState([
    {
      id: 1,
      text: 'Computers',
      image: 'https://www.dummies.com/wp-content/uploads/453360.image0.jpg',
    },
    {
      id: 2,
      text: 'Mobiles',
      image: 'https://m.media-amazon.com/images/I/41sGASjc4-L.jpg',
    },
    {
      id: 3,
      text: 'Tablets',
      image: 'https://m.media-amazon.com/images/I/71ELmR32cjL._AC_SL1500_.jpg',
    },
    {
      id: 4,
      text: 'Laptops',
      image: 'https://m.media-amazon.com/images/I/71h6PpGaz9L._AC_SS450_.jpg',
    },
    {
      id: 5,
      text: 'Ipad',
      image:
        'https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/ipad-pro-12-select-wifi-spacegray-202104_FMT_WHH?wid=1945&hei=2000&fmt=jpeg&qlt=95&.v=1617126635000',
    },
    {
      id: 6,
      text: 'Macbook',
      image:
        'https://www.apple.com/v/macbook-pro-14-and-16/a/images/meta/macbook-pro-14-and-16_overview__fz0lron5xyuu_og.png?202110281932',
    },
  ]);
  return (
    <View style={styles.CategoryView}>
      <FlatList
        keyExtractor={(item, index) => index}
        horizontal={true}
        data={product}
        renderItem={({item}) => {
          return (
            <View style={styles.CategoryList}>
              <Image source={{uri: item.image}} style={styles.CategoryImage} />
              <Text>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  CategoryView: {
    height: 180,
    width: '100%',
    backgroundColor: '#E3EAEA',
  },
  CategoryList: {
    alignItems: 'center',
    paddingHorizontal: 5,
    marginHorizontal: 5,
    justifyContent: 'center',
  },
  CategoryImage: {
    height: 80,
    width: 80,
    borderRadius: 100,
  },
});
