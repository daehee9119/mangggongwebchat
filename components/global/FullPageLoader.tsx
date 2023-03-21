import LoadingAnimation from '@/public/images/mangggong-helltaker.gif';
import Image from 'next/image';

const FullPageLoader = () => {
  return (
    <div className="fixed inset-0 z-10 flex h-full w-full items-center justify-center bg-blue-300/80">
      <div className="absolute h-[80px] w-[80px] sm:h-[150px] sm:w-[150px]">
        <Image
          src={LoadingAnimation}
          alt="loading..."
          fill
          sizes="100vw, 100hw"
          style={{ objectFit: 'contain' }}
          priority={false}
        />
      </div>
    </div>
  );
};

export default FullPageLoader;
