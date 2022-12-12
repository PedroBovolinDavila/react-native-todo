import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: THEME.colors.gray400,
    width: '100%',
    padding: 12,
    marginBottom: 8,
    borderRadius: 8,
    flexDirection: 'row',
    alignItems: 'center',
  },
  title: {
    color: THEME.colors.gray100,
    flex: 1,
    fontSize: THEME.fontSizes.md,
  },
  finishedTaskTitle: {
    color: THEME.colors.gray300,
    flex: 1,
    fontSize: THEME.fontSizes.md,
    textDecorationLine: 'line-through'
  }
})