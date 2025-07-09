import * as React from "react";
import {
  View,
  TouchableOpacity,
  ActivityIndicator,
  Dimensions,
  Alert,
} from "react-native";
import db from "../config";
import { Ionicons } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
import { FlashList } from "@shopify/flash-list";
import { Share } from "react-native";
import { Video } from "expo-av";

export default class VideoStatusScreen extends React.Component {
  constructor(props) {
    super(props);
    this.requestRef = null;
    this.state = {
      products: [],
    };
  }

  shuffleDeck = (array) => {
    let i = array.length - 1;
    for (; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  };
  getProducts = async () => {
    this.setState({ products: [] });
    this.requestRef = db
      .collection("Videos")
      .onSnapshot((snapshot) => {
        var data = snapshot.docs.map((doc) => doc.data());
        this.setState({
          products: data,
        });
      });
  };

  componentDidMount() {
    this.getProducts();
  }

  componentWillUnmount() {
    this.requestRef();
  }
  keyExtractor = (item, index) => index.toString();

  renderItem = ({ item, i }) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "black",
          justifyContent: "center",
        }}
      >
        <Video
          style={{
            width: Dimensions.get("window").width,
            height: Dimensions.get("window").height,
          }}
          useNativeControls
          resizeMode="contain"
          isLooping
          source={{ uri: item.video }}
        />
        <TouchableOpacity
          style={{
            borderRadius: 17,
            justifyContent: "center",
            marginRight: "10%",
            width: 40,
            height: 40,
            alignItems: "center",
            borderColor: "grey",
            marginLeft: -10,
            position: "absolute",
          }}
          onPress={() => this.props.navigation.goBack()}
        >
          <Ionicons name="arrow-back-outline" size={28} color="white" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            justifyContent: "center",
            position: "absolute",
            marginLeft: "90%",
          }}
          onPress={async () => {
            try {
              await Share.share({
                message: item.video,
              });
            } catch (error) {
              console.log(error.message);
            }
          }}
        >
          <FontAwesome name="share-alt" size={35} color="green" />
        </TouchableOpacity>
      </View>
    );
  };
  render() {
    if (this.state.products.length === 0) {
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#1A1B31",
            justifyContent: "center",
          }}
        >
          <ActivityIndicator size="large" />
        </View>
      );
    } else {
      this.shuffleDeck(this.state.products);
      return (
        <View
          style={{
            flex: 1,
            backgroundColor: "#FAFAFA",
          }}
        >
          <View
            style={{
              alignContent: "center",
              height: Dimensions.get("window").height,
              width: Dimensions.get("window").width,
            }}
          >
            <FlashList
              keyExtractor={this.keyExtractor}
              data={this.state.products}
              renderItem={this.renderItem}
              estimatedItemSize={500}
              decelerationRate={2}
              snapToInterval={Dimensions.get("window").height}
            />
          </View>
        </View>
      );
    }
  }
}
