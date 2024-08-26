import { Container } from "@screens/home/styles";
import { Header } from "@components/header/Header";
import { StatusCard } from "@components/status-card/Status-card";

export const Home = () => {
    return (
        <Container>
            <Header />
            <StatusCard />
        </Container>
    );
};