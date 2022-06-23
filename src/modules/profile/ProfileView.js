import React from 'react';
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Image,
  Alert,
} from 'react-native';
import auth from '@react-native-firebase/auth';
import functions from '@react-native-firebase/functions';

import { Button } from 'react-native-ui-lib';
import { createStackNavigator } from '@react-navigation/stack';
import { colors, fonts } from '../../styles';
import MultiStepSignUpSurvey from '../survey/MultiStepSignUpSurvey';

let user = auth().currentUser;

const chartIcon = require('../../../assets/images/pages/chart.png');
const historyIcon = require('../../../assets/images/pages/history.png');
const loginIcon = require('../../../assets/images/pages/login.png');
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

function updateData() {
  try {
    const text = functions().httpsCallable('getCumulusData');
    console.log(user.uid);
    text({uid: user.uid}).then(result => {
      console.log(result);
    });
  } catch (error) {
    console.log(error);
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
            {/* <Text style={styles.info}>UX Designer / Mobile developer</Text>
        <Text style={styles.description}>
          Lorem ipsum dolor sit amet, saepe sapientem eu nam. Qui ne assum
          electram expetendis, omittam deseruisse consequuntur ius an,
        </Text> */}

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
            <Button style={styles.buttonContainer} onPress={updateData}>
              <Text>Update data</Text>
            </Button>
          </View>
        </View>
      </View>
      {/* <View style={styles.row}>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('Statistics')}
      style={styles.item}
    >
      <Image
        resizeMode="contain"
        source={chartIcon}
        style={styles.itemImage}
      />
      <Text style={styles.itemText}>Statistik</Text>
    </TouchableOpacity>
    <TouchableOpacity
      onPress={() => props.navigation.navigate('History')}
      style={styles.item}
    >
      <Image
        resizeMode="contain"
        source={historyIcon}
        style={styles.itemImage}
      />
      <Text style={styles.itemText}>Verlauf</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={logOut} style={styles.item}>
      <Image
        resizeMode="contain"
        source={loginIcon}
        tintColor={colors.primary}
        style={styles.itemImage}
      />
      <Text style={styles.itemText}>Logout</Text>
    </TouchableOpacity>
  </View> */}
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
    // paddingTop: 10,
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
  blogItem: {
    width: '31%',
    height: 120,
    paddingVertical: 20,
    borderColor: colors.primaryLight,
    borderWidth: 1,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'space-around',
    marginHorizontal: 5,
  },
  itemText: {
    color: colors.primary,
    fontFamily: fonts.primary,
  },
  itemImage: {
    height: 35,
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
  info: {
    fontSize: 16,
    color: '#00BFFF',
    marginTop: 10,
  },
  description: {
    fontSize: 16,
    color: '#696969',
    marginTop: 10,
    textAlign: 'center',
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
    // flex: 1,
    // height: 120,
    // paddingVertical: 20,
    // borderColor: colors.primaryLight,
    // backgroundColor: colors.blue,
    // borderWidth: 1,
    // borderRadius: 5,
    alignItems: 'center',
    // justifyContent: 'flex-end',
    marginHorizontal: 15,
    marginVertical: 15,
    height: 35,
    width: 45,
    // width: 20,
    // flexWrap: 'wrap'
  },
  settingsImage: {
    height: 35,
  },
  logoutText: {
    fontSize: 12,
  },
});
