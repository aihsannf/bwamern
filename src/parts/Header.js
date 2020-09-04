import React from "react";
import Fade from "react-reveal/Fade";
import Button from "elements/Button";
import TextLogo from "parts/TextLogo";

export default function Header(props) {
  const getNavLinkCLass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <TextLogo />
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkCLass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkCLass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse by
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkCLass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkCLass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
