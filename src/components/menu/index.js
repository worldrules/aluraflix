import React from 'react';
import Logo from '../../assets/img/logo.png';
import './menu.css';
// import ButtonLink from '../button';
import ButtonStyled from '../ButtonStyled';

export default function Menu(props) {
  return (
    <nav className="Menu">
      <a href="/">
        <img className="Logo" src={Logo} alt="" />
      </a>

      <ButtonStyled as="a"  className="ButtonLink" href="/">
        Novo Vídeo
      </ButtonStyled>
    </nav>
  );
}
