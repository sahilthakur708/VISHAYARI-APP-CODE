import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default class OtherScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: "#19182F",
        }}
      >
        <ScrollView>
          <View>
            <TouchableOpacity
              style={{
                height: 40,
                flexDirection: "row",
                paddingTop: "2%",

                marginTop: 10,
                marginBottom: 5,
                marginLeft: 30,
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 17,

                  marginRight: "10%",
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  borderColor: "grey",
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons name="arrow-back-outline" size={28} color="white" />
              </TouchableOpacity>
            </TouchableOpacity>

            <Text
              style={{
                fontSize: 25,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
              }}
            >
              How can we help you?
            </Text>
            <View>
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 30,
                  fontSize: 23,
                  color: "white",
                  marginTop: 24,
                  fontWeight: "bold",
                }}
              >
                Functionality
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  margin: 30,
                  fontSize: 17,
                  color: "white",
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>* </Text>The
                App has its Shayari categories in the Home screen from where you
                can see them, To upload your own shayari you can click on post
                your shayari in the bottom tab of home screen.
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 30,
                  fontSize: 17,
                  color: "white",
                  marginRight: 30,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>* </Text>To
                view the Video Status the individual can click on the Video
                status Button in the Bottom Tab of the Home Screen.
              </Text>
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 30,
                  fontSize: 17,
                  color: "white",
                  marginRight: 30,
                  marginTop: 30,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>* </Text>To
                view the Shayari Status the individual can click on the Image
                status Button in the Home Screen.
              </Text>
            </View>
            <View>
              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 30,
                  fontSize: 23,
                  color: "white",
                  marginTop: 30,
                  fontWeight: "bold",
                }}
              >
                Videos
              </Text>

              <Text
                style={{
                  textAlign: "left",
                  marginLeft: 30,
                  fontSize: 17,
                  color: "white",
                  marginRight: 30,
                }}
              >
                <Text style={{ fontWeight: "bold", fontSize: 18 }}>* </Text>If
                there are any other video related problems user can contact us
                on email we are Available for costumer Service any time.
              </Text>
              <Image
                source={{
                  uri: "https://www.kindpng.com/picc/m/154-1540620_customer-care-customer-support-icon-transparent-hd-png.png",
                }}
                style={{
                  height: 150,
                  width: 150,
                  borderRadius: 400,
                  alignSelf: "center",
                  marginTop: 30,
                  marginBottom: 20,
                }}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}
