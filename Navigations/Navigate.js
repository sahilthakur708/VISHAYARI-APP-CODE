import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import PostShayariScreen from "../screens/PostShayariScreen";
import { MaterialIcons } from "@expo/vector-icons";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ShayariScreen from "../screens/ShayariScreen";
import VideoStatusScreen from "../screens/VideoStatusScreen";
import HelpScreen from "../screens/HelpScreen";
import OtherScreen from "../screens/OtherScreen";
import ImageStatus from "../screens/ImageStatus";
import { Entypo, AntDesign } from "@expo/vector-icons";

const TabOrders = createBottomTabNavigator();

const TabContentOrders = () => {
  return (
    <TabOrders.Navigator
      initialRouteName="HomeScreen"
      activeColor="white"
      inactiveColor="black"
      labeled={true}
     
      screenOptions={({ route }) => ({
        tabBarActiveBackgroundColor: "black",
        tabBarInactiveBackgroundColor: "black",
        tabBarStyle:{height:40},
        tabBarLabelStyle: { marginBottom: 3 }, // add margin to label
         // Set the desired height here
        tabBarIcon: ({ focused, color, size }) => {
          let iconName;

          if (route.name === "HomeScreen") {
            return (
              <MaterialIcons name="call-received" size={20} color="white" />
            );
          } else if (route.name === "PostShayariScreen") {
            return (
              <MaterialIcons name="present-to-all" size={20} color="white" />
            );
          } else if (route.name === "VideoStatusScreen") {
            return (
              <Entypo
                name="video"
                size={20}
                color="white"
                style={{ alignSelf: "center" }}
              />
            );
          } else if (route.name === "ImageStatus") {
            return (
              <Entypo
                name="images"
                size={20}
                color="white"
                style={{ alignSelf: "center" }}
              />
            );
          }
        },
      })}

    >
      <TabOrders.Screen
        name="HomeScreen"
        component={HomeScreen}
        
        options={{
          title: "Home",
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
          
        }}
      />

      <TabOrders.Screen
        name="PostShayariScreen"
        component={PostShayariScreen}
        options={{
          title: "Post",
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
        }}
      />
      <TabOrders.Screen
        name="VideoStatusScreen"
        component={VideoStatusScreen}
        options={{
          title: "Videos",
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
        }}
      />

      <TabOrders.Screen
        name="ImageStatus"
        component={ImageStatus}
        options={{
          title: "Status",
          headerShown: false,
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
        }}
      />
    </TabOrders.Navigator>
  );
};

const Stack1 = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack1.Navigator screenOptions={{ headerShown: false }}>
      <Stack1.Screen name="HomeScreen" component={TabContentOrders} />

      <Stack1.Screen
        options={{ headerShown: false }}
        name="OtherScreen"
        component={OtherScreen}
      />
      <Stack1.Screen
        options={{ headerShown: false }}
        name="HelpScreen"
        component={HelpScreen}
      />
      <Stack1.Screen
        options={{ headerShown: false }}
        name="VideoStatusScreen"
        component={VideoStatusScreen}
      />

      <Stack1.Screen name="ImageStatus" component={ImageStatus} />
      <Stack1.Screen
        options={{ headerShown: false, title: "Shayari" }}
        name="ShayariScreen"
        component={ShayariScreen}
      />
    </Stack1.Navigator>
  );
};
export default MainStack;
