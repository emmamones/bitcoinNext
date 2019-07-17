import Link from "next/link";

const Navegacion = () => (
  <nav className="navbar navbar-expand navbar-dark bg-warning">
    <div className="container">
      <Link href="/">
        <a href="" className="navbar-brad">
          TodoBitCoin
        </a>
      </Link>
      <div className="collapse navbar-collapse">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item">
            <Link href="/">
              <a className="nav-link">Inicio</a>
            </Link>
          </li>
          <li className="nav-item">
            <Link href="/nosotros">
              <a className="nav-link">Nosotros</a>
            </Link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
);
export default Navegacion;

// <style jsx>{`
// ul {
//   background-color: #333;
//   list-style: none;
//   display:flex;
//   color:white;
// }
// ul li{
//     padding:.5rem 0;
//     margin-right:1rem;
// }
// ul li a{
//   font-size:1.2rem;
//   color:white;
//   text-decoration:none;
// }
// ul li a:active,  ul li a:hoover{
//  text-decoration:underline overline dotted red;
// }

// `}</style>
