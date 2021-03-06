import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';

class Page1 extends Component<{}> {
  static navigationOptions = {
    tabBarLabel: 'Page1',
    tabBarIcon: ({tintColor}) => (
      <Image
        source={require('../Images/page1.png')}
        style={{tintColor: tintColor, width: 25, height:25}}
      ></Image>
    ),
  };

  onPress = () => {
    var { navigate } = this.props.navigation;
    navigate('Detail', {user : "haha"});
  }

  render(){
    return(
      <View style={styles.container}>
        <TouchableOpacity style={styles.btn} onPress={this.onPress}>
          <Text style={styles.fontStyle}>点击跳转下一页</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

var styles = StyleSheet.create({
  container : {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFEFD5",
    flexDirection: "row",
  },
  fontStyle : {
    fontSize: 20,
  },
  btn : {
    width : 150,
    height : 50,
    borderWidth : 2,
    borderRadius : 4,
    borderColor : "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFE4E1"
  }
});


module.exports = Page1;
