import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {TransitionPresets, createStackNavigator} from '@react-navigation/stack';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {createDrawerNavigator} from '@react-navigation/drawer';
import AstroLogin from '../../Components/Astrophy/AstroLogin';
import AstroSignUp from '../../Components/Astrophy/AstroSignUp';
import AstrophyHome from '../../Components/Astrophy/AstrophyHome';
import AstroForgotPass from '../../Components/Astrophy/AstroForgotPass';
import Navigation from '../../Navigation';
import {Root, Icon} from 'native-base';
import AstroService from '../../Components/Astrophy/AstroService';
import AstroProducts from '../../Components/Astrophy/AstroProducts';
import AstroMessage from '../../Components/Astrophy/AstroMessage';
import AstroProfile from '../../Components/Astrophy/AstroProfile';
import ServiceProviderDetails from '../../Components/Astrophy/ServiceProviderDetails';
import ServiceProviderPage from '../../Components/Astrophy/ServiceProviderPage';
import AstroSettings from '../../Components/Astrophy/AstroSettings';
import AstroFaq from '../../Components/Astrophy/AstroFaq';
import AstroFaqs from '../../Components/Astrophy/AstroFaqs';
import DrawerContent from '../../Components/Astrophy/Layout/NavigationLayout/DrawerContent';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

