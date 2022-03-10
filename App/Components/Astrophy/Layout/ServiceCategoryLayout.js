import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Pressable} from 'react-native';

const ServiceCategoryLayout = () => {
  const [menu, setMenu] = useState([
    {category: 'All', value: '42', select: false},
    {category: 'Psychic Reading', value: '39', select: false},
    {category: 'Reiki', value: '03', select: false},
    {category: 'Alpha Meditation', value: '24', select: false},
    {category: 'Theta Meditation', value: '10', select: false},
    {category: 'Telepathy', value: '42', select: false},
  ]);

  const selectmenu = val => {
    let newarr = menu.map((item, index) => {
      if (val == index) {
        item.select = !item.select;
      } else {
        item.select = false;
      }
      return {...item};
    });

    setMenu(newarr);
  };

  return (
    <View style={styles.mainview}>
      <View>
        <FlatList
          data={menu}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index}
          horizontal={true}
          renderItem={({item, index}) => {
            return (
              <Pressable
                onPress={() => selectmenu(index)}
                style={[
                  styles.innerview,
                  {backgroundColor: item.select ? '#C7C7C7' : 'white'},
                ]}>
                <Text
                  style={{
                    fontSize: 18,
                    color: 'black',
                    paddingHorizontal: 8,
                  }}>
                  {item.category}&nbsp;({item.value}){' '}
                </Text>
              </Pressable>
            );
          }}
        />
      </View>
    </View>
  );
};

export default ServiceCategoryLayout;

const styles = StyleSheet.create({
  mainview: {
    //backgroundColor: 'red',
    margin: 20,
    //height: 50,
  },
  innerview: {
    borderWidth: 1,
    borderColor: '#EDEDED',
    borderRadius: 20,
    height: 50,
    justifyContent: 'center',
    //alignItems: 'center',
    marginRight: 5,
    marginTop: 5,
  },
});
