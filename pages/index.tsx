import Header from '@/components/global/Header';
import Chatting from '@/components/view/Chatting';
import Intro from '@/components/view/Intro';

const Home = () => {
  return (
    <div className="common-container">
      <Header />
      <div className="common-container">
        <Intro />
        <Chatting />
      </div>
    </div>
  );
};

export default Home;
