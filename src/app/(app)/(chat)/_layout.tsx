import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function Layout() {

  return (
    <NativeBaseProvider>
      <Stack>
        <Stack.Screen name="Chat"/>
      </Stack>
    </NativeBaseProvider>
  )
}