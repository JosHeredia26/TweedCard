import avatar from "../static/images/avatar.png";
import gallery from "../static/images/gallery.png";
import heart from "../static/icons/heart.svg";

function Card() {
  return (
    <div>
      <img src={avatar} alt="" />
      <div>
        <div>
          <div>
            <p></p>
            <p></p>
          </div>
          <p></p>
        </div>
        <div>
          <img src={gallery} alt="" />
          <div>
            <p></p>
            <p></p>
          </div>
        </div>
        <div>
          <img src={heart} alt="" />
          <p>250</p>
        </div>
      </div>
    </div>
  );
}

export default Card;
