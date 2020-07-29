import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../../assets/img/logo.png';
import './menu.css';
// import ButtonLink from '../button';
import ButtonStyled from '../ButtonStyled';

export default function Menu(props) {
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="" />
      </Link>

      <ButtonStyled as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Vídeo
      </ButtonStyled>
    </nav>
  );
}
