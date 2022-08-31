import React, { useState, useEffect } from 'react';
import { StyleSheet, View } from 'react-native';
import { VictoryPie } from 'victory-native';

import { CategoriesColor } from './Categories';

const wantedGraphicData = [
  { y: 10, label: 'Öle' },
  { y: 50, label: 'Getreide' },
  { y: 30, label: 'Fast Food' },
  { y: 5, label: 'Früchte' },
  { y: 6, label: 'Gemüse' },
  { y: 50, label: 'Süssigkeiten' },
  { y: 30, label: 'Milchprodukte' },
]; // Data that we want to display
const defaultGraphicData = [
  { y: 0 },
  { y: 0 },
  { y: 0 },
  { y: 0 },
  { y: 0 },
  { y: 0 },
  { y: 100 },
]; // Data used to make the animate prop work

function StatisticsPieChart() {
  const [graphicData, setGraphicData] = useState(defaultGraphicData);

  useEffect(() => {
    setGraphicData(wantedGraphicData); // Setting the data that we want to display
  }, []);

  return (
    <View style={styles.container}>
      <VictoryPie
        style={{ labels: { display: 'none' } }}
        animate={{ easing: 'exp' }}
        data={graphicData}
        width={250}
        height={210}
        colorScale={Object.values(CategoriesColor)}
        innerRadius={50}
        radius={100}
        // labelPosition={'centroid'}
        labels={() => null}
        events={[
          {
            target: 'data',
            eventHandlers: {
              onClick: () => {
                return [
                  {
                    target: 'data',
                    mutation: ({ style }) => {
                      return style.fill === '#c43a31'
                        ? null
                        : { style: { fill: '#c43a31' } };
                    },
                  },
                  {
                    target: 'labels',
                    mutation: ({ text }) => {
                      return text === 'clicked' ? null : { text: 'clicked' };
                    },
                  },
                ];
              },
            },
          },
        ]}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignSelf: 'center',
  },
});

export default StatisticsPieChart;
