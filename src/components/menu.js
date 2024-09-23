import Logo from "../assets/imgs/logo.svg";
import MenuIcon from "../assets/imgs/menu.svg";
import { useContext, useState } from "react";
import { DataContext } from "../context/dataContext";

export default function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  const data = useContext(DataContext);

  return (
    <>
      <menu>
        <button className="menu" onClick={() => setIsOpen(!isOpen)}>
          <img src={MenuIcon} alt="menu" />
        </button>
        <a href="/"><img src={Logo} alt="logo" /></a>
      </menu>
      {isOpen && (
        <div className="menu-container">
          <ul>
            <li><a href="/">home</a></li>
            {Object.keys(data).map((item, i) => (
              <li key={i}>
                <a href={`/${item}`}>{item}</a>
              </li>
            ))}
          </ul>
        </div>
      )}
      <div className="info-div">
        <span className="info">click to copy</span>
      </div>
    </>
  );
}
