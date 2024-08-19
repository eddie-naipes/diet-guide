import {Text} from "react-native";
import {Container} from "@components/header/styles";
import {CookingPot} from "phosphor-react-native";

export const Header = () => {
    return (
        <Container>
            <CookingPot size={32}/>
            <Text>Vamos lá</Text>
        </Container>
    );
};