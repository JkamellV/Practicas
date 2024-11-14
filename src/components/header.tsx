import { Link, useNavigate } from 'react-router-dom';
import home from '../imagenes/Group 1266.png';

export const Header = () => {
  const navigate = useNavigate();
  const clickbutton = () => {
    navigate('/create');
  };
  const ingresar = () => {
    navigate('/ingresar');
  };

  return (
    <header>
      <div className="content">
        <div className="image">
          <img src={home} alt="" />
        </div>
        <nav>
          <ul>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/myprofile">My profile</Link>
            </li>
            <li>
              <Link to="/actividad">ACTIVITY</Link>
            </li>
            <li>
              <Link to="/hotitworks">HOT IT WORKS</Link>
            </li>
          </ul>
        </nav>
        <div className="contlogin">
          <button className="Create" onClick={clickbutton}>
            Create
          </button>
          <button className="Ingresar" onClick={ingresar}>
            Sing in
          </button>
        </div>
      </div>
    </header>
  );
};
