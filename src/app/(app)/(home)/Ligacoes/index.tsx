import Calls from "@/src/components/Calls";
import { Theme } from "@/src/Themes/Theme";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Text, View } from "native-base";
import _Calls from "@/db/calls.json"
import { useEffect, useState } from "react";
import ICall from "@/src/interfaces/ICall";

export default function Ligacoes() {
  const [ calls, setCalls ] = useState<ICall[]>([])
  const theme = useThemeStore(e=> e.theme)

  useEffect(()=> {
    setCalls(_Calls as ICall[])
  }, [])

  return (
    <View
    style={{
      backgroundColor: Theme[theme].background,
      height: '100%'
    }}
    >
      <Calls call={calls}/>
    </View>
  )
}