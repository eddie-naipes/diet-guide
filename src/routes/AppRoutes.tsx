import {createNativeStackNavigator} from "@react-navigation/native-stack";
import {Home} from "@screens/home/Home";
const {Navigator, Screen} = createNativeStackNavigator()

export const AppRoutes = () => {
    return (
        <Navigator screenOptions={{headerShown: false}}>
            <Screen
                name={"home"}
                component={Home}
            />
        </Navigator>
    );
};