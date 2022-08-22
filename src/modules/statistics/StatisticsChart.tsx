import Svg, {
  Circle,
  Defs,
  G,
  LinearGradient,
  Path,
  Rect,
  Stop,
  Text as SvgText,
} from 'react-native-svg';
import { colors } from '../../styles';
import React, { MutableRefObject, useRef, useState } from 'react';
import { LineChart, XAxis } from 'react-native-svg-charts';
import { View, Text, PanResponder, Dimensions, StyleSheet } from 'react-native';
import { IPurchase } from '../../@types/PurchaseStorage.d';
import { extractDate, extractTotal } from '../../helpers/extractor';

type props = {
  purchases: IPurchase[]
}
export default function StatisticsChart(props:props) {

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
  const totalChartHeight = apx(750 / 2);

  const Decorator = ({ x, y, data }: { x: any, y: any, data: any }) => {
    return data.map((value: any, index: React.Key | null | undefined) => (
      <Circle
        key={index}
        cx={x(index)}
        cy={y(value)}
        r={4}
        stroke={'rgb(134, 65, 244)'}
        fill={'white'}
      />
    ));
  };

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
    const YAxisWidth = apx(0); // HERE
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

    // console.log((x - x0) )

    // The selected coordinate x :
    // (x - x0)/ xDistance = value
    let value: number = parseInt(((x - x0) / xDistance).toFixed(0));
    if (value >= size.current - 1) {
      value = size.current - 1; // Out of chart range, automatic correction
    }

    setPositionX(Number(value));
  };

  // const CustomGrid = ({ x, y, ticks }) => (
  //   <G>
  //     {// Horizontal grid
  //     ticks.map((tick: React.Key | null | undefined) => (
  //       <Line
  //         key={tick}
  //         x1="0%"
  //         x2="100%"
  //         y1={y(tick)}
  //         y2={y(tick)}
  //         stroke="#EEF3F6"
  //       />
  //     ))}
  //     {// Vertical grid
  //     priceList.map((_, index) => (
  //       <Line
  //         key={index.toString()}
  //         y1="0%"
  //         y2="100%"
  //         x1={x(index)}
  //         x2={x(index)}
  //         stroke="#EEF3F6"
  //       />
  //     ))}
  //   </G>
  // );

  const CustomLine = ({ line }: { line: any }) => (
    <Path key="line" d={line} stroke="white" strokeWidth={apx(6)} fill="none" />
  );

  // @ts-ignore
  const CustomGradient = () => (
    <Defs key="gradient">
      <LinearGradient id="gradient" x1="0" y="0%" x2="0%" y2="100%">
        <Stop offset="0%" stopColor="#FEBE18" stopOpacity={0} />
        <Stop offset="100%" stopColor="#FEBE18" stopOpacity={0} />
      </LinearGradient>
    </Defs>
  );

  const Tooltip = ({ x, y, ticks }: { x: any, y: any, ticks: any }) => {
    if (positionX < 0) {
      return null;
    }

    const date = dateList[positionX];

    return (
      <G x={x(positionX)} key="tooltip">
        <G
          x={positionX > size.current / 2 ? -apx(300 + 10) : apx(10)}
          y={y(priceList[positionX]) - apx(10)}
        >
          <Rect
            y={-apx(24 + 24 + 20) / 2}
            rx={apx(12)} // borderRadius
            ry={apx(12)} // borderRadius
            width={apx(300)}
            height={apx(96)}
            stroke="rgba(254, 190, 24, 0.27)"
            fill="rgba(255, 255, 255, 0.8)"
          />

          <SvgText x={apx(20)} fill="#617485" opacity={0.65} fontSize={apx(24)}>
            Datum: {date}
          </SvgText>
          <SvgText
            x={apx(20)}
            y={apx(24 + 20)}
            fontSize={apx(24)}
            fontWeight="bold"
            fill="#617485"
          >
            Nutriscore: {parseFloat(priceList[positionX]).toFixed(2)}
          </SvgText>
          
        </G>

        {/* <G x={x}>
          <Circle
            cy={y(priceList[positionX])}
            r={apx(20 / 2)}
            stroke="#fff"
            strokeWidth={apx(2)}
            fill="#FEBE18"
          />
        </G> */}
      </G>
    );
  };

  const verticalContentInset = {
    top: apx(40),
    bottom: apx(40),
    left: apx(60),
    right: apx(30),
  };

  const data = [
    { value: 50, label: 'A', date: '08-31 15:09' },
    { value: 150, labe: 'B', date: '08-31 15:10' },
  ];

  return (
    <View
      style={{
        // backgroundColor: '#fff',
        // alignItems: 'stretch',
        // borderRadius: 10,
        width: '100%',
        // borderWidth: 2,
      }}
    >
      <View
        style={{
          flexDirection: 'row',
          // alignSelf:'center',
          // alignContent: 'center',
          // alignItems: 'center',
          // justifyContent: 'center',
          paddingHorizontal: 20,
          width: '100%',
          // backgroundColor: colors.secondary,
          height: apx(500),
          // alignSelf: 'center',
        }}
      >
        <View style={{ flex: 1 }} {...panResponder.current.panHandlers}>
          <LineChart
            style={{ flex: 1 }}
            data={priceList}
            // curve={shape.curveNatural}
            // curve={shape.curveMonotoneX}
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
            {/* <CustomGrid /> */}
            <CustomGradient />
            {/* <Tooltip x={undefined} y={undefined} ticks={undefined} /> */}
            {/* <Decorator x={undefined} y={undefined} data={undefined} /> */}
          </LineChart>
        </View>

        {/* <YAxis
          style={{ width: apx(130) }}
          data={priceList}
          contentInset={verticalContentInset}
          svg={{ fontSize: apx(20), fill: '#617485' }}
        /> */}
      </View>
      {/* <XAxis
        style={{
          alignSelf: 'stretch',
          // marginTop: apx(57),
          width: apx(750),
          height: apx(60),
        }}
        data={priceList}
        formatLabel={(value: number, index: number) => dateList[value]}
        contentInset={{
          left: apx(126),
          right: apx(126),
        }}
        svg={{
          fontSize: apx(20),
          fill: '#617485',
          y: apx(0),
          // originY: 30,
        }}
      /> */}
    </View>
  );
};


const styles = StyleSheet.create({
  graphLetter: {
    flexBasis: '20%',
    height: 50,
    paddingTop: 10,
    marginLeft: 5,
    color: 'white',
  },
});
