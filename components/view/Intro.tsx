import Pond from '@/public/images/pond.png';
import Image from 'next/image';
import { Fade } from 'react-awesome-reveal';

const Intro = () => {
  return (
    <section className="right-block-container">
      <Fade direction="right">
        <div className="flex  justify-between align-middle">
          <div className="relative w-1/3 max-w-[540px] pb-[4rem]">
            <h6 className="md:text-2xml text-lg font-bold leading-[1.18] text-frog-light sm:text-xl">
              맹꽁이와 함께
              <br />
              세상을 탐험해봐요!
            </h6>
            <p className="mx-0 mt-[1.5rem] mb-[2rem] text-[21px] leading-[1.41] text-frog">
              트위치 스트리머 맹꽁은 비가 오면 울지만 그것은 맹꽁이 있는 현재 위치 기준이랍니다.
              무슨 개소리냐구요? 직접 방송을 들으며 확인해보아요!
            </p>{' '}
          </div>
          <div className="w-1/3">
            <Image src={Pond} alt="pond" style={{ objectFit: 'cover' }} sizes="100vh, 100vw" />
          </div>
        </div>
      </Fade>
    </section>
  );
};
export default Intro;
