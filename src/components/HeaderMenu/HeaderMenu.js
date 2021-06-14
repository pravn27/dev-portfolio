import React from "react";
import { MenuContainer, LinkContainer } from "./Styled";

const navMenuItems = {
  menus: ["Experience", "Skills", "Education", "Contact"],
};

const HeaderMenu = () => {
  const { menus } = navMenuItems;
  return (
    <MenuContainer>
      {menus.map((menuItems, index) => (
        <LinkContainer
          key={index}
          to={menuItems}
          activeClass="active"
          spy={true}
          smooth={true}
          duration={1000}
          offset={-65}
        >
          {menuItems}
        </LinkContainer>
      ))}
    </MenuContainer>
  );
};

export default HeaderMenu;
