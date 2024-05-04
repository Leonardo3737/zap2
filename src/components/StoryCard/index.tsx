import React from "react";
import { StyleSheet, Image } from "react-native";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Theme } from "@/src/Themes/Theme";
import IStorys from "@/src/interfaces/IStories";
import { Text, View } from "native-base";

export default function StoryCard({ name, icon, time, amountStory, isViewed }: IStorys) {

  const theme = useThemeStore(e => e.theme);

  return (
    <View style={{ ...styles.body, backgroundColor: Theme[theme].background, }}>
      <View style={styles.content}>
        <View
          style={{
            ...styles.icon,
            borderWidth: 2,
            borderColor: isViewed ? "#acacac" : "#25d366",
            backgroundColor: Theme[theme].background
          }}
        >
          <Image
            style={styles.image}
            alt=""
            source={require("../../../assets/images/profile.png")}
          ></Image>
        </View>
        <View>
          <Text style={{ ...styles.name, color: Theme[theme].text }}>{name}</Text>
          <Text style={{ ...styles.time, color: Theme[theme].secondaryText }}>{time}</Text>
        </View>
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
    width: 58,
    height: 58,
    borderRadius: 9999,
    marginRight: 13,
    justifyContent: 'center',
    alignItems: 'center'
  },

  image: {
    width: 50,
    height: 50,
    borderRadius: 9999
  },

  content: {
    flexDirection: 'row',
    alignItems: 'center'
  },

  left: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    height: '100%'
  },

  name: {
    fontSize: 18,
    fontWeight: '700'
  },

  time: {
    fontSize: 16,
    fontWeight: '400'
  }
})