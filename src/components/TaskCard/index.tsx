import React from "react";
import { Text, View } from "react-native";
import { Task } from "../../screens/home";
import { CheckBox } from "../Checkbox";
import { DeleteButton } from "../DeleteButton";
import { styles } from "./styles";

interface TaskCardProps {
  item: Task
  removeTaskFunction: (taskName: string) => void
  finishTaskFunction: (taskName: string) => void
}

export function TaskCard({ item, removeTaskFunction, finishTaskFunction }: TaskCardProps) {
  return (
    <View style={styles.container}>
      <CheckBox isActive={item.isFinished} onPress={() => finishTaskFunction(item.title)} />

      <Text 
        style={item.isFinished ? styles.finishedTaskTitle : styles.title} 
        numberOfLines={2}
      >
        {item.title}
      </Text>

      <DeleteButton onPress={() => removeTaskFunction(item.title)} />
    </View>
  )
}