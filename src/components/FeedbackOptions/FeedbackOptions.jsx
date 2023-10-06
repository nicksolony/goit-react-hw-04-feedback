import { Container, FeedbackOption } from "./FeedbackOptions.styled";

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
    <Container>
        {options.map((option) => {
            return (
                <FeedbackOption key={option} onClick={onLeaveFeedback}>{option}</FeedbackOption>
            )
        })
            }
    </Container>
    );
};
