import React, { Component } from 'react'
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import YelpApi from 'v3-yelp-api'
import config from '../../config.js'

export default class PrimarySearch extends Component {
  state = {
    position: 'unknown'
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      (position) => {
        this.setState({position})
      },
      (error) => alert(error),
      {enableHighAccuracy: true, timeout:2000, maximumAge: 1000}
    )
  }

  // appId: fRjp6PGkhFCRpGn_hfpTNg
  // appSecret: RUlGs3oR9m7dlEp0iTWmtlYXGqhyLdAtBU8DKAhG19exCwhJZSbqaUBEjC8DMRgJ
  //
  // "access_token": "VmBEfhEEDZl3haVkpEEkJ5WR4DPLfa4NM8OMe1ybqO1d9g0w03ncwcZ8QBfbpZzOFrEnmOnTU6mU_Zt4e_GEBR_ehpjhr8xFE_3heEzTVVpbY2bKdStmYvMlXrAkWXYx",
  // "expires_in": 15551999,
  // "token_type": "Bearer"
  //

  getData() {
    const credentials = {
      appId: config.consumer_key,
      appSecret: config.consumer_secret
    }
    const yelp = new YelpApi(credentials)

    let lat = this.state.position.coords.latitude
    let lng = this.state.position.coords.longitude
    let latlng = String(lat) + ',' + String(lng)
    let params = {
      term: 'sushi',
      location: latlng,
      limit: '30'
    }
    let nav = this.props.navigator

    return yelp.search(params)
      .then((searchResults) => {
        console.log("searchResults:::::", searchResults)
        nav.push({
          ident: "Results",
          data: searchResults
        })
      })
      .catch(err => err)
  }

  render() {
    return (
      <View style={styles.container}>
        <Image source={require('../../images/SUSHICRAZY.png')} style={{height: 300, width: 300}} />
        <TouchableOpacity style={{borderRadius: 7, padding: 10, backgroundColor: 'rgb(139, 33, 61)'}}
          onPress={this.getData.bind(this)}>
            <Text style={{fontSize: 15, color: 'white'}}> Get Your Roll</Text>
          </TouchableOpacity>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent'
  },
  welcome: {
   fontSize: 20,
   textAlign: 'center',
   margin: 10,
 },
 instructions: {
   textAlign: 'center',
   color: '#333333',
   marginBottom: 5,
 },
})
