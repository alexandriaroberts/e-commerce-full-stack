import MaxWidthWrapper from '@/components/MaxWidthWrapper';

export default function Home() {
  return (
    <MaxWidthWrapper>
      <div className='py-20 mx-auto text-center flex flex-col items-center max-w-3xl'>
        <h1 className='text-4xl font-bold'>
          Your markeplace<span className='text-blue400'>digital assets</span>
        </h1>
      </div>
    </MaxWidthWrapper>
  );
}
