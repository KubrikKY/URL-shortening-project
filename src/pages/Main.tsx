import Intro from '../components/Intro/Intro';
import InputForURL from '../components/InputForURL/InputForURL';
import LinkShortList from '../components/LinkShortList/LinkShortList';
import Statistics from '../components/Statistics/Statistics';
import './Main.scss';

const Main = () => {
  return (
    <div className="Main">
      <Intro />
      <InputForURL />
      <LinkShortList />
      <Statistics />
    </div>
  );
};

export default Main;
