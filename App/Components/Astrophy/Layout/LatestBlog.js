import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList, Image} from 'react-native';

const LatestBlog = () => {
  const [list, setList] = useState([
    {
      id: 1,
      pDate: 'April 25, 2021',
      title: '5 ASTRONOMY BOOKS FOR BEGINNERS',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      text: 'Read More',
      image:
        'https://www.secretsofuniverse.in/wp-content/uploads/2020/06/20200608_124658_0000-1024x559.png',
    },
    {
      id: 2,
      pDate: 'April 25, 2021',
      title: '5 ASTRONOMY BOOKS FOR BEGINNERS',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      text: 'Read More',
      image:
        'https://www.secretsofuniverse.in/wp-content/uploads/2020/06/20200608_124658_0000-1024x559.png',
    },
    {
      id: 3,
      pDate: 'April 25, 2021',
      title: '5 ASTRONOMY BOOKS FOR BEGINNERS',
      desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      text: 'Read More',
      image:
        'https://www.secretsofuniverse.in/wp-content/uploads/2020/06/20200608_124658_0000-1024x559.png',
    },
  ]);
  return (
    <View>
      <FlatList
        style={styles.blogView}
        keyExtractor={(item, index) => index}
        horizontal={true}
        data={list}
        renderItem={({item}) => {
          return (
            <View style={styles.blogBlock}>
              <Image source={{uri: item.image}} style={styles.blogImg} />
              <Text style={styles.blogDate}>{item.pDate}</Text>
              <Text style={styles.blogTitle}>{item.title}</Text>
              <Text style={styles.blogDesc}>{item.desc}</Text>
              <Text style={styles.blogText}>{item.text}</Text>
            </View>
          );
        }}
      />
    </View>
  );
};

export default LatestBlog;

const styles = StyleSheet.create({
  blogView: {marginTop: 20, marginHorizontal: 10},
  blogBlock: {
    //backgroundColor: 'skyblue',
    height: 350,
    width: 300,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: '#EDEDED',
    marginHorizontal: 10,
    marginBottom: 100,
    justifyContent: 'space-between',
  },
  blogImg: {height: 180, width: '100%', borderRadius: 10},
  blogTitle: {
    paddingLeft: 10,
    color: '#0A0E17',
    fontSize: 20,
    fontWeight: 'bold',
  },
  blogDate: {color: '#E84A56', fontSize: 16, paddingLeft: 10},
  blogDesc: {paddingLeft: 10, color: '#0A0E17', fontSize: 14},
  blogText: {
    paddingLeft: 10,
    marginBottom: 10,
    color: '#A3AABA',
    fontSize: 14,
    fontWeight: 'bold',
  },
});
