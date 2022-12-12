import { Text, View } from "react-native";
import { Task } from "../../screens/home";
import { THEME } from "../../theme";
import { styles } from "./styles";

interface TaskInfoProps {
  tasks: Task[]
}

export function TasksInfo({ tasks }: TaskInfoProps) {
  const finishedTasks = tasks.filter(task => task.isFinished === true)

  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={[styles.infoText, { color: THEME.colors.blue }]}>
          Criadas
        </Text>
        <Text style={styles.numberText}>
          {tasks.length}
        </Text>
      </View>

      <View style={styles.textContainer}>
        <Text style={[styles.infoText, { color: THEME.colors.purple }]}>
          Concluídas
        </Text>
        <Text style={styles.numberText}>
          {finishedTasks.length}
        </Text>
      </View>
    </View>
  )
}