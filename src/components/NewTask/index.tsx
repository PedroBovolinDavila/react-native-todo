import { TextInput, TextInputProps, TouchableOpacity, View } from "react-native";
import { THEME } from "../../theme";
import { styles } from "./styles";

import PlusIcon from '../../assets/plus.svg'
import React, { useState } from "react";

interface NewTaskProps {
  onChangeText:  React.Dispatch<React.SetStateAction<string>>
  createTaskFuntion: () => void
}

export function NewTask({ createTaskFuntion, onChangeText }: NewTaskProps) {
  return (
    <View style={styles.container}>
      <TextInput 
        style={styles.input} 
        placeholder="Adicione uma nova tarefa"
        placeholderTextColor={THEME.colors.gray300}
        onChangeText={onChangeText}
      />

      <TouchableOpacity style={styles.button} onPress={createTaskFuntion}>
        <PlusIcon width={16} height={16} />
      </TouchableOpacity>
    </View>
  )
}