import { Theme } from "@/src/Themes/Theme";
import IStories from "@/src/interfaces/IStories";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Pressable, ScrollView, Text, View } from "native-base";
import { useEffect, useState } from "react";
import ListStories from "@/db/stories.json"
import Stories from "@/src/components/Stories";
import { Entypo, Ionicons } from "@expo/vector-icons";
import { Image, StyleSheet } from "react-native";

export default function Atualizacoes() {
  const [stories, setStories] = useState<IStories[]>([])
  const [storiesViewed, setStoriesViewed] = useState<IStories[]>([])
  const [arrow, setArrow] = useState<'chevron-up' | 'chevron-down'>('chevron-down')
  const [showViewed, setShowViewed] = useState<boolean>(false)
  const theme = useThemeStore(e => e.theme)

  function toggleShowViewed() {
    setArrow(a => a === 'chevron-down' ? 'chevron-up' : 'chevron-down')
    setShowViewed(!showViewed)
  }

  useEffect(() => {
    const auxStories = ListStories.filter((s) => !s.isViewed)
    const auxStoriesViewed = ListStories.filter((s) => s.isViewed)
    setStories(auxStories)
    setStoriesViewed(auxStoriesViewed)
  }, [])

  return (
    <ScrollView
      style={{
        backgroundColor: Theme[theme].background,
        height: '100%',
        overflow: 'scroll'
      }}
    >
      <View style={{ ...styles.header }}>
        <Text style={{ ...styles.title, color: Theme[theme].text }}>Status</Text>
        <Ionicons name="ellipsis-vertical" size={24} color={Theme[theme].secondaryText} />
      </View>
      <View style={styles.myStatus}>
        <Image
          style={styles.image}
          alt=""
          source={require("../../../../../assets/images/profile.png")}
        />
        <View style={{ ...styles.bPlus, borderColor: Theme[theme].background }}><Text style={{ ...styles.plus, color: Theme[theme].background }}>+</Text></View>
        <View style={styles.upStatus}>
          <Text style={{ color: Theme[theme].text, fontWeight: '700', fontSize: 18 }}>Meu Status</Text>
          <Text style={{ color: Theme[theme].secondaryText, fontWeight: '400', fontSize: 17 }}>Toque para atualizar seu status</Text>
        </View>
      </View>
      {
        stories.length ? (
          <>
            <Text style={{
              color: Theme[theme].secondaryText,
              fontWeight: '500',
              fontSize: 15,
              marginTop: 20,
              marginBottom: 10,
              marginHorizontal: 13,
            }}
            >Atualizações recentes</Text>
            <Stories stories={stories!} />
          </>

        ) : (<></>)
      }


      {
        storiesViewed.length ? (
          <View style={{ borderBottomWidth: 1, borderBottomColor: Theme[theme].secondaryText }}>
            <Pressable onPress={toggleShowViewed}>
              <View style={styles.headerViewed}>
                <Text style={{ color: Theme[theme].secondaryText, fontWeight: '500', fontSize: 15 }}>Atualizações visualizadas</Text>
                <Entypo name={arrow} size={20} color={Theme[theme].secondaryText} />
              </View>
            </Pressable>
            {
              showViewed ? (
                <Stories stories={storiesViewed!} />
              ) : (<></>)
            }
          </View>
        ) : (<></>)
      }
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 27,
    marginBottom: 15,
    marginHorizontal: 13,
  },
  title: {
    fontSize: 22,
    fontWeight: '700'
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 9999
  },
  myStatus: {
    flexDirection: 'row',
    marginLeft: 1,
    paddingHorizontal: 13,
  },
  bPlus: {
    width: 25,
    height: 25,
    paddingTop: 2,
    paddingLeft: 1,
    borderRadius: 99999,
    backgroundColor: '#25d366',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    right: 20,
    top: 30,
    borderWidth: 2
  },
  plus: {
    fontSize: 22,
    fontWeight: '400',
    textAlign: 'center'
  },
  upStatus: {
    position: 'relative',
    right: 8
  },
  headerViewed: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 7,
    marginHorizontal: 13
  }
})