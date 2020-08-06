/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}>
            <View style={styles.container}>
              <Image 
                source={require('./images/KakaoTalk_Photo_2020-08-06-17-02-16.jpeg')} 
                style={{width: 200, height: 200}}  
                resizeMode="cover"
                resizeMethod="auto"
              />
              <Text style={styles.nameTitle}>서동우</Text>
              <Text style={styles.content}>열심히 해서 얻어가는 것이 많은 시간을 갖도록 해요.</Text>
            </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.white,
  },
  container: {
    alignItems: 'center',
  },
  nameTitle: {
    fontSize: 20,
    marginTop: 10,
    lineHeight: 22,
  },
  content: {
    fontSize: 15,
    marginTop: 10,
    lineHeight: 17,
  }
});

export default App;
