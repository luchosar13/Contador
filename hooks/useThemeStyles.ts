import { StyleSheet } from "react-native";
import { lightTheme, darkTheme } from "../constants/themes";

export function useThemeStyles(isDark: boolean) {
  const theme = isDark ? darkTheme : lightTheme;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: theme.background,
      justifyContent: "center",
      alignItems: "center",
      padding: 20,
    },
    card: {
      backgroundColor: theme.card,
      borderRadius: 20,
      padding: 30,
      alignItems: "center",
      width: "100%",
      maxWidth: 300,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.3,
      shadowRadius: 4,
      elevation: 5,
    },
    counter: {
      fontSize: 60,
      fontWeight: "bold",
      color: theme.text,
      marginBottom: 20,
    },
    button: {
      backgroundColor: theme.button,
      paddingVertical: 12,
      paddingHorizontal: 20,
      borderRadius: 10,
      marginTop: 10,
      width: "100%",
      alignItems: "center",
    },
    buttonText: {
      color: "#fff",
      fontSize: 18,
      fontWeight: "bold",
    },
    warning: {
      marginTop: 15,
      fontSize: 14,
      color: "red",
      fontWeight: "600",
    },
  });
}
