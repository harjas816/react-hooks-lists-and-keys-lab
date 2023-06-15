import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
  const linksmade = links.map(link => {return(
    <a key = {link} href = {"#" + `${link}`}>{link}</a>
  )})

  return (
    <nav>
      {linksmade}
    </nav>
  )
}

export default NavBar;
