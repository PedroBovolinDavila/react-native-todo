import { StyleSheet } from "react-native";
import { THEME } from "../../theme";

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    justifyContent: 'space-between',
    alignItems: 'center',
    flexDirection: 'row',
    marginTop: 32,
    marginBottom: 20
  },
  infoText: {
    fontWeight: 'bold',
    fontSize: THEME.fontSizes.md
  },
  numberText: {
    marginLeft: 8,
    borderRadius: 9999,
    color: THEME.colors.gray200,
    backgroundColor: THEME.colors.gray400,
    textAlign: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2
  },
  textContainer: {
    flexDirection: 'row',
    alignItems: 'center'
  }
})