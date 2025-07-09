import React from "react";
import {
  View,
  TouchableOpacity,
  ScrollView,
  Text,
  ImageBackground,
  Image,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Entypo, AntDesign } from "@expo/vector-icons";
import analytics from "@react-native-firebase/analytics";

export default class HomeScreen extends React.Component {
  customEvent = async () => {
    await analytics.logEvent("bricket", {
      id: 11111,
    });
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <LinearGradient colors={["#009ffd", "#045de9"]}>
          <View style={{ flexDirection: "row" }}>
            <Text
              style={{
                color: "white",
                fontSize: 22,
                fontWeight: "bold",
                textAlign: "center",
                height: 40,
                marginLeft: 150,
                marginTop: 3,
              }}
            >
              Home
            </Text>

            <TouchableOpacity
              style={{ alignSelf: "center", marginLeft: 100 }}
              onPress={() => {
                this.props.navigation.navigate("HelpScreen");
              }}
            >
              <Entypo name="help-with-circle" size={24} color="white" />
            </TouchableOpacity>
          </View>
        </LinearGradient>
        <ScrollView>
          <View style={{ flexDirection: "row", alignSelf: "center" }}>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Attitude",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 80,
                width: 150,
                alignSelf: "center",
                marginRight: 10,
                marginTop: 80,
              }}
            >
              <Image
                source={{
                  uri: "https://ih1.redbubble.net/image.3037234863.9558/st,small,507x507-pad,600x600,f8f8f8.jpg",
                }}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 25,
                }}
              />
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Mahakal",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 90,
                width: 130,
                alignSelf: "center",
                marginTop: 80,
                marginLeft: 20,
                marginRight: 17,
              }}
            >
              <Image
                style={{ height: 150, width: 150, borderRadius: 25 }}
                source={{ uri: "https://wallpaperaccess.com/full/5203921.jpg" }}
              />
            </TouchableOpacity>
          </View>

          <View
            style={{ flexDirection: "row", alignSelf: "center", marginTop: 30 }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Sad",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 140,
                alignSelf: "center",
                marginTop: 80,
                marginRight: 30,
              }}
            >
              <Image
                style={{ height: 150, width: 150, borderRadius: 25 }}
                source={{
                  uri: "https://thumbs.dreamstime.com/b/orange-blue-white-sad-hand-written-word-text-typography-logo-sad-hand-written-word-text-typography-design-orange-blue-133478623.jpg",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Friends",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 140,
                alignSelf: "center",
                marginTop: 80,
                marginRight: 17,
              }}
            >
              <ImageBackground
                style={{ height: 150, width: 170 }}
                source={{
                  uri: "https://i.pinimg.com/originals/0a/2c/ef/0a2cef514e5e31de12a8848e0f375180.png",
                }}
              ></ImageBackground>
            </TouchableOpacity>
          </View>
          <View
            style={{ marginTop: 18, flexDirection: "row", alignSelf: "center" }}
          >
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Motivation",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 140,
                alignSelf: "center",
                marginTop: 80,
                marginRight: 40,
                marginLeft: 10,
                marginBottom: 15,
              }}
            >
              <Image
                style={{ height: 160, width: 160, borderRadius: 25 }}
                source={{
                  uri: "https://us.123rf.com/450wm/outchill/outchill2202/outchill220201336/outchill220201336.jpg",
                }}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                this.props.navigation.navigate("ShayariScreen", {
                  category: "Love",
                });
                this.customEvent();
              }}
              style={{
                justifyContent: "center",
                height: 100,
                width: 140,
                alignSelf: "center",
                marginTop: 80,
                marginRight: 17,
                marginBottom: 15,
              }}
            >
              <Image
                style={{ height: 150, width: 150, borderRadius: 25 }}
                source={{
                  uri: "https://www.freepnglogos.com/uploads/love-logo-24.jpg",
                }}
              />
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", alignSelf:'center' }}>
            <LinearGradient
              style={{
                width: "30%",
                height: 80,
                alignSelf: "center",
                marginTop: 60,
                justifyContent: "center",
                borderRadius: 100,
                alignContent: "center",
                marginBottom: 40,
                marginRight:10
              }}
              colors={["purple", "darkblue"]}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("ImageStatus");
                  this.customEvent();
                }}
                style={{
                  borderRadius: 20,
                  width: "30%",
                  alignSelf: "center",
                  height: 100,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                  <Entypo
                    name="images"
                    size={32}
                    color="white"
                    style={{ alignSelf: "center" }}
                  />
                </View>
              </TouchableOpacity>
            </LinearGradient>
            <LinearGradient
              style={{
                width: "30%",
                height: 80,
                alignSelf: "center",
                marginTop: 60,
                justifyContent: "center",
                borderRadius: 100,
                alignContent: "center",
                marginBottom: 40,
                marginLeft:10
              }}
              colors={["darkblue", "purple"]}
            >
              <TouchableOpacity
                onPress={() => {
                  this.props.navigation.navigate("VideoStatusScreen");
                  this.customEvent();
                }}
                style={{
                  borderRadius: 20,
                  width: "30%",
                  alignSelf: "center",
                  height: 120,
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <View style={{ flexDirection: "row", alignContent: "center" }}>
                  <Entypo
                    name="video"
                    size={32}
                    color="white"
                    style={{ alignSelf: "center" }}
                  />
                </View>
              </TouchableOpacity>
            </LinearGradient>
          </View>
        </ScrollView>
      </View>
    );
  }
}
