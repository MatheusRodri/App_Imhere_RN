import { Text, View, StyleSheet } from "react-native"
import {styles} from './styles'


export function Home() {
  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 26 de maio de 2024
      </Text>

    </View>
  )
}