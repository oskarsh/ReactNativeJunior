import React, { Component } from 'react';
import { AppRegistry, Alert } from 'react-native';
import AppIntro from 'rn-falcon-app-intro';
 
export default class AppIntroSlider extends Component {
  onSkipBtnHandle = (index) => {
    Alert.alert('Skip');
    console.log(index);
  }
  doneBtnHandle = () => {
    this.props.navigation.navigate("App");
  }

  onSlideChangeHandle = (index, total) => {
    console.log(index, total);
  }
  render() {
    const pageArray = [{
      title: 'Hello Human',
      description: 'Let me show you around',
      img: require('../../Assets/flame-sign-up.png'),
      imgStyle: {
        height: 80 * 2.5,
        width: 109 * 2.5,
      },
      backgroundColor: '#02284f',
      fontColor: '#fff',
      level: 10,
    }, {
      title: 'Got Goals?',
      description: 'Reach your true potential',
      img: require('../../Assets/flame-searching.png'),
      imgStyle: {
        height: 93 * 2.5,
        width: 103 * 2.5,
      },
      backgroundColor: '#07406d',
      fontColor: '#fff',
      level: 10,
    }];
    return (
      <AppIntro
        onDoneBtnClick={this.doneBtnHandle}
        onSlideChange={this.onSlideChangeHandle}
        showSkipButton={false}
        pageArray={pageArray}
      />
    );
  }
}