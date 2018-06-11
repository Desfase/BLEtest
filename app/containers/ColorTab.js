import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions
} from "react-native";
import { ColorWheel } from "react-native-color-wheel";
import { PrefabPicker } from "../components/PrefabPicker";

export class ColorTab extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentColor: ""
    };
  }

  onPress = () => {
    console.log("ColorTab");
  };
  render() {
    return (
      <View style={styles.centerContainer}>
        <View style={styles.centerContainer}>
          <ColorWheel
            initialColor="#ff0000"
            onColorChange={color => this.setState({currentColor: color })}
            style={styles.wheelStyle}
            thumbStyle={styles.thumb}
          />
        </View>
        <View style={styles.centerContainer}>
          <PrefabPicker color = {this.state.currentColor} />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  centerContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  wheelStyle: {
    width: Dimensions.get("window").width / 1.25,
    marginTop: 25
  },
  thumb: {
    height: 30,
    width: 30,
    borderRadius: 10
  }
});
