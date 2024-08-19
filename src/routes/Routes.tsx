import {View} from "react-native";
import {NavigationContainer} from "@react-navigation/native";
import {AppRoutes} from "@routes/AppRoutes";

export const Routes = () => {


    return (
        <View>
            <NavigationContainer>
                <AppRoutes/>
            </NavigationContainer>
        </View>
    );
};