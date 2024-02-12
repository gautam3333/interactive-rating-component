import { useState } from 'react';
import Rating from './components/Rating';
import ThankYou from './components/ThankYou';

export default function App() {
  const [submitted, setSubmitted] = useState(false);
  const [rate, setRate] = useState('');
  console.log(rate);

  return (
    <main>
      {submitted ? (
        <ThankYou rate={rate} />
      ) : (
        <Rating
          submitted={submitted}
          setSubmitted={setSubmitted}
          rate={rate}
          setRate={setRate}
        />
      )}
    </main>
  );
}
