import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from ' react-native';
import Sound from 'react-native-sound';

export default class MainView extends Component {
  render() {
    return (
      <View style={styles.container}>
             <TouchableOpacity onPress={this.playSound}>
               <Text style={styles.button}>play</Text>
             </TouchableOpacity>
      </View>
    );
  }

  playSound() {
    var s = new Sound('advertising.mp3', Sound.MAIN_BUNDLE, (e) => {
      if (e) {
        console.log('error', e);
      } else {
        console.log('duration', s.getDuration());
        s.play();
      }
    });

    s.play((success) => {
      if (success) {
        console.log('successfully finished playing');
      } else {
        console.log('playback failed due to audio decoding errors');
      }
    });
  }
}

var styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    fontSize: 20,
    backgroundColor: 'silver',
    padding: 5,
  },
});