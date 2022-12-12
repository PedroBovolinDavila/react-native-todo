import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 48,
    borderTopWidth: 1,
    borderTopColor: THEME.colors.gray400
  },
  title: {
    fontWeight: 'bold',
    marginTop: 16,
    color: THEME.colors.gray300,
    fontFamily: THEME.fonts.bold
  },
  subTitle: {
    color: THEME.colors.gray300,
    marginTop: 2
  }
})