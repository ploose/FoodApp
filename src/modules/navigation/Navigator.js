import * as React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import {
  createDrawerNavigator,
  DrawerItem,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import { useState, useEffect } from 'react';
import auth from '@react-native-firebase/auth';

import { createStackNavigator } from '@react-navigation/stack';
import StackNavigationDataNotAuth from './stackNavigationDataNotAuth';
import BottomTabs from './MainTabNavigator';

const iconHome = require('../../../assets/images/drawer/home.png');
const iconHistory = require('../../../assets/images/drawer/history.png');
const iconGrids = require('../../../assets/images/drawer/grids.png');
const iconProfile = require('../../../assets/images/drawer/profile.png');
const iconSettings = require('../../../assets/images/drawer/settings.png');
const iconBlog = require('../../../assets/images/drawer/blog.png');

const drawerData = [
  {
    name: 'Home',
    icon: iconHome,
  },
  {
    name: 'History',
    icon: iconHistory,
  },
  {
    name: 'Grids',
    icon: iconGrids,
  },
  {
    name: 'Profile',
    icon: iconProfile,
  },
];

const RootStackScreen = ({ user }) =>
  !user ? (
    <Stack.Navigator initialRouteName="StartScreen">
      {StackNavigationDataNotAuth.map((item, idx) => (
        <Stack.Screen
          key={`stack_item-${idx + 1}`}
          name={item.name}
          component={item.component}
          options={{
            headerBackground: () => (
              <Image
                style={styles.headerImage}
                source={item.headerBackground.source}
              />
            ),
            headerTitleStyle: item.headerTitleStyle,
            headerShown: false,
          }}
        />
      ))}
    </Stack.Navigator>
  ) : (
    <BottomTabs/>
  );

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props} style={{ padding: 0 }}>
      <View style={styles.avatarContainer}>
        <Image
          style={styles.avatar}
          source={require('../../../assets/images/drawer/user.png')}
        />
        <View style={{ paddingLeft: 15 }}>
          <Text style={styles.userName}>John Doe</Text>
          <Text style={{ color: '#4BC1FD' }}>Johndoe@gmail.com</Text>
        </View>
      </View>
      <View style={styles.divider} />
      {drawerData.map((item, idx) => (
        <DrawerItem
          key={`drawer_item-${idx + 1}`}
          label={() => (
            <View style={styles.menuLabelFlex}>
              <Image style={{ width: 20, height: 20 }} source={item.icon} />
              <Text style={styles.menuTitle}>{item.name}</Text>
            </View>
          )}
          onPress={() => props.navigation.navigate(item.name)}
        />
      ))}
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image style={{ width: 20, height: 20 }} source={iconBlog} />
            <Text style={styles.menuTitle}>Blog</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('Blog')}
      />
      <View style={styles.divider} />
      <DrawerItem
        label={() => (
          <View style={styles.menuLabelFlex}>
            <Image style={{ width: 20, height: 20 }} source={iconSettings} />
            <Text style={styles.menuTitle}>Settings</Text>
          </View>
        )}
        onPress={() => props.navigation.navigate('History')}
      />
    </DrawerContentScrollView>
  );
}
const user = false;
export default function Navigator() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();

  function onAuthStateChanged(user) {
    setUser(user);
    console.log('User!', user);
    if (initializing) setInitializing(false);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  console.log('This is called', user);

  return <RootStackScreen user={user} />;
}

const styles = StyleSheet.create({
  menuTitle: {
    marginLeft: 10,
    color: '#fff',
  },
  menuLabelFlex: {
    display: 'flex',
    flexDirection: 'row',
  },
  userName: {
    color: '#fff',
    fontSize: 18,
  },
  divider: {
    borderBottomColor: 'white',
    opacity: 0.2,
    borderBottomWidth: 1,
    margin: 15,
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  avatarContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    margin: 20,
    marginBottom: 10,
  },
});
