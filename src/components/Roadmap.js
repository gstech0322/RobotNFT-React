import RoadmapCharacter1 from '../assets/img/roadmapCharacter1.png';
import RoadmapCharacter2 from '../assets/img/roadmapCharacter2.png';
import RoadmapCharacter3 from '../assets/img/roadmapCharacter3.png';
import RoadmapCharacter4 from '../assets/img/roadmapCharacter4.png';
import RoadmapCharacter5 from '../assets/img/roadmapCharacter5.png';
import RoadmapCharacter6 from '../assets/img/roadmapCharacter6.png';

const Roadmap = () => {
  return (
    <div id="roadmap">
      <div className="roadmap">
        <div className="mainContainer-roadmap">
          <div className="text-yellow-dark fw-700 lineHeight-100 f-72 text-center pt-100">
            ROADMAP
          </div>
          <div className="pt-150 flex justifyBetween">
            <div className="w-446">
              <div className="h-446">
                <div className="text-yellow-dark fw-bold lineHeight-100 f-48 text-center">
                  PRE LAUNCH
                </div>
                <div className="text-white fw-bold lineHeight-130 f-24 text-center pt-24">
                  We will reach out to seconday markets premint to try and receive approval so the
                  community can start trading the Divine collections instantly.
                </div>
              </div>
              <div className="h-446 pt-50">
                <img src={RoadmapCharacter2} alt="RoadmapCharacter2" />
              </div>
              <div className="h-446 pt-50">
                <div className="text-yellow-dark fw-bold lineHeight-100 f-48 text-center">
                  MERCH
                </div>
                <div className="text-white fw-bold lineHeight-130 f-24 text-center pt-24">
                  Exclusive merch drop for Divine Robot holders only. Hoodies, T-shirts and much
                  more
                </div>
              </div>
              <div className="h-446 pt-50">
                <img src={RoadmapCharacter4} alt="RoadmapCharacter4" />
              </div>
              <div className="h-446 pt-50">
                <div className="text-blue-dark fw-bold lineHeight-100 f-48 text-center">
                  DIVINE HUMANS
                </div>
                <div className="text-white fw-bold lineHeight-130 f-24 text-center pt-24">
                  Divine Humans. Owning 2 Divine Robots gives you the ability to create a Divine
                  Human for 0.25 SOL. The Divine Human have the chance of becoming Holy or Unholy
                  but also a half breed between the both.
                </div>
              </div>
              <div className="h-446 pt-50">
                <img src={RoadmapCharacter6} alt="RoadmapCharacter6" />
              </div>
            </div>
            <div className="roadmap-divider"></div>
            <div className="w-446">
              <div className="h-446">
                <img src={RoadmapCharacter1} alt="RoadmapCharacter1" />
              </div>
              <div className="h-446 pt-50">
                <div className="text-yellow-dark fw-bold lineHeight-100 f-48 text-center">
                  RELEASE
                </div>
                <div className="text-white fw-bold lineHeight-130 f-24 text-center pt-24">
                  The Release of 7666 Divine Robots starts. Minting begins on our website as
                  announced on discord with a cost of 0.99 SOL each.
                </div>
              </div>
              <div className="h-446 pt-50">
                <img src={RoadmapCharacter3} alt="RoadmapCharacter3" />
              </div>
              <div className="h-446 pt-50">
                <div className="text-blue-dark fw-bold lineHeight-100 f-48 text-center">
                  VC DAO & TOKEN
                </div>
                <div className="text-white fw-bold lineHeight-130 f-24 text-center pt-24">
                  Community Funds will be helt in the VC DAO meaning that you as a holder of a
                  Divine Robot has the ability to invest in new NFT Projects by simply voting with
                  your $DIVINE Tokens. You also receive a stake in the investment we make depending
                  on your $DIVINE Holdings.
                </div>
              </div>
              <div className="h-446 pt-50">
                <img src={RoadmapCharacter5} alt="RoadmapCharacter5" />
              </div>
              <div className="h-446 pt-50">
                <div className="text-blue-dark fw-bold lineHeight-100 f-48 text-center">
                  STAKING
                </div>
                <div className="text-white fw-bold lineHeight-130 f-24 text-center pt-24">
                  The work on a Staking structure begins with the DAO voting on different pools that
                  will be implemented. Holders will receive $DIVINE token through an airdrop that
                  can be used for staking and voting on the DAO.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Roadmap;
