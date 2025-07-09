import React, { Component } from "react";
import { View, Text, TouchableOpacity, Image, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { ScrollView } from "react-native-gesture-handler";

export default class HelpScreen extends React.Component {
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
                marginBottom: "5%",
                alignSelf: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  borderRadius: 17,
                  justifyContent: "center",
                  marginRight: "10%",
                  width: 40,
                  height: 40,
                  alignItems: "center",
                  borderColor: "grey",
                  marginLeft: -40,
                }}
                onPress={() => this.props.navigation.goBack()}
              >
                <Ionicons name="arrow-back-outline" size={28} color="white" />
              </TouchableOpacity>
              <Text
                style={{
                  color: "white",
                  fontSize: 24,
                  fontWeight: "bold",

                  marginTop: 3,
                  marginRight: 10,
                  height: 40,
                }}
              >
                Request Help
              </Text>
            </TouchableOpacity>

            <Image
              source={{
                uri: "https://www.pngitem.com/pimgs/m/530-5306655_his-2013-helpdesk-support-2x-circle-hd-png.png",
              }}
              style={{
                height: 200,
                width: 200,
                borderRadius: 400,
                alignSelf: "center",
                marginTop: 30,
              }}
            />
            <Text
              style={{
                fontSize: 22,
                color: "white",
                fontWeight: "bold",
                textAlign: "center",
                marginTop: 30,
              }}
            >
              How can we help you?
            </Text>
            <Text
              style={{
                textAlign: "center",
                margin: 40,
                fontSize: 17,
                color: "white",
              }}
            >
              It looks like you are experiencing problems with our App. We are
              here to help so please get in touch with us
            </Text>
            <View style={{ flexDirection: "row", alignSelf: "center" }}>
              <TouchableOpacity
                style={{
                  backgroundColor: "#2C294A",
                  width: 180,
                  height: 100,
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                }}
                onPress={() =>
                  Linking.openURL("mailTo:" + "gocartapp8@gmail.com")
                }
              >
                <MaterialIcons
                  name="email"
                  size={30}
                  color="#662DFF"
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{
                    fontSize: 22,
                    color: "white",
                    textAlign: "center",
                    marginTop: 5,
                  }}
                >
                  Email Us
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={{
                  backgroundColor: "#2C294A",
                  width: 180,
                  height: 100,
                  alignSelf: "center",
                  justifyContent: "center",
                  borderRadius: 15,
                  marginLeft: 20,
                }}
                onPress={() => this.props.navigation.navigate("OtherScreen")}
              >
                <Entypo
                  name="forward"
                  size={32}
                  color="#3C73FB"
                  style={{ alignSelf: "center" }}
                />
                <Text
                  style={{
                    textAlign: "center",
                    fontSize: 22,
                    color: "white",
                    marginTop: 5,
                  }}
                >
                  Other
                </Text>
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              style={{
                marginTop: 50,
                backgroundColor: "#5A91FC",
                width: 200,
                height: 90,
                borderRadius: 10,
                alignSelf: "center",
                justifyContent: "center",
                marginBottom: 20,
              }}
              onPress={() =>
                Linking.openURL(
                  "https://pages.flycricket.io/vishayari-hindi-shay/privacy.html"
                )
              }
            >
              <MaterialIcons
                style={{ alignSelf: "center", marginTop: 5 }}
                name="policy"
                size={30}
                color="green"
              />
              <Text
                style={{
                  textAlign: "center",
                  fontSize: 18,
                  color: "white",
                  marginBottom: 5,
                }}
              >
                Our Privacy Policy
              </Text>
            </TouchableOpacity>
          </View>
        </ScrollView>
      </View>
    );
  }
}
