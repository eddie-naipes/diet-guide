import styled from "styled-components/native";
import { CookingPot } from "phosphor-react-native";

export const Container = styled.View`
    align-items: center;
    justify-content: space-between;
    flex-direction: row;
    padding: 15px;
    margin: 24Px 0;
`;

export const CookingLogo = styled(CookingPot).attrs(({ theme }) => {
    return {
        size: 32,
    };
})``;


export const ContainerLogo = styled.View`
    align-items: center;
`;

export const PhotoProfile = styled.Image`
    width: 50px;
    height: 50px;
    border-radius: 100%;
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_2};
`;