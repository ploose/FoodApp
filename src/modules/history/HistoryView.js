/* eslint-disable class-methods-use-this */
import React from "react";
import {
  StyleSheet,
  View,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { useState } from "react";
import { SwipeablePanel } from "rn-swipeable-panel";

import { Purchase } from "../../components";

import { colors, fonts } from "../../styles";
import { Button } from "react-native-ui-lib";
import PurchaseDetails from "../../components/foodtracking/PurchaseDetails";
import moment from "moment";

const chartIcon = require("../../../assets/images/pages/chart.png");
const historyIcon = require("../../../assets/images/pages/history.png");
const chatIcon = require("../../../assets/images/pages/chat.png");
const galleryIcon = require("../../../assets/images/pages/gallery.png");
const profileIcon = require("../../../assets/images/pages/profile.png");
const loginIcon = require("../../../assets/images/pages/login.png");
const blogIcon = require("../../../assets/images/pages/blog.png");

function custom_sort(b, a) {
  return new moment(a.date, "DD/MM/YYYY").toDate().getTime() - moment(b.date, "DD/MM/YYYY").toDate().getTime();
}

function getPurchases() {
  // const options = {
  //   method: 'GET',
  // };
  // return fetch('http://10.0.2.2:5000/getData')
  //   .then(response => response.json())
  //   .then(json => {
  //     return console.log(json);
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });
  const jsonFile = require("./data.json");
  let myArray = [];
  for (element in jsonFile){
    jsonFile[element].id = element
    myArray.push(jsonFile[element])
  }
  myArray.sort(custom_sort);


  console.log(myArray);
  return myArray


}

function HistoryPage(props) {

  let purchases = getPurchases();
  console.log(purchases);

  const [entries, setEntries] = useState([
    {
      id: 1,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 2,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "A",
      date: "20.03.2022",
    },
    {
      id: 3,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 4,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 5,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 6,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 7,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 8,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 9,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
    {
      id: 10,
      name: "Migros Lachen",
      cost: "CHF 23.30",
      score: "D",
      date: "20.03.2022",
    },
  ]);
  let [SwipeablePanelActive, setSwipablePanelActive] = useState(true);

  openPanel = msg => {
    setSwipablePanelActive(true);
  };
  closePanel = () => {
    setSwipablePanelActive(false);
  };

  let abc = true;
  
  return (
    <View>
      {/* Change item.name in openpanel to pass the id which makes a db lookup */}
      <FlatList
        keyExtractor={item => item.time}
        data={purchases}
        renderItem={({ item }) => (
          // <TouchableOpacity onPress={() => this.openPanel(item.name)}>
          <TouchableOpacity onPress={() => props.navigation.navigate("PurchaseDetails", item)}>
            <View style={styles.purchaseView}>
              <Purchase
                name={item.store}
                date={item.date}
                cost={item.total}
                score={"A"}
              />
            </View>
          </TouchableOpacity>
        )}
      />

      {/* <SwipeablePanel
        fullWidth
        isActive={SwipeablePanelActive}
        onClose={this.closePanel}
        openLarge
        onPressCloseButton={this.closePanel}
      >
        <TouchableOpacity onPress={this.closePanel}>
          <Text style={styles.modalHeaderCloseText}>X</Text>
        </TouchableOpacity>
        <PurchaseDetails purchaseId={2} />
      </SwipeablePanel> */}
    </View>
  );
}

export default function HistoryScreen(props) {


  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HistoryPage"
        component={HistoryPage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PurchaseDetails"
        component={PurchaseDetails}
        options={{
          headerShown: true,
          title: 'Details',
          headerStyle: {
            backgroundColor: colors.primary,
          },
          headerTintColor: '#fff',
    
        }}
    
      />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingTop: 10,
  },
  sldiePanel: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },
  modalHeaderCloseText: {
    textAlign: "center",
    alignSelf: "flex-end",
    paddingLeft: 5,
    paddingRight: 15,
  },
  purchaseView: {
    padding: 8,
  },
});
