import { useFonts, Inter_400Regular, Inter_700Bold } from "@expo-google-fonts/inter";
import { ActivityIndicator, StatusBar } from "react-native";

import { Home } from "./src/screens/home";

export default function App() {
  const [fontsLoaded] = useFonts({
    Inter_400Regular, 
    Inter_700Bold
  })

  if (!fontsLoaded) {
    return (
      <ActivityIndicator style={{ flex: 1 }} size={24} />
    )
  }

  return (
    <>
      <StatusBar 
        barStyle="light-content"
        backgroundColor="transparent"
        translucent
      />

      <Home />
    </>
  );
}
