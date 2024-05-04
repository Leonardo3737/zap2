import { useLocalSearchParams } from "expo-router";
import { Text, View } from "native-base";

export default function Chat() {

  const {id} = useLocalSearchParams()

  return (
    <View>
      <Text>{id}</Text>
    </View>
  )
}