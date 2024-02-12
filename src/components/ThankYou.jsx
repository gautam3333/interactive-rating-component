export default function ThankYou({ rate }) {
  return (
    <div className='bg-[#1a1f27] max-w-[330px] px-6 py-8 rounded-xl'>
      <div className='flex flex-col justify-center items-center mb-5'>
        <img
          src='/images/illustration-thank-you.svg'
          alt='illustration thank you'
          className='object-cover block h-24 mb-7'
        />

        <p className='text-orange text-sm py-2 px-3 bg-dark-blue rounded-full'>
          You selected {rate} out of 5
        </p>
      </div>
      <div>
        <h1 className='text-2xl text-center font-bold text-white mb-4'>
          Thank you!
        </h1>
        <p className='text-sm text-light-grey text-center'>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don&#39;t hesitate to get in touch!
        </p>
      </div>
    </div>
  );
}
