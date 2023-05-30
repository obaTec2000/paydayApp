import {
  Text,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

import { CircleBtn } from "../../components/ProfileButton";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons, Feather, MaterialIcons } from "@expo/vector-icons";

const { width, height } = Dimensions.get("window");

export default function TopBar({ navigation }) {
  return (
    <View style={styles.TopContainer}>
      {/* <View style={styles.TopControl}> */}

      <View>
        <CircleBtn />
      </View>

      {/* <View style={{ flexDirection: 'row', alignItems:'center', justifyContent: 'center' }}> */}
      <View
        style={{
          width: 120,
          height: 35,
          backgroundColor: "#fff",
          borderRadius: 19,
          alignItems: "center",
          justifyContent: "space-evenly",
          flexDirection: "row",
        }}
      >
        <ImageBackground
          source={require("../../assets/images/obaman.jpg")}
          style={{ width: 25, height: 25 }}
          imageStyle={{ borderRadius: 50 }}
        />

        <View>
          <Text style={{ fontSize: 13, fontWeight: "800" }}>NG Naira</Text>
        </View>

        <AntDesign name="downcircle" size={20} color="gray" />
      </View>
      {/* </View> */}

      <View style={{ flexDirection: 'row', alignItems: 'center'}}>
        <TouchableOpacity onPress={() => {}}>
          <Feather name="bell" size={20} color="white" style={{marginRight: 10}} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => {}}>
          <MaterialIcons
            name="attach-money"
            size={20}
            color="black"
            style={{ backgroundColor: "white", borderRadius: 19 }}
          />
        </TouchableOpacity>
      </View>

      {/* </View> */}
    </View>
  );
}

const styles = StyleSheet.create({
  TopContainer: {
    // borderBottomColor: '#393E46',
    // borderBottomWidth: 1,
    width: width,
    alignItems: "center",
    paddingVertical: 15,
    marginBottom: 5,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 30,
    paddingHorizontal: 10,
    backgroundColor: "#263238",
    // position: 'absolute'
  },
  bottomControl: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "80%",
    // flexDirection: 'row'
  },
});
