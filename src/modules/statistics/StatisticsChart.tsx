// @ts-nocheck -> Experimental Feature, will probably be changed to victorychart
import React, { MutableRefObject, useRef, useState } from 'react';
import { LineChart } from 'react-native-svg-charts';
import Svg, { Defs, LinearGradient, Path, Rect, Stop } from 'react-native-svg';
import { View, Text, PanResponder, Dimensions, StyleSheet } from 'react-native';

import { colors } from '../../styles';
import { IPurchase } from '../../@types/PurchaseStorage.d';
import { extractDate, extractTotal } from '../../helpers/extractor';

type props = {
  purchases: IPurchase[],
};
// @ts-ignore
export default function StatisticsChart(props: props) {
  let purchases = props.purchases;
  const dates = extractDate(purchases);
  const totals = extractTotal(purchases);

  const apx = (size = 0) => {
    let width = Dimensions.get('window').width;
    return (width / 750) * size;
  };

  const [dateList, setDateList] = useState(dates);
  const [priceList, setPriceList] = useState(totals);
  const size: MutableRefObject<number> = useRef(dateList.length);
  const totalChartWidth = apx(750);

  const [positionX, setPositionX] = useState(-1); // The currently selected X coordinate position

  const panResponder = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: (evt, gestureState) => true,
      onStartShouldSetPanResponderCapture: (evt, gestureState) => true,
      onMoveShouldSetPanResponder: (evt, gestureState) => true,
      onMoveShouldSetPanResponderCapture: (evt, gestureState) => true,
      onPanResponderTerminationRequest: (evt, gestureState) => true,

      onPanResponderGrant: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderMove: (evt, gestureState) => {
        updatePosition(evt.nativeEvent.locationX);
        return true;
      },
      onPanResponderRelease: () => {
        setPositionX(-1);
      },
    }),
  );

  const updatePosition = (x: number) => {
    const YAxisWidth = apx(0);
    const x0 = apx(0); // x0 position
    const chartWidth = totalChartWidth - YAxisWidth - x0;
    const xN = x0 + chartWidth; //xN position
    const xDistance = chartWidth / size.current; // The width of each coordinate point
    if (x <= x0) {
      x = x0;
    }
    if (x >= xN) {
      x = xN;
    }
    let value: number = parseInt(((x - x0) / xDistance).toFixed(0));
    if (value >= size.current - 1) {
      value = size.current - 1; // Out of chart range, automatic correction
    }

    setPositionX(Number(value));
  };

  const CustomLine = ({ line }: { line: any }) => (
    <Path key="line" d={line} stroke="white" strokeWidth={apx(6)} fill="none" />
  );

  // @ts-ignore
  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" y1="0%" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#FEBE18" stopOpacity={0} />
        <Stop offset="100%" stopColor="#FEBE18" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  const verticalContentInset = {
    top: apx(40),
    bottom: apx(40),
    left: apx(60),
    right: apx(30),
  };

  return (
    <View
      style={{
        width: '100%',
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          paddingHorizontal: 20,
          width: '100%',
          height: apx(500),
        }}
      >
        <View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
          <LineChart
            style={{ flex: 1 }}
            data={priceList}
            contentInset={{ ...verticalContentInset }}
            svg={{ fill: 'url(#gradient)' }}
          >
            <CustomLine line={undefined} />
            <Svg belowChart={true}>
              <View
                style={{
                  height: apx(440),
                  flex: 0,
                  flexDirection: 'column',
                  paddingLeft: 5,
                }}
              >
                <Text style={styles.graphLetter}>A</Text>
                <Text style={styles.graphLetter}>B</Text>
                <Text style={styles.graphLetter}>C</Text>
                <Text style={styles.graphLetter}>D</Text>
                <Text style={styles.graphLetter}>E</Text>
              </View>
            </Svg>

            <Svg belowChart={true}>
              <Rect
                x="0"
                y="0"
                width="100%"
                height="20%"
                fill={colors.nutriScore_A}
              />
              <Rect
                x="0"
                y="20%"
                width="100%"
                height="20%"
                fill={colors.nutriScore_B}
              />
              <Rect
                x="0"
                y="40%"
                width="100%"
                height="20%"
                fill={colors.nutriScore_C}
              />
              <Rect
                x="0"
                y="60%"
                width="100%"
                height="20%"
                fill={colors.nutriScore_D}
              />
              <Rect
                x="0"
                y="80%"
                width="100%"
                height="20%"
                fill={colors.nutriScore_E}
              />
            </Svg>
            <CustomGradient />
          </LineChart>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  graphLetter: {
    flexBasis: '20%',
    height: 50,
    paddingTop: 10,
    marginLeft: 5,
    color: 'white',
  },
});
