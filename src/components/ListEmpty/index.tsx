import { Text, View } from "react-native";

import ClipboardSvg from '../../assets/clipboard.svg'
import { styles } from "./styles";

export function ListEmpty() {
  return (
    <View style={styles.container}>
      <ClipboardSvg width={56} height={56} />
      <Text style={styles.title}>Você ainda não tem tarefas cadastradas</Text>
      <Text style={styles.subTitle}>Crie tarefas e organize seus itens a fazer</Text>
    </View>
  )
}