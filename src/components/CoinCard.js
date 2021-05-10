import React, { Component } from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
// import { images} from './CoinIcon';

const CoinCard = ({ symbol, name, priceUsd, changePercent24Hr}) => {
  return (
    <View style={styles.container} >
        {/* <Image
          source={{uri: images[symbol]}}
          style={styles.image}
          /> */}
        <Text style={styles.circle}>{symbol}</Text>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.bold} >$
          <Text style={styles.price} >{priceUsd}</Text>
        </Text>
        <Text style={changePercent24Hr < 0 ? styles.percentNeg : styles.percentPos} > {changePercent24Hr}</Text>
    </View>
  )
}

export default CoinCard;

const styles =  StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection:'row',
    marginBottom: 0,
    borderTopColor: '#e5e5e5',
    borderTopWidth: 2,
    padding: 10,
  },
  image: {
    height: 20,
    width: 20,
    borderRadius: 500
  },
  circle:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:40,
    height:40,
    backgroundColor:'#fff',
    borderRadius:50,
  },
  name: {
    marginTop: 0,
    marginRight: 20,
    marginLeft: 5,
  },
  price: {
    marginTop: 10,
    marginRight: 10,
    marginLeft: 'auto',
    fontWeight: 'bold'
  },
  percentNeg: {
    fontWeight: 'bold',
    color: '#dd2c00',
    marginLeft: 5
  },
  percentPos: {
    fontWeight: 'bold',
    color: '#00bfa5',
    marginLeft: 5
  }
})
