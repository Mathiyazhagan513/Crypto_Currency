import React, { Component } from 'react';
import { StyleSheet, View, ScrollView } from 'react-native';
import { connect } from 'react-redux';
import Spinner from 'react-native-loading-spinner-overlay';
import fetchCoinData from '../actions/fetchCoinData';
import GlobalDetail from '../components/GlobalDetail';

class GlobalDetail extends Component {
  componentDidMount() {
    this.props.fetchCoinData();
  }

  renderCoinCard() {
    console.log('this', this)
    return this.props.crypto.data.map((coin, index) => {
      console.log(coin)
      return (
        <GlobalDetail
          key={index}
          marketCapUsd={coin.marketCapUsd}
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

export default connect(mapStateToProps, { fetchCoinData })(GlobalDetail);


const styles = {
  container: {
    marginBottom: 5
  }
}