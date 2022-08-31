import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';

import { Button } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';
import { colors } from '../../styles';

const logoutIcon = require('../../../assets/images/icons/logout.png');

const Stack = createStackNavigator();

// Not working due to AutoID Labs deleting the user
function fetchBackendData() {
  const requestOptions = {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  };
  try {
    fetch(
      'https://api.interactions.ics.unisg.ch/foodcoach/backend/user/basket/4720bb8046d499bb7437cd8ca7993f21',
      requestOptions,
    )
      .then(res => res.json())
      .then(res => {
        console.log(res.results.bindings);
      });
  } catch (error) {
    console.error(error);
  }
}

function logOut() {
  auth().signOut();
}

function ProfilePage(props: {
  navigation: {
    navigate: (arg0: string) => void,
    push: (arg0: string) => void,
  },
}) {
  return (
    <View style={styles.container}>
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity style={styles.settings} onPress={logOut}>
            <Image
              resizeMode="contain"
              source={logoutIcon}
              style={styles.settingsImage}
            />
            <Text style={styles.logoutText}>Log out</Text>
          </TouchableOpacity>
        </View>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://media.istockphoto.com/vectors/user-icon-flat-isolated-on-white-background-user-symbol-vector-vector-id1300845620?k=20&m=1300845620&s=612x612&w=0&h=f4XTZDAv7NPuZbG0habSpU0sNgECM0X7nbKzTUta3n8=',
          }}
        />
        <View style={styles.body}>
          <View style={styles.bodyContent}>
            <Text style={styles.name}>John Doe</Text>

            <Button
              style={styles.buttonContainer}
              onPress={() => props.navigation.navigate('Statistik')}
            >
              <Text>Statistik</Text>
            </Button>
            <Button
              style={styles.buttonContainer}
              onPress={() => props.navigation.navigate('Verlauf')}
            >
              <Text>Verlauf</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen(props: any) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  row: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  item: {
    flex: 1,
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  header: {
    backgroundColor: colors.primary,
    height: 200,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignContent: 'flex-end',
  },
  avatar: {
    width: 130,
    height: 130,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: 'white',
    marginBottom: 10,
    alignSelf: 'center',
    position: 'absolute',
    marginTop: 130,
  },
  body: {
    marginTop: 40,
  },
  bodyContent: {
    flex: 1,
    alignItems: 'center',
    padding: 30,
  },
  name: {
    fontSize: 28,
    color: colors.black,
    fontWeight: '600',
  },
  buttonContainer: {
    marginTop: 10,
    height: 45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    width: 250,
    borderRadius: 30,
    backgroundColor: colors.primary,
  },
  settings: {
    alignItems: 'center',
    marginHorizontal: 15,
    marginVertical: 15,
    height: 35,
    width: 45,
  },
  settingsImage: {
    height: 35,
  },
  logoutText: {
    fontSize: 12,
  },
});
