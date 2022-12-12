import { useState } from "react";
import { TouchableOpacity, TouchableOpacityProps, View } from "react-native";

import CheckSvg from '../../assets/check.svg'
import { THEME } from "../../theme";
import { styles } from "./styles";

interface CheckBoxProps extends TouchableOpacityProps {
  isActive: boolean
}

export function CheckBox({ isActive, onPress }: CheckBoxProps) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View 
        style={isActive ? [styles.container, { backgroundColor: THEME.colors.blue }] : styles.container}
      >
        {isActive && ( <CheckSvg /> )}
      </View>
    </TouchableOpacity>
  )
}