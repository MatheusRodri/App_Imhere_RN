import { Text, View, TextInput,TouchableOpacity } from "react-native"
import {styles} from './styles'


export function Home() {

  function handleParticipantAdd(){
    console.log('Adicionando participante')
  }

  return (
    <View style={styles.container}>

      <Text style={styles.eventName}>
        Nome do evento
      </Text>

      <Text style={styles.eventDate}>
        Sábado, 26 de maio de 2024
      </Text>

    <View style={styles.form}>
    <TextInput 
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor={'#6b6b6b'}
          keyboardType="default"
        />
        <TouchableOpacity style={styles.button} onPress={handleParticipantAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>

    </View>
      
    </View>
  )
}