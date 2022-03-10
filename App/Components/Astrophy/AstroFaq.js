import React, {useState, useRef} from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import HeaderLayout from './Layout/HeaderLayout';
import {Transition, Transitioning} from 'react-native-reanimated';
import {Icon} from 'native-base';
import FaqData from './Layout/FaqData';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);

const AstroFaq = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLayout
        title={<Text style={{color: 'black'}}>FAQ</Text>}
        iconName="menu"
        iconType="Feather"
      />
      <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}>
        {FaqData.map(({id, color, category, subCategories}, index) => {
          return (
            <TouchableOpacity
              key={id}
              onPress={() => {
                ref.current.animateNextTransition();
                setCurrentIndex(index === currentIndex ? null : index);
              }}
              style={styles.cardContainer}
              activeOpacity={0.9}>
              <View style={styles.card}>
                <Text style={[styles.heading, {color}]}>{category}</Text>
                <Icon
                  name="down"
                  type="AntDesign"
                  style={{
                    fontSize: 22,
                  }}
                />
              </View>
              {index === currentIndex && (
                <View style={styles.subCategoriesList}>
                  {subCategories.map(subCategory => (
                    <Text key={subCategory} style={styles.body}>
                      {subCategory}
                    </Text>
                  ))}
                </View>
              )}
            </TouchableOpacity>
          );
        })}
      </Transitioning.View>
    </View>
  );
};

export default AstroFaq;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
    marginHorizontal: 20,
  },
  cardContainer: {
    flexGrow: 1,
  },
  card: {
    flexGrow: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    //backgroundColor: 'blue',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    //backgroundColor: 'red',
  },
  body: {
    fontSize: 16,
    lineHeight: 20 * 1.5,
    color: '#959595',
  },
  subCategoriesList: {
    marginStart: 20,
    //backgroundColor: 'red',
    //alignItems: 'center',
  },
});
