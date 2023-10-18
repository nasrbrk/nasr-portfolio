import "./hero.scss";

export default function Hero() {
  return (
      <div className="hero">
          <div className="textContainer">
              <h2>Mohamed Nasr</h2>
              <h1>Web developer and UI designer</h1>
              <div className="buttons">
                    <button>See </button>
                    <button>Contact</button>
              </div>
          </div>
      <div className="heroImage">
        <img src="/hero.png" alt="" />
      </div>
    </div>
  );
}