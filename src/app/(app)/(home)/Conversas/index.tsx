import { useEffect, useState } from "react";
import { Button, ScrollView, Text, View } from "native-base";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Theme } from "@/src/Themes/Theme";
import IChats from "@/src/interfaces/IChats";
import ChatCard from "@/src/components/ChatCard";
import api from "@/src/api/api";

export default function Conversas() {
  const [chats, setChats] = useState<IChats[]>()
  const theme = useThemeStore(e=> e.theme)
  const toggletheme = useThemeStore(e=> e.toggleTheme)

  const getChats = async() => {
    const auxChats: any = await api.get('/getChats')    
    setChats(auxChats.data)    
  }
  
  useEffect(()=> {
    getChats()
  }, [])

  return (
    <ScrollView
    style={{
      backgroundColor: Theme[theme].background,
      height: '100%'
    }}
    >
      
      {
        chats?.map((chat: IChats, i:any)=> (
           <ChatCard
          lastMessage={chat.lastMessage} 
          name={chat.name}
          unreadCount={chat.unreadCount}
          timestamp={chat.timestamp}
          isGroup={chat.isGroup}
          id={chat.id}
          key={i}
          />

        ))
      }
      <Button onPress={toggletheme}>asa</Button>
    </ScrollView>
  )
}