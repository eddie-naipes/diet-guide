import { Text } from "react-native"
import { Container, Score, ContainerScore, ContainerArrow, ArrowIcon, Title } from './styles'
import { SCORE_RATING } from "@utils/constants/constants"

export const StatusCard = () => {
    return (
        <Container>
            <ContainerArrow>
                <ArrowIcon />
            </ContainerArrow>
            <ContainerScore>
                <Score>90.86%</Score>
                <Title>{SCORE_RATING}</Title>
            </ContainerScore>
        </Container>
    )

}