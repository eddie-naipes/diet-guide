import { Text } from "react-native";
import { Container, CookingLogo, ContainerLogo, PhotoProfile } from "@components/header/styles";
import { DAILY_DIET } from "@utils/constants/constants"

export const Header = () => {
    return (
        <Container>
            <ContainerLogo >
                <CookingLogo size={32} />
                <Text>{DAILY_DIET}</Text>
            </ContainerLogo>
            <PhotoProfile
                source={{ uri: "https://avatars.githubusercontent.com/u/85641871?v=4" }}
            />
        </Container>
    );
};