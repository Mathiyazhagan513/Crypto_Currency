import React from 'react';
import { Text, View } from 'react-native';


const GlobalDetail = ({marketCapUsd}) => {
  return (
    <View
      style={styles.headerContentLeftStyle}
    >
      <Text style={styles.textStyle} > ^ Global Market Cap:
          <Text style={styles.textStyle} >${marketCapUsd}</Text>
        </Text>
    </View>
  );
};

const styles = {
  headerContentLeftStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    margin: 5,
  },
  textStyle: {
    justifyContent: 'center',
    color: 'white',
    fontSize: 16,
    marginBottom: 10,
  },

};
export default GlobalDetail;