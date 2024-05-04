import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity, Pressable } from "react-native";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Theme } from "@/src/Themes/Theme";
import IChats from "@/src/interfaces/IChats";
import UnreadMessages from "../UnreadMessages";
import moment from 'moment-timezone';
import { Link, router } from "expo-router";

export default function ChatCard({ lastMessage, name, unreadCount, id, isGroup, timestamp }: IChats) {

  const theme = useThemeStore(e => e.theme);
  const formatedTime = moment(timestamp * 1000).tz('America/New_York').format('HH:mm')

  return (
    <Pressable onPress={()=> router.push(`../(chat)/Chat/${id}`)} style={{ ...styles.body, backgroundColor: Theme[theme].background, }}>
      <View style={styles.content}>
        <Image
          alt=""
          style={styles.icon}
          source={require("../../../assets/images/profile.png")}
        ></Image>
        <View style={{ width: '77%' }}>
          <Text style={{ ...styles.name, color: Theme[theme].text }}>{name}</Text>
          <Text style={{ ...styles.lastMessage, color: Theme[theme].secondaryText }}>{lastMessage?.body}</Text>
        </View>
      </View>
      <View style={styles.left}>
        <Text style={{ color: Theme[theme].secondaryText }}>{formatedTime}</Text>
        {
          unreadCount ? (
            <UnreadMessages amount={unreadCount} />
          ) : (<></>)
        }
      </View>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  body: {
    flexDirection: 'row',
    width: '100%',
    paddingHorizontal: 10,
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
  left: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%',
    position: 'relative',
    left: -10
  },
  name: {
    fontSize: 17,
    fontWeight: '700',
    maxHeight: 20,
  },
  lastMessage: {
    fontSize: 15,
    maxHeight: 20,
    fontWeight: '500',
    overflow: 'hidden',
  },
})