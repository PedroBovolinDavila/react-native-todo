import { TouchableOpacity, TouchableOpacityProps } from "react-native";

import TrashSvg from '../../assets/trash.svg'

export function DeleteButton({ onPress, ...rest }: TouchableOpacityProps) {
  return (
    <TouchableOpacity onPress={onPress} style={{ marginLeft: 8 }} {...rest}>
      <TrashSvg />
    </TouchableOpacity>
  )
}