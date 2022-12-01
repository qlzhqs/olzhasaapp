import { useContext } from "react";
import { DefaultContext } from "../../Contexts";

const swLinks = [

];

export const Header = () => {
  const { fan } = useContext(DefaultContext);

  return (
    <header>
      <div className="links-layout">
        {swLinks.map((link) => (
          <a
            key={link.name}
            className="link"
            href={link.url}
            target="_blank"
            alt={link.name}
            rel="noreferrer"
          >
            {link.component}
          </a>
        ))}
      </div>

    </header>
  );
};
