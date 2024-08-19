import {StatusBar} from 'react-native';
import {ActivityIndicator, Text, View} from 'react-native';
import {NunitoSans_400Regular, NunitoSans_700Bold, useFonts} from "@expo-google-fonts/nunito-sans";
import {ThemeProvider} from "styled-components";
import theme from '@theme/styles';
import {Routes} from "@routes/Routes";
import {Home} from "@screens/home/Home";

export default function App() {

  const [fontsLoaded] = useFonts({
    NunitoSans_400Regular,
    NunitoSans_700Bold,
  });

  if (!fontsLoaded) {
    return <ActivityIndicator size="large"/>;
  }


  return (
      <ThemeProvider theme={theme}>
        <StatusBar
            barStyle={"dark-content"}
            backgroundColor={"transparent"}
            translucent
        />
          <Home/>
      </ThemeProvider>

  );
}

