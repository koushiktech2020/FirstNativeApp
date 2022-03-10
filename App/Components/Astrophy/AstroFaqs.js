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
import FaqsData from './Layout/FaqsData';

const transition = (
  <Transition.Together>
    <Transition.In type="fade" durationMs={200} />
    <Transition.Change />
    <Transition.Out type="fade" durationMs={200} />
  </Transition.Together>
);
const AstroFaqs = () => {
  const [currentIndex, setCurrentIndex] = useState(null);
  const ref = useRef();
  return (
    <View style={{flex: 1, backgroundColor: '#fff'}}>
      <HeaderLayout
        title={
          <Text style={{color: 'black'}}>
            FAQs | <Text style={{color: '#C7C7C7'}}>Category Name</Text>
          </Text>
        }
        iconName="menu"
        iconType="Feather"
      />
      <Text style={{backgroundColor: '#EDEDED', height: 1, marginTop: 10}} />
      <Transitioning.View
        ref={ref}
        transition={transition}
        style={styles.container}>
        {FaqsData.map(({id, color, category, subCategories}, index) => {
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

                {index === currentIndex && (
                  <View style={styles.subCategoriesList}>
                    {subCategories.map(subCategory => (
                      <Text key={subCategory} style={[styles.body]}>
                        {subCategory}
                      </Text>
                    ))}
                  </View>
                )}
              </View>
            </TouchableOpacity>
          );
        })}
      </Transitioning.View>
      {/* <ScrollView>
        <Text style={styles.dummyBold}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          nibh cursus{' '}
        </Text>
        <Text style={styles.dummyNormal}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          nibh cursus. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          A, volutpat nibh cursus Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. A, volutpat nibh cursus. Lorem ipsum dolor sit amet,
          consectetur adipiscing elit. A, volutpat nibh cursus Lorem ipsum dolor
          sit amet, consectetur adipiscing elit. A, volutpat nibh cursus. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat nibh
          cursus{' '}
        </Text>
        <Text style={styles.dummyBold}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          nibh cursus{' '}
        </Text>
        <Text style={styles.dummyBold}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          nibh cursus{' '}
        </Text>
        <Text style={styles.dummyBold}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          nibh cursus{' '}
        </Text>
        <Text style={styles.dummyBold}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. A, volutpat
          nibh cursus{' '}
        </Text>
      </ScrollView> */}
    </View>
  );
};

export default AstroFaqs;

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
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    fontSize: 18.5,
    fontWeight: 'bold',
  },
  body: {
    fontSize: 16,
    lineHeight: 20 * 1.5,
    color: '#959595',
  },
  subCategoriesList: {
    marginTop: 20,
  },
});
