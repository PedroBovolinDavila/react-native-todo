import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: 22,
    height: 22,
    borderRadius: 11,
    borderWidth: 1,
    borderColor: THEME.colors.blue,
    marginRight: 8,
    borderStyle: 'solid',
    alignItems: 'center',
    justifyContent: 'center',
    
  }
})