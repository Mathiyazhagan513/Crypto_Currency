import React, { Component } from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'

import fetchCoinData from '../actions/fetchCoinData'
import CoinCard from './CoinCard'

class CryptoContainer extends Component {
  componentWillMount() {
    this.props.fetchCoinData()
  }

  renderCoinCard() {
    console.log('this', this)
    return this.props.crypto.data.map((coin, index) => {
      console.log(coin)
      return (
        <CoinCard
          key={index}
          name={coin.name}
          symbol={coin.symbol}
          price_usd={coin.price_usd}
          percent_change_24h={coin.percent_change_24h}
          percent_change_7d={coin.percent_change_7d}
        />
      )
    })
  }

  render() {
    console.log('this2', this.props.crypto.isFetching)
    if(this.props.crypto.isFetching) {
      return (
        <View>
          <Spinner
            visible={crypto.isFetching}
            textContent={"Loading..."}
            textStyle={{color: '#253145'}}
            animation='fade'
          />
        </View>
      )
    } else {
      return (
        <ScrollView style={styles.container}>
          {this.renderCoinCard()}
        </ScrollView>
      )
    }
  }
}

function mapStateToProps(state) {
  return {
    crypto: state.crypto
  }
}

export default connect(mapStateToProps, { fetchCoinData })(CryptoContainer)


const styles = {
  container: {
    marginBottom: 50
  }
}