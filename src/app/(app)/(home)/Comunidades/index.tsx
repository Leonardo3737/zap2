import { Theme } from "@/src/Themes/Theme";
import { useThemeStore } from "@/src/stores/useThemeStore";
import { Button, Text, View } from "native-base";

export default function Comunidades() {

  const theme = useThemeStore(e=> e.theme)

  return (
    <View
    style={{
      backgroundColor: Theme[theme].background,
      height: '100%',
      paddingHorizontal: 40,
      paddingTop: 100,
      alignItems: 'center'
    }}
    >
      <Text
      style={{
        color: Theme[theme].text,
        textAlign: 'center',
        fontSize: 20,
        marginVertical: 10
      }}
      >Conecte-se com outras pessoas com as comunidades</Text>
      <Text
      style={{
        color: Theme[theme].text,
        textAlign: 'center'
      }}
      >As comunidades permitem reunir pessoas em grupos de assuntos especificos 
      e receber avisos de admins com facilidade. As comunidades das quais você 
      participa serão exibidas nesta tela.</Text>
      <Text
      style={{
        color: '#25d366',
        textAlign: 'center',
        marginTop: 5,
        marginBottom: 30
      }}
      >Exemplos de comunidade</Text>
      <Button
      style={{
        backgroundColor: '#25d366',
        width: '100%',
        borderRadius: 999,
      }}
      ><Text style={{color: Theme[theme].background, fontWeight: '700'}}>Criar Comunidade</Text></Button>
    </View>
  )
}