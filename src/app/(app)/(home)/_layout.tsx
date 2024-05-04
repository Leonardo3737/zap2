import { Tabs } from "expo-router";
import { AntDesign, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import TabHeader from "../../../components/TabHeader";
import { useThemeStore } from "../../../stores/useThemeStore";
import { Theme } from "../../../Themes/Theme";

export default function Layout() {

  const theme = useThemeStore(e => e.theme);

  return (
    <Tabs
      screenOptions={{
        tabBarStyle: {
          backgroundColor: Theme[theme].background,
          paddingBottom: 6,
          paddingTop: 5,
          height: 55
        }
      }}
    >
      <Tabs.Screen
        name="Conversas/index"
        options={{
          title: "Conversas",
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="android-messages" size={24} color={focused ? Theme[theme].tabLabel : Theme[theme].text} />,
          header: () => <TabHeader title="WhatsApp" options={[]} showSearch={true} />,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '800',
            color: Theme[theme].text
          }
        }}
      />

      <Tabs.Screen
        name="Atualizacoes/index"
        options={{
          title: "Atualizações",

          tabBarIcon: ({ focused }) => <AntDesign name="message1" size={21} color={focused ? Theme[theme].tabLabel : Theme[theme].text} />,
          header: () => <TabHeader title="Atualizações" options={[]} showSearch={true} />,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '800',
            color: Theme[theme].text
          }
        }}
      />

      <Tabs.Screen
        name="Comunidades/index"
        options={{
          title: "Comunidades",
          tabBarIcon: ({ focused }) => <MaterialIcons name="groups" size={28} color={focused ? Theme[theme].tabLabel : Theme[theme].text} />,
          header: () => <TabHeader title="Comunidades" options={[]} showSearch={true} />,
          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '700',
            color: Theme[theme].text
          }
        }}
      />

      <Tabs.Screen
        name="Ligacoes/index"

        options={{
          title: "Ligações",
          tabBarIcon: ({ focused }) => <MaterialCommunityIcons name="phone" size={24} color={focused ? Theme[theme].tabLabel : Theme[theme].text} />,
          header: () => <TabHeader title="Ligações" options={[]} showSearch={true} />,

          tabBarLabelStyle: {
            fontSize: 13,
            fontWeight: '700',
            color: Theme[theme].text
          }
        }}
      />
    </Tabs>
  )
}