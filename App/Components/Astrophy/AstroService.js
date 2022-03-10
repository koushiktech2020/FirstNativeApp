import React, {useState} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';
import HeaderLayout from './Layout/HeaderLayout';
import SearchLayout from './Layout/SearchLayout';
import ServiceCard from './Layout/ServiceCard';
import Navigation from '../../Navigation';

const AstroService = () => {
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

      serviceName: 'Astrology',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
    {
      id: 4,
      catImg:
        'https://teachengineering.org/content/cub_/lessons/cub_mechanics/cub_mechanics_lesson09_header_image_new2.jpg',

      serviceName: 'Pendulum',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
    {
      id: 5,
      catImg:
        'https://teachengineering.org/content/cub_/lessons/cub_mechanics/cub_mechanics_lesson09_header_image_new2.jpg',

      serviceName: 'Mind Reading',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
    {
      id: 6,
      catImg:
        'https://teachengineering.org/content/cub_/lessons/cub_mechanics/cub_mechanics_lesson09_header_image_new2.jpg',

      serviceName: 'Psychic Reading',
      serviceDesc:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh cursus ',
      serviceMore: 'View More',
    },
  ]);
  const onMenuClick = () => {
    Navigation.openDrawer();
  };
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLayout
        title="Service Category"
        iconName="menu"
        iconType="Feather"
        actionBack={onMenuClick}
      />
      <SearchLayout />
      <View style={{flex: 1}}>
        <FlatList
          style={styles.serviceLoop}
          keyExtractor={(item, index) => index}
          key={'#'}
          numColumns={2}
          showsVerticalScrollIndicator={false}
          data={cateGory}
          renderItem={({item}) => {
            return (
              <ServiceCard
                imgsrc={{uri: item.catImg}}
                title={item.serviceName}
                textDetails={item.serviceDesc}
                linkMore={item.serviceMore}
              />
            );
          }}
        />
      </View>
    </View>
  );
};

export default AstroService;

const styles = StyleSheet.create({
  serviceLoop: {
    //backgroundColor: 'green',
    //marginTop: 10,
    marginHorizontal: 10,
  },
});
