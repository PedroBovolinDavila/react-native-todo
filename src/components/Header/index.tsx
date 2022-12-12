import { View } from "react-native";

import Logo from '../../assets/logo.svg'

import { styles } from "./styles";

export function Header() {
  return (
    <View style={styles.container}>
      <Logo width={110} height={30} />
    </View>
  )
}