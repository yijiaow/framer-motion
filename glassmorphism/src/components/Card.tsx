import { FaLinkedinIn, FaTwitter, FaInstagram } from 'react-icons/fa';

interface CardProps {}

const Card: React.FC<CardProps> = ({}) => {
  return (
    <div className="card">
      <div className="content">
        <div className="imgBx">
          <img src="/assets/user1.jpg" />
        </div>
        <div className="contentBx">
          <h3>
            Ted Morales
            <br />
            <span>Creative Designer</span>
          </h3>
        </div>
      </div>
      <ul className="socials">
        <li style={{ '--i': 1 } as React.CSSProperties}>
          <a href="#">
            <FaLinkedinIn aria-hidden="true" />
          </a>
        </li>
        <li style={{ '--i': 2 } as React.CSSProperties}>
          <a href="#">
            <FaTwitter aria-hidden="true" />
          </a>
        </li>
        <li style={{ '--i': 3 } as React.CSSProperties}>
          <a href="#">
            <FaInstagram aria-hidden="true" />
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Card;