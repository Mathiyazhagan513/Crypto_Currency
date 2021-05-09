import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class Header extends React.Component {
  render() {
    return (
      <View style={styles.header}>
      <Icon name="navicon" size={25} color="#575550" />
      <Text style={styles.headerTitle} >Prices</Text> 
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {
    flexDirection:'row',
    alignItems: 'center',
    marginTop: 10,
    marginLeft: 10
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 120
  }
});
