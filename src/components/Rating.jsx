import Button from './Button';
import { rating } from '../data/ratings';

export default function Rating({ submitted, setSubmitted, rate, setRate }) {
  return (
    <div className='bg-[#1a1f27] max-w-[330px] px-6 py-8 rounded-xl'>
      <div className='bg-dark-blue p-2 rounded-full w-10 h-10 flex items-center justify-center mb-4'>
        <img
          src='/images/icon-star.svg'
          alt='icon star'
          className='object-cover'
        />
      </div>
      <div className='mb-8'>
        <h1 className='text-2xl text-white font-bold mb-4'>How did we do?</h1>
        <p className='text-sm text-light-grey'>
          Please let us know how we did with your support request. All feedback
          is appreciatd to help us improve our offering!
        </p>
      </div>
      <ul className='flex gap-5  mb-6'>
        {rating.map((num) => (
          <li className='' key={num}>
            <Button num={num} rate={rate} setRate={setRate} />
          </li>
        ))}
      </ul>
      <div>
        <button
          onClick={() => setSubmitted((s) => !s)}
          className='bg-orange w-full rounded-full py-3 text-white font-bold uppercase text-sm tracking-widest hover:bg-white hover:text-orange transition-all'
        >
          Submit
        </button>
      </div>
    </div>
  );
}
