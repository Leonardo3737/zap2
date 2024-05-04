import { Theme } from "@/src/Themes/Theme";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Text, View } from "native-base";
import { StyleSheet } from "react-native";

interface UnreadMessagesProps {
  amount: number
}

export default function UnreadMessages({amount}: UnreadMessagesProps) {

  const theme = useThemeStore(e=> e.theme);

  return (
    <View style={styles.body}>
      <Text style={{color: Theme[theme].background}}>{amount}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body: {
    width: 20,
    height: 20,
    borderRadius: 9999,
    backgroundColor: '#25d366',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center'
  }
})