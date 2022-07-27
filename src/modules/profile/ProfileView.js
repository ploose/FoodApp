import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Image } from 'react-native';
import auth from '@react-native-firebase/auth';
import functions from '@react-native-firebase/functions';

import { Button } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, fonts } from '../../styles';
import MultiStepSignUpSurvey from '../survey/MultiStepSignUpSurvey';

let user = auth().currentUser;

const logoutIcon = require('../../../assets/images/icons/logout.png');

Stack = createStackNavigator();

function getCumulusData() {
  try {
    const text = functions().httpsCallable('testFunction');

    text().then(result => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

//TODO: Update data
function updateData() {
  try {
    const text = functions().httpsCallable('getCumulusData');
    console.log(user.uid);
    text({ uid: user.uid }).then(result => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
  }
}

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
  auth()
    .signOut()
    .then(() => console.log('User signed out!'));
}

function ProfilePage(props) {
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
          source={{ uri: 'https://bootdey.com/img/Content/avatar/avatar2.png' }}
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
            <Button
              style={styles.buttonContainer}
              onPress={() => props.navigation.push('SurveyStart')}
            >
              <Text>Fragebogen</Text>
            </Button>
            <Button style={styles.buttonContainer} onPress={fetchBackendData}>
              <Text>Update data</Text>
            </Button>
          </View>
        </View>
      </View>
    </View>
  );
}

export default function ProfileScreen(props) {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={ProfilePage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="SurveyStart"
        component={MultiStepSignUpSurvey}
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
