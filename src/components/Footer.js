import Twitter from '../assets/img/twitter.svg';
import Discord from '../assets/img/discord.svg';
import Boat from '../assets/img/boat.svg';

const Footer = () => {
  return (
    <div className="footer">
      <div className="h-100 bg-yellow-dark flex itemsCenter">
        <div className="mainContainer flex justifyBetween">
          <div className="bg-gray logo"></div>
          <div className="text-white fw-bold f-24 flex gap-33 footerMenu itemsCenter">
            <div>
              <a href="#home">Home</a>
            </div>
            <div>
              <a href="#mint">Mint</a>
            </div>
            <div>
              <a href="#roadmap">Roadmap</a>
            </div>
            <div>
              <a href="#faq">FAQ</a>
            </div>
          </div>
          <div className="flex justifyCenter gap-16 itemsCenter">
            <div>
              <a href="#">
                <img className="mt-10" src={Twitter} alt="Twitter" />
              </a>
            </div>
            <div>
              <a href="#">
                <img className="mt-14" src={Discord} alt="Discord" />{' '}
              </a>
            </div>
            <div>
              <a href="#">
                <img className="mt-14" src={Boat} alt="Boat" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="h-71 flex itemsCenter">
        <div className="mainContainer flex justifyBetween lineHeight-130 f-16 text-white">
          <div>2021, All Rights Reserved</div>
          <div className="pointer">Privacy Policy</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
