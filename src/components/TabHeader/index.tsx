import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Theme } from "@/src/Themes/Theme";
import { Feather, Ionicons } from "@expo/vector-icons";

interface TabHeaderPros {
  title: string;
  options: any[];
  showSearch: boolean
}

export default function TabHeader({ options, showSearch, title }: TabHeaderPros) {

  const theme = useThemeStore(e=> e.theme);

  return (
    <View style={{...styles.header, backgroundColor: Theme[theme].background,}}>
      <Text style={{
        ...styles.title, 
        color: title==='WhatsApp'? Theme[theme].title : Theme[theme].text,
        fontWeight: title==='WhatsApp'? '800' : '500'
        }}>{title}</Text>

      <View style={styles.options}>
        <Feather name="camera" size={24} color={Theme[theme].text} />
        {showSearch ? (
          <Feather name="search" size={24} color={Theme[theme].text} />
        ) : <></>}
        <Ionicons name="ellipsis-vertical" size={24} color={Theme[theme].text} />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    height: 80,
    paddingBottom: 15,
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    borderBottomWidth: 0.5,
    borderBottomColor: 'gray'
  },
  title: {
    fontSize: 22
  },
  options: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-end',
    width: 120
  }
})