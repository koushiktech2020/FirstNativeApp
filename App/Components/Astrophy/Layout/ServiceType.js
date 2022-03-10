import React, {useState} from 'react';
import {StyleSheet, Text, View, Image, FlatList} from 'react-native';
import ServiceCard from './ServiceCard';

const ServiceType = () => {
  const [cateGory, setCategory] = useState([
    {
      id: 1,
      catImg:
        'https://media.allure.com/photos/60fed2b43a2765b3b97ee23c/master/pass/wheel%20of%20fortune%20tarot%20card.jpg',
      serviceName: 'Tarot Reading',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
    {
      id: 2,
      catImg:
        'https://askastrology.com/wp-content/uploads/2021/05/numerology-768x512.jpg',

      serviceName: 'Numerology',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
    {
      id: 3,
      catImg:
        'https://cdn.pixabay.com/photo/2019/03/08/01/28/hypnosis-4041582__480.jpg',

      serviceName: 'Tarot Reading',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
    {
      id: 4,
      catImg:
        'https://teachengineering.org/content/cub_/lessons/cub_mechanics/cub_mechanics_lesson09_header_image_new2.jpg',

      serviceName: 'Numerology',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
  ]);

  // const clickMore = () => {
  //   alert('clicked');
  // };
  return (
    <View>
      <FlatList
        style={styles.serviceLoop}
        keyExtractor={(item, index) => index}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={cateGory}
        renderItem={({item}) => {
          return (
            <ServiceCard
              imgsrc={{uri: item.catImg}}
              title={item.serviceName}
              textDetails={item.serviceDesc}
              linkMore={item.serviceMore}
              // clickAction={clickMore}
            />
          );
        }}
      />
    </View>
  );
};

export default ServiceType;

const styles = StyleSheet.create({
  serviceLoop: {
    //backgroundColor: 'green',
    //marginTop: 10,
    marginHorizontal: 10,
  },
});
