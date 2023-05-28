import Intro from '../components/Intro/Intro';
import InputForURL from '../components/InputForURL/InputForURL';
import LinkShortList from '../components/LinkShortList/LinkShortList';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Intro />
      <InputForURL />
      <LinkShortList />
    </div>
  );
};

export default Main;
