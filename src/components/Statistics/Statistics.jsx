import { Notification } from "./Notification/Notification";
import { Container, Reviews, Review } from "./Statistics.styled"


export const Statistics = ({options, total, positivePercentage, state}) => {
    return (
        <Container>
            <h2>Statistics</h2>
            {total ? 
                <Reviews>
                {options.map((option) => {
                    return (
                        <Review key={option}>
                            {option}: {state[option]}</Review>
                    )
                })
                }
                <li>Total: {total}</li>
                <li>Positive feedback: {positivePercentage.toFixed(0)}%</li>
                </Reviews>
                : <Notification message="There is no feedback"></Notification>
            }
            
        </Container>
    );
};