import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    marginTop: -25,
    paddingHorizontal: 24,
    flexDirection: 'row',
  },
  input: {
    height: 55,
    backgroundColor: THEME.colors.gray500,
    borderColor: THEME.colors.gray700,
    borderWidth: 1,
    borderRadius: 6,
    color: THEME.colors.gray100,
    padding: 16,
    fontSize: THEME.fontSizes.lg,
    flex: 1,
    marginRight: 8
  },
  button: {
    width: 55,
    borderRadius: 6,
    backgroundColor: THEME.colors.blueDark,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: THEME.colors.white,
    fontSize: THEME.fontSizes.lg
  }
})