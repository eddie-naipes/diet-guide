import styled from "styled-components/native";
import { ArrowUpRight } from "phosphor-react-native"


export const Container = styled.View`
    background-color: ${({ theme }) => theme.COLORS.GREEN_LIGHT};
    padding: 15px;
    border-radius: 8px;
`

export const Score = styled.Text`
    font-size: ${({ theme }) => theme.FONT_SIZE.SIZE_32};
    font-family: ${({ theme }) => theme.FONT_FAMILY.BOLD};
`

export const ContainerScore = styled.View`
    align-items: center;
    width: 100%;
    margin-bottom: 8px;
`

export const ContainerArrow = styled.View`
    width: 100%;
    align-items: flex-end;
`

export const ArrowIcon = styled(ArrowUpRight).attrs(({ theme }) => ({
    size: 24,
    color: theme.COLORS.GREEN_DARK
}))``


export const Title = styled.Text`
 font-size: ${({ theme }) => theme.FONT_SIZE.SIZE_14};
 color: ${({ theme }) => theme.COLORS.GRAY_2};
 margin-top: 5px;
`