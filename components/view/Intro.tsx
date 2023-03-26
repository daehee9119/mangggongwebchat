import Modal from '@/components/global/Modal';
import MangggongIntro from '@/public/images/mangggong-intro.png';
import TwitchIcon from '@/public/images/twitch-icon-negative.png';
import YoutubeIcon from '@/public/images/youtube-icon-negative.svg';
import { getInitialErrorState } from '@/utils/configs/defaultPayload';
import Image from 'next/image';
import { useState } from 'react';
import { Fade } from 'react-awesome-reveal';
import { CSSTransition } from 'react-transition-group';

const Intro = () => {
  const [errorState, setErrorState] = useState(getInitialErrorState());

  const handleErrorModalClose = () => {
    setErrorState(getInitialErrorState());
  };

  return (
    <section id="intro" className="right-block-container" data-testid="intro-container">
      <Fade direction="right">
        <div className="flex justify-between align-middle">
          <div className="relative w-1/2 pb-[4rem]">
            <h6
              className="font-UhBeeGmin2Bold text-lg leading-[1.18] text-frog-light sm:text-xl md:text-2xl"
              data-testid="intro-title"
            >
              맹꽁이와 함께
              <br />
              세상을 탐험해봐요!
            </h6>
            <p
              className="mx-0 mt-[1.5rem] mb-[2rem] text-[21px] leading-[1.41] text-frog"
              data-testid="intro-content"
            >
              트위치 스트리머 맹꽁은 비가 오면 울지만 그것은 맹꽁이 있는 현재 위치 기준이랍니다.
              <br />
              그리고 맹꽁은 3자매 중 막내여서 집안에서 완전 아가 취급 받고 다닌답니다?
              <br />
              무슨 개소리냐구요? 직접 방송을 들으며 확인해보아요!
            </p>
            <div className="flex max-w-[80%] justify-between" data-testid={'intro-button-wrapper'}>
              <a href="https://twitch.tv/mangggong0831" target={'_blank'}>
                <button className="mt-[0.625rem] ml-[20px] flex w-[200px] max-w-[180px] flex-wrap justify-center rounded bg-twitch-purple py-[13px] px-0 align-middle shadow-normal transition-all duration-300 ease-in-out hover:bg-frog-light lg:max-w-full">
                  <div className="mt-[2px]">
                    <Image
                      src={TwitchIcon}
                      alt="twitch icon"
                      width={20}
                      height={20}
                      data-testid="intro-picture"
                    />
                  </div>
                  <span className="ml-2 font-UhBeeGmin2Bold text-[1rem] text-white">TWITCH</span>
                </button>
              </a>
              <a
                onClick={() => {
                  setErrorState({
                    isModalActive: true,
                    title: '이런..아직 유튜브가 없군요',
                    content:
                      '맹꽁은 3월에 유튜브를 만들어준다고 약속했었죠. 하지만 약속을 안 지키는 것 또한 맹꽁방송의 매력입니다!',
                  });
                }}
              >
                <button className="mt-[0.625rem] ml-[20px] flex w-[200px] max-w-[180px] flex-wrap justify-center rounded bg-youtube-red py-[13px] px-0 align-middle shadow-normal transition-all duration-300 ease-in-out hover:bg-frog-light lg:max-w-full">
                  <div className="mt-[2px]">
                    <Image src={YoutubeIcon} alt="youtube icon" width={20} height={20} />
                  </div>
                  <span className="ml-2 font-UhBeeGmin2Bold text-[1rem] text-white">YOUTUBE</span>
                </button>
              </a>
            </div>
          </div>
          <div className="w-[49%]">
            <Image
              src={MangggongIntro}
              alt="intro"
              style={{ objectFit: 'fill' }}
              sizes="100vh, 100vw"
            />
          </div>
        </div>
      </Fade>
      <CSSTransition
        in={errorState.isModalActive}
        timeout={300}
        classNames="overlay-transition"
        className="overlay-transition"
        unmountOnExit
        appear
      >
        <Modal
          onErrorModalClose={handleErrorModalClose}
          title={errorState.title}
          content={errorState.content}
        />
      </CSSTransition>
    </section>
  );
};
export default Intro;
