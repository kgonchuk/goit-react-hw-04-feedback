import Section from 'components/Section/Section';
import Statistics from 'components/Statics/Statics';
import FeedbackOptions from 'components/FeedbackOptions/FeedbackOptions';
import Notification from 'components/Notification/Notification';
import { useState } from 'react';

export const App = () => {
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleClick = state => {
    switch (state) {
      case 'good':
        setGood(prevGood => prevGood + 1);
        break;
      case 'neutral':
        setNeutral(prevNeutral => prevNeutral + 1);
        break;
      case 'bad':
        setBad(prevBad => prevBad + 1);
        break;
      default:
        break;
    }
  };
  const countTotalFeedback = () => {
    return good + neutral + bad;
  };
  const countPositiveFeedbackPercentage = () => {
    const total = countTotalFeedback();
    return Math.round((good / total) * 100) || 0;
  };
  // const options = Object.keys({ good, bad, neutral });
  const totalFeedback = countTotalFeedback();
  const percentagePositive = countPositiveFeedbackPercentage();
  return (
    <div>
      <Section title="Please leave Feedback">
        <FeedbackOptions
          options={Object.keys({ good, neutral, bad })}
          onLeaveFeeedback={handleClick}
        />
      </Section>
      {totalFeedback ? (
        <Section title="Stastistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={totalFeedback}
            positivePercentage={percentagePositive}
          />
        </Section>
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
