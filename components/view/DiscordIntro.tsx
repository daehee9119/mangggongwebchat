import DiscordIcon from '@/public/images/discord-icon-negative.png';
import Image from 'next/image';
import { Slide } from 'react-awesome-reveal';

const DiscordIntro = () => {
  return (
    <section
      id="discordIntro"
      className="middle-block-container"
      data-testid="discord-intro-container"
    >
      <Slide direction="up">
        <div className="flex justify-center align-middle">
          <div className="max-w-full md:max-w-[768px]">
            <h6 className="pb-[0.7rem] font-UhBeeGmin2Bold text-lg leading-[1.18] text-frog-light sm:text-xl md:text-2xl">
              맹꽁이랑 디스코드 하지 않을래?
            </h6>
            <p className="py-[0.75rem] px-0 text-sm md:text-md md:text-lg">
              맹꽁의 트위치 방송 알림을 받고 싶다고?
              <br />
              맹꽁의 일상 사진들이 올라오는 게시판이 어디냐구?
              <br />
              가끔 진행되는 전화 데이트가 어디서 열리냐구?
              <br />
              요기 아래 링크를 눌러봐!
            </p>
            <div className="flex justify-center">
              <a href="https://discord.gg/7UTuN5JV" target={'_blank'}>
                <button className="mt-[0.625rem] ml-[20px] flex w-[200px] max-w-[180px] flex-wrap justify-center rounded bg-discord-blue py-[13px] px-0 align-middle shadow-normal transition-all duration-300 ease-in-out hover:bg-frog-light lg:max-w-full">
                  <div className="mt-[2px]">
                    <Image src={DiscordIcon} alt="discord icon" width={20} height={20} />
                  </div>
                  <span className="ml-2 font-UhBeeGmin2Bold text-[1rem] text-white">DISCORD</span>
                </button>
              </a>
            </div>
          </div>
        </div>
      </Slide>
    </section>
  );
};
export default DiscordIntro;
