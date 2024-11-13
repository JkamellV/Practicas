import './App.css';
import home from './imagenes/Gaslur.png';

function App() {
  return (
    <>
      <header>
        <div className="content">
          <div className="image">
            <img src={home} alt="" />
          </div>
          <nav>
            <ul>
              <li>
                <a href="#">HOME</a>
              </li>
              <li>
                <a href="#">MY PROFILE</a>
              </li>
              <li>
                <a href="#">ACTIVITY</a>
              </li>
              <li>
                <a href="#">HOT IT WORKS</a>
              </li>
            </ul>
          </nav>
          <div className="contlogin">
            <button className="Create"> Create</button>
            <button className="Ingresar">Sing in</button>
          </div>
        </div>
      </header>
      <div className="content1">
        <div className="content2">
          <h1 className="tipoletras">
            Discover, collect, <br /> and charity in <br /> extraordinary NFT{' '}
            <br />
            marketplace
          </h1>
          <div className="Subcontenedor">
            <p>
              In aenean posuere lorem risus nec. Tempor <br /> tincidunt aenean
              purus purus vestibulum nibh mi <br />
              venenatis
            </p>
          </div>
        </div>
      </div>
      <div className="contenedorpp">
        <div className="contenedorimg">
          <p> hola </p>
          <div className="subcontenedorimg"></div>
        </div>
      </div>
    </>
  );
}

export default App;
