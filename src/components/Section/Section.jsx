import { Container, Title } from "./Section.styled";


export const Section = ({ title, children }) => {
    return (
        <Container>
            <Title>{title}</Title>
            <div>{children}</div>
        </Container>
    );
};