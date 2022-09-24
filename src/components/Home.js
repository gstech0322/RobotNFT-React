import HomeCharacter1 from '../assets/img/homeCharacter1.png';
import HomeCharacter2 from '../assets/img/homeCharacter2.png';

const Home = () => {
  return (
    <div id="home">
      <div className="home">
        <div className="mainContainer">
          <div className="home-content">
            <div>Heaven or Hell</div>
            <div>It’s your choice</div>
          </div>
          <div className="home-characters flex justifyBetween">
            <div>
              <img src={HomeCharacter1} alt="HomeCharacter1" />
            </div>
            <div>
              <img src={HomeCharacter2} alt="HomeCharacter2" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
