import { Stack } from "expo-router";
import { NativeBaseProvider } from "native-base";

export default function Layout() {

  return (
    <NativeBaseProvider>
      <Stack screenOptions={{headerShown: false}}>
        <Stack.Screen name="index"/>
        <Stack.Screen name="(home)"/>
        <Stack.Screen name="(chat)"/>
      </Stack>
    </NativeBaseProvider>
  )
}