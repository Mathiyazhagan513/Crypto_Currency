import React from 'react';
import { Text, View } from 'react-native';
import { LinearGradient } from 'expo';

const GlobalDetail = ({total_market_cap_usd}) => {
  return (
    <View
      style={headerContentLeftStyle}
    >
      <Text style={styles.textStyle} > ^ Global Market Cap:
          <Text style={styles.textStyle} >${total_market_cap_usd}</Text>
        </Text>
    </View>
  );
};

const styles = {
  headerContentLeftStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    margin: 5,
  },
  textStyle: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 18,
    marginBottom: 20,
  },

};
export default GlobalDetail;