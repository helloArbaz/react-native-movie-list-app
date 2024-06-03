import React, { Component, PureComponent } from 'react';
import { ActivityIndicator, Text, View } from 'react-native';
import HeaderStyle from '../Header/HeaderStyle';
import LoadingStyle from './LoadingStyle';
import { Colors } from 'react-native/Libraries/NewAppScreen';

class Loading extends PureComponent {
    render() {
        return (
            <View style={LoadingStyle.container}>
              <ActivityIndicator size="large" color="#F0283C" />
            </View>
        );
    }
}

export default Loading;