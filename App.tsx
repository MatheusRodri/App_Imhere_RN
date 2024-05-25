import { Text, View } from "react-native"


export default function App() {
  return (
    <View style={{
      flex:1,
      backgroundColor:'#131016',
      padding: 24
      }}>
      <Text style={{
        color:'#fcfdfe',
        fontSize:24,
        fontWeight:"bold",
        marginTop:48
      }}>
        Nome do evento
      </Text>

      <Text style={{
        color: '#6b6b6b',
      }}>
        Sabado,25 de maio de 2024 
      </Text>
    </View>
  )
}