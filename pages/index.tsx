import Header from '@/components/global/Header';
import Chatting from '@/components/view/Chatting';
import DiscordIntro from '@/components/view/DiscordIntro';
import Intro from '@/components/view/Intro';

const Home = () => {
  return (
    <div className="common-container">
      <Header />
      <Intro />
      <DiscordIntro />
      <Chatting />
    </div>
  );
};

export default Home;
