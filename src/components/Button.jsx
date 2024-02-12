export default function Button({ num, rate, setRate }) {
  return (
    <button
      onClick={() => setRate(num)}
      className='text-sm font-bold text-light-grey bg-dark-blue w-10 h-10 rounded-full transition-all hover:bg-orange hover:text-white focus:bg-medium-grey focus:text-white'
    >
      {num}
    </button>
  );
}
