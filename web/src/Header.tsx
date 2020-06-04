import React from "react";

interface HeaderProps {
  title: String;
}

const Header: React.FC<HeaderProps> = ({ title }) => {
  return <h1>{title}</h1>;
};
export default Header;
