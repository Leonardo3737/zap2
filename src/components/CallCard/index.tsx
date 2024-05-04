import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Theme } from "@/src/Themes/Theme";
import IChats from "@/src/interfaces/IChats";
import UnreadMessages from "../UnreadMessages";
import ICall from "@/src/interfaces/ICall";
import { AntDesign, Feather, MaterialCommunityIcons } from "@expo/vector-icons";

export default function CallCard({ name, icon, time, me, isViewed, type }: ICall) {

  const theme = useThemeStore(e => e.theme);
  const color = isViewed ? "#25d366" : "#a33c48"
  return (
    <View style={{ ...styles.body, backgroundColor: Theme[theme].background, }}>
      <View style={styles.content}>
        <Image
          alt=""
          style={styles.icon}
          source={require("../../../assets/images/profile.png")}
        ></Image>
        <View>
          <Text style={{ ...styles.name, color: isViewed ? Theme[theme].text : "#a33c48" }}>{name}</Text>
          <View style={{ flexDirection: 'row' }}>
            {
              me ?
                <MaterialCommunityIcons name="arrow-top-right" size={20} color={color} /> :
                <Feather name="arrow-down-left" size={20} color={color} />
            }
            <Text style={{ color: Theme[theme].secondaryText }}>{time}</Text>

          </View>
        </View>
      </View>
      <View>
        {
          type === 'video' ?
            <AntDesign name="videocamera" size={24} color={color} /> :
            <Feather name="phone" size={24} color={color} />
        }
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    width: '100%',
    marginHorizontal: 'auto',
    marginVertical: 10,
    alignItems: 'center',
    justifyContent: 'space-between'
  },
  icon: {
    width: 50,
    height: 50,
    borderRadius: 9999,
    marginRight: 15
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  name: {
    fontSize: 17,
    fontWeight: '500'
  },
  lastMessage: {
    fontSize: 15,
    fontWeight: '400'
  },
})