function DrawerNav() {
  return (
    <Drawer.Navigator
      drawerStyle={{
        backgroundColor: '#FFF',
        //width: 200,
      }}
      drawerContent={props => <DrawerContent {...props} />}
      initialRouteName="Home"
      drawerContentOptions={{
        activeTintColor: '#2043F9' /* font color for active screen label */,
        activeBackgroundColor: 'transparent' /* bg color for active screen */,
      }}>
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="login"
              type="AntDesign"
              style={{color: '#09FBE7', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="Login"
        component={AstroLogin}
      /> */}
      {/* <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="app-registration"
              type="MaterialIcons"
              style={{color: '#F96A13', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="SignUp"
        component={AstroSignUp}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="onepassword"
              type="MaterialCommunityIcons"
              style={{color: '#CFCC02', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="ForgotPassword"
        component={AstroForgotPass}
      /> */}
      <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="user"
              type="Entypo"
              style={{color: '#09FBE7', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="Home"
        component={TabRoute}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="customerservice"
              type="AntDesign"
              style={{color: '#F91A08', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="FAQ"
        component={AstroFaq}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="setting"
              type="AntDesign"
              style={{color: '#13A104', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="Settings"
        component={AstroSettings}
      />
      <Drawer.Screen
        options={{
          drawerIcon: ({}) => (
            <Icon
              name="customerservice"
              type="AntDesign"
              style={{color: '#DF03E9', fontSize: 20}}
            />
          ),
        }}
        labelStyle={{color: '#7EC242'}}
        name="FAQs"
        component={AstroFaqs}
      />
    </Drawer.Navigator>
  );
}

const TabRoute = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      navigationOptions={{
        gesturesEnabled: false,
      }}
      screenOptions={{tabBarVisible: true}}
      tabBarOptions={{
        showLabel: false,
        style: {
          backgroundColor: '#fff',
          position: 'absolute',
          height: 80,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeRoute}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="home"
                type="AntDesign"
                style={{
                  fontSize: 22,
                  color: focused ? '#E84A56' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#E84A56' : 'black',
                }}>
                Home
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Service"
        component={AstroService}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="swatchbook"
                type="FontAwesome5"
                style={{
                  fontSize: 22,
                  color: focused ? '#E84A56' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#E84A56' : 'black',
                }}>
                Services
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Products"
        component={AstroProducts}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="CodeSandbox"
                type="AntDesign"
                style={{
                  fontSize: 22,
                  color: focused ? '#E84A56' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#E84A56' : 'black',
                }}>
                Products
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Messages"
        component={AstroMessage}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="message1"
                type="AntDesign"
                style={{
                  fontSize: 22,
                  color: focused ? '#E84A56' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#E84A56' : 'black',
                }}>
                Message
              </Text>
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={AstroProfile}
        options={{
          tabBarIcon: ({focused}) => (
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Icon
                name="account-circle-outline"
                type="MaterialCommunityIcons"
                style={{
                  fontSize: 22,
                  color: focused ? '#E84A56' : 'black',
                }}
              />
              <Text
                style={{
                  fontSize: 12,
                  color: focused ? '#E84A56' : 'black',
                }}>
                Profile
              </Text>
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const HomeRoute = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      navigationOptions={{
        gesturesEnabled: false,
      }}
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen
        name="Home"
        component={AstrophyHome}
        options={{headerShown: false}}
      />
      <Stack.Screen name="ServiceProvider" component={ServiceProviderPage} />
      <Stack.Screen
        name="ServiceProviderDetails"
        component={ServiceProviderDetails}
      />
    </Stack.Navigator>
  );
};

const Astrophy = () => {
  return (
    <>
      {/* <NavigationContainer
        ref={r => {
          Navigation.setTopLevelNavigator(r);
        }}>
        <Tab.Navigator screenOptions={{tabBarVisible: true}}>
          <Tab.Screen name="AstroLogin" component={AstroLogin} />
          <Tab.Screen name="AstroSignUp" component={AstroSignUp} />
          <Tab.Screen name="AstroForgotPass" component={AstroForgotPass} />
          <Tab.Screen name="AstrophyHome" component={AstrophyHome} />
        </Tab.Navigator>
      </NavigationContainer> */}
      <Root>
        <NavigationContainer
          ref={r => {
            Navigation.setTopLevelNavigator(r);
          }}>
          <Stack.Navigator
            initialRouteName="DrawerNav"
            navigationOptions={{
              gesturesEnabled: false,
            }}
            screenOptions={{
              headerShown: false,
            }}>
            <Stack.Screen name="Login" component={AstroLogin} />
            <Stack.Screen name="SignUp" component={AstroSignUp} />
            <Stack.Screen name="ForgotPassword" component={AstroForgotPass} />
            <Stack.Screen name="Home" component={DrawerNav} />
          </Stack.Navigator>
        </NavigationContainer>
      </Root>
      {/* <Root>
        <NavigationContainer
          ref={r => {
            Navigation.setTopLevelNavigator(r);
          }}>
          <Tab.Navigator
            initialRouteName="DrawerNav"
            navigationOptions={{
              gesturesEnabled: false,
            }}
            screenOptions={{tabBarVisible: true}}
            tabBarOptions={{
              showLabel: false,
              style: {
                backgroundColor: '#fff',
                position: 'absolute',
                height: 80,
              },
            }}>
            <Tab.Screen
              name="Login"
              component={DrawerNav}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="login"
                      type="AntDesign"
                      style={{
                        fontSize: 22,
                        color: focused ? '#E84A56' : 'black',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: focused ? '#E84A56' : 'black',
                      }}>
                      Login
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Home"
              component={HomeRoute}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="home"
                      type="AntDesign"
                      style={{
                        fontSize: 22,
                        color: focused ? '#E84A56' : 'black',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: focused ? '#E84A56' : 'black',
                      }}>
                      Home
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Service"
              component={AstroService}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="swatchbook"
                      type="FontAwesome5"
                      style={{
                        fontSize: 22,
                        color: focused ? '#E84A56' : 'black',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: focused ? '#E84A56' : 'black',
                      }}>
                      Services
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Products"
              component={AstroProducts}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="CodeSandbox"
                      type="AntDesign"
                      style={{
                        fontSize: 22,
                        color: focused ? '#E84A56' : 'black',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: focused ? '#E84A56' : 'black',
                      }}>
                      Products
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Messages"
              component={AstroMessage}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="message1"
                      type="AntDesign"
                      style={{
                        fontSize: 22,
                        color: focused ? '#E84A56' : 'black',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: focused ? '#E84A56' : 'black',
                      }}>
                      Message
                    </Text>
                  </View>
                ),
              }}
            />
            <Tab.Screen
              name="Profile"
              component={AstroProfile}
              options={{
                tabBarIcon: ({focused}) => (
                  <View
                    style={{justifyContent: 'center', alignItems: 'center'}}>
                    <Icon
                      name="account-circle-outline"
                      type="MaterialCommunityIcons"
                      style={{
                        fontSize: 22,
                        color: focused ? '#E84A56' : 'black',
                      }}
                    />
                    <Text
                      style={{
                        fontSize: 12,
                        color: focused ? '#E84A56' : 'black',
                      }}>
                      Profile
                    </Text>
                  </View>
                ),
              }}
            />
          </Tab.Navigator>
        </NavigationContainer>
      </Root> */}
    </>
  );
};

export default Astrophy;

const styles = StyleSheet.create({});
