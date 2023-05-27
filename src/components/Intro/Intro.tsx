import './Intro.scss';

const Intro: React.FC = () => {
  const getStartClickHandler = (): void => {
    const elem: HTMLInputElement | null =
      document.querySelector('.shortUrlInput');
    elem?.focus();
  };
  return (
    <div className="Intro">
      <div className="IntroText">
        <h1>More than just shorter links</h1>
        <p>
          Build your brand's recognitionand get detailed insightson how your
          links and perfoming.
        </p>
        <button onClick={getStartClickHandler}>Get started</button>
      </div>
    </div>
  );
};

export default Intro;
