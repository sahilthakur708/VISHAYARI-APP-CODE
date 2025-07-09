import React, { Component } from "react";
import { View, Text, TextInput, TouchableOpacity, Alert } from "react-native";
import db from "../config";
import { LinearGradient } from "expo-linear-gradient";

export default class PostShayariScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      category: "",
      shayari: "",
      attitudeColor: "#17152D",
      LoveColor: "#17152D",
      MahakalColor: "#17152D",
      SadColor: "#17152D",
      MotivationColor: "#17152D",
      FriendsColor: "#17152D",
    };
  }

  uploadShayari = () => {
    if (this.state.category === "" || this.state.shayari === "") {
      Alert.alert("Please fill all the details");
    } else {
      db.collection("Shayaries").add({
        category: this.state.category,
        Shayari: this.state.shayari,
      });
      Alert.alert("Your Shayari has been Uploaded");
    }
  };

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "white",
        }}
      >
        <View>
          <LinearGradient colors={["#009ffd", "#045de9"]}>
            <TouchableOpacity
              style={{
                height: 30,
                flexDirection: "row",
                paddingTop: 3,
                paddingRight: 10,
                marginTop: 12,
                marginBottom: 8,
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontSize: 22,
                  fontWeight: "bold",
                  marginLeft: -10,
                  marginTop: -3,
                  height: 40,
                }}
              >
                Post Your Shayari
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
        <Text
          style={{
            color: "Black",
            alignSelf: "center",
            fontSize: 20,
            marginTop: 30,
            fontWeight: "bold",
          }}
        >
          Select Your Category :- {this.state.category}
        </Text>
        <View
          style={{
            marginTop: 60,

            justifyContent: "center",
            alignSelf: "center",
          }}
        >
          <View style={{ flexDirection: "row" }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                alignContent: "center",
                height: 30,
                borderColor: "darkblue",
                backgroundColor: this.state.attitudeColor,
              }}
              onPress={() =>
                this.setState({
                  category: "Attitude",
                  attitudeColor: "#2C294A",
                  LoveColor: "#17152D",
                  MahakalColor: "#17152D",
                  SadColor: "#17152D",
                  MotivationColor: "#17152D",
                  FriendsColor: "#17152D",
                })
              }
            >
              <Text
                style={{ marginTop: 3, textAlign: "center", color: "white" }}
              >
                Attitude
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                marginLeft: 10,
                height: 30,
                borderColor: "darkblue",
                backgroundColor: this.state.LoveColor,
              }}
              onPress={() =>
                this.setState({
                  category: "Love",
                  LoveColor: "#2C294A",
                  attitudeColor: "#17152D",
                  MahakalColor: "#17152D",
                  SadColor: "#17152D",
                  MotivationColor: "#17152D",
                  FriendsColor: "#17152D",
                })
              }
            >
              <Text
                style={{ marginTop: 3, textAlign: "center", color: "white" }}
              >
                Love
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                height: 30,
                marginLeft: 10,
                borderColor: "darkblue",
                backgroundColor: this.state.MahakalColor,
              }}
              onPress={() =>
                this.setState({
                  category: "Mahakal",
                  MahakalColor: "#2C294A",
                  SadColor: "#17152D",
                  MotivationColor: "#17152D",
                  FriendsColor: "#17152D",
                  LoveColor: "#17152D",
                  attitudeColor: "#17152D",
                })
              }
            >
              <Text
                style={{ marginTop: 3, textAlign: "center", color: "white" }}
              >
                Mahakal
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", marginTop: 20 }}>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,

                height: 30,
                borderColor: "darkblue",
                backgroundColor: this.state.SadColor,
              }}
              onPress={() =>
                this.setState({
                  category: "Sad",
                  SadColor: "#2C294A",
                  MotivationColor: "#17152D",
                  FriendsColor: "#17152D",
                  LoveColor: "#17152D",
                  attitudeColor: "#17152D",
                  MahakalColor: "#17152D",
                })
              }
            >
              <Text
                style={{ marginTop: 3, textAlign: "center", color: "white" }}
              >
                Sad
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                marginLeft: 10,
                height: 30,
                borderColor: "darkblue",
                backgroundColor: this.state.MotivationColor,
              }}
              onPress={() =>
                this.setState({
                  category: "Motivation",
                  MotivationColor: "#2C294A",
                  FriendsColor: "#17152D",
                  LoveColor: "#17152D",
                  attitudeColor: "#17152D",
                  MahakalColor: "#17152D",
                  SadColor: "#17152D",
                })
              }
            >
              <Text
                style={{ marginTop: 3, textAlign: "center", color: "white" }}
              >
                Motivation
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={{
                borderWidth: 1,
                borderColor: "grey",
                width: 100,
                borderRadius: 50,
                marginLeft: 10,
                height: 30,
                borderColor: "darkblue",
                backgroundColor: this.state.FriendsColor,
              }}
              onPress={() =>
                this.setState({
                  category: "Friends",
                  FriendsColor: "#2C294A",
                  LoveColor: "#17152D",
                  attitudeColor: "#17152D",
                  MahakalColor: "#17152D",
                  SadColor: "#17152D",
                  MotivationColor: "#17152D",
                })
              }
            >
              <Text
                style={{ marginTop: 3, textAlign: "center", color: "white" }}
              >
                Friends
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <TextInput
          style={{
            width: "80%",
            alignSelf: "center",
            marginTop: 40,
            height: 50,
            borderRadius: 10,
            paddingLeft: 20.5,
            fontSize: 13,
            borderWidth: 2,
            borderColor: "black",
          }}
          placeholderTextColor="black"
          inlineImageLeft="search_icon"
          placeholder="Write Your Shayari Here.."
          onChangeText={(val) => {
            this.setState({ shayari: val });
          }}
        />

        <View>
          <LinearGradient
            style={{
              width: 200,
              height: 50,
              alignSelf: "center",
              marginTop: 30,
              justifyContent: "center",
              borderRadius: 30,
            }}
            colors={["#009ffd", "#045de9"]}
          >
            <TouchableOpacity
              onPress={() => {
                if (
                  this.state.category === "" ||
                  this.state.shayari === "" ||
                  (this.state.category === "") & (this.state.shayari === "")
                ) {
                  Alert.alert("Invalid!", "Please Fill all the details");
                } else {
                  this.uploadShayari();
                  this.setState({ category: "", shayari: "" });
                  this.props.navigation.navigate("HomeScreen");
                }
              }}
              style={{
                borderRadius: 20,
                width: "70%",
                alignSelf: "center",
                height: 45,
                marginTop: "10%",
                justifyContent: "center",
                paddingBottom: 5,
                marginBottom: "8%",
              }}
            >
              <Text
                style={{
                  alignSelf: "center",
                  color: "white",
                  fontWeight: "bold",
                  fontSize: 20,
                }}
              >
                Post
              </Text>
            </TouchableOpacity>
          </LinearGradient>
        </View>
      </View>
    );
  }
}
