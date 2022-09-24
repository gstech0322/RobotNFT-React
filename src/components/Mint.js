import ArrowLeft from '../assets/img/arrowLeft.svg';
import ArrowRight from '../assets/img/arrowRight.svg';
import MintCharacter1 from '../assets/img/mintCharacter1.png';
import MintCharacter2 from '../assets/img/mintCharacter2.png';
import MintCharacter3 from '../assets/img/mintCharacter3.png';

const Mint = () => {
  return (
    <div id="mint">
      <div className="mint">
        <div className="mainContainer">
          <div className="text-yellow-dark text-center pt-48 f-72 fw-700">Heaven or Hell?</div>
          <div className="text-white text-center pt-24 f-24 fw-600 lineHeight-100">
            The two sides are on the brink of war...
          </div>
          <div className="text-white text-center f-24 fw-600 lineHeight-100">
            It is time to make your choice...
          </div>
          <div className="text-white text-center f-24 fw-600 lineHeight-100">Heaven or Hell?</div>
          <div className="slider">
            <div className="arrowIcons pt-10 flex gap-33 justifyEnd">
              <div>
                <img src={ArrowLeft} alt="ArrowLeft" />
              </div>
              <div>
                <img src={ArrowRight} alt="ArrowRight" />
              </div>
            </div>
            <div className="mint-characters flex justifyBetween pt-60">
              <div>
                <img src={MintCharacter1} alt="MintCharacter1" />
              </div>
              <div>
                <img src={MintCharacter2} alt="MintCharacter2" />
              </div>
              <div>
                <img src={MintCharacter3} alt="MintCharacter3" />
              </div>
            </div>
            <div className="mint-footer flex justifyBetween pt-100">
              <div>
                <div className="text-yellow-dark fw-bold f-42 lineHeight-100 text-center">
                  Heaven
                </div>
                <div className="text-white fw-bold f-18 lineHeight-100 text-center lineHeight-130 pt-24">
                  Loyal Angelic servants of God who will stand by heavens side in the fight against
                  the banished Angels for the universe and beyond..
                </div>
              </div>
              <div className="flex justifyCenter">
                <button className="landingYellowButton flex itemsCenter justifyCenter f-24 fw-400 text-white ff-kanit pointer">
                  Mint Now!
                </button>
              </div>
              <div>
                <div className="text-yellow-dark fw-bold f-42 lineHeight-100 text-center">Hell</div>
                <div className="text-white fw-bold f-18 lineHeight-100 text-center lineHeight-130 pt-24">
                  Banished Angels who have planned a coup against the servants of God in order to
                  regain control of the entire universe and beyond.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mint;
