import { Link } from "react-router-dom";
import styled from "styled-components";

//gemensamma styled-components som används i flera komponenter för att öka återanvändbarheten

const SiteTitle = styled.p`
  font-size: 25px;
  margin: 0px;

  @media (max-width: 600px) {
    font-size: 21px;
  }
`;

const SubTitle = styled.p`
  font-size: 40px;
  margin: 10px 0px;

  @media (max-width: 600px) {
    font-size: 28px;
  }
`;

const Button = styled.button`
font-family: "Karla", sans-serif;
  text-transform: uppercase;
  font-size: 15px;
  font-weight: 900;
  color: #183717;

  background: inherit;
  border-radius: 5px;
  padding: 15px;
  border: 1px solid #183717;
  cursor: pointer;

  &:hover {
    background-color: #6a8e68;
    color: white;
    transition: color 1.5s ease;
  }
`;

const NameDiv = styled(Link)`
  text-decoration: none;
  color: white;
  display: flex;
  flex-direction: column;
`;

const LinkNavMenu = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;
  text-decoration: none;
  color: white;

  &:hover {
    color: #c59267;
    transition: color 1.5s ease;
  }
`;

const LinkNav = styled(Link)`
  display: flex;
  align-items: center;
  gap: 7px;
  font-weight: 600;
  text-decoration: none;
  color: white;

  &:hover {
    color: #c59267;
    transition: color 1.5s ease;
  }

  @media (max-width: 600px) {
    display: none;
  }
`;

export { SiteTitle, SubTitle, Button, LinkNav, LinkNavMenu, NameDiv };