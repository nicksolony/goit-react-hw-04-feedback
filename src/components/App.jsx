import { useState } from "react";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";


export const App = () => {

  const [reviews, setReviews] = useState({
      good: 0,
      neutral: 0,
      bad: 0,
  });
 

  // state = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  // };

  let onLeaveFeedback = (option) => {
    
    let id = option.target.innerHTML;
    
    setReviews(prevState => {
        return {
          ...prevState,
          [id]: prevState[id] + 1
        };
      });
  };
  
    let options = Object.keys(reviews);
    let total = Object.values(reviews).reduce((a, b) => a + b, 0);
    let positivePercentage = reviews.good ? reviews.good / total * 100 : 0;
    
    return (
      <>
        <Section title="Please leave feedback" >
        <FeedbackOptions options={options} onLeaveFeedback={onLeaveFeedback}>

        </FeedbackOptions>
        <Statistics options={options} total={total} positivePercentage={positivePercentage} state={reviews}>
        </Statistics>
        </Section>
      </>  
    )
  };
