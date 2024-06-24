import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';
import CatLibros from '../catalogs/libros/ListaLibros';

export const SideBarData = [
  {
    title: 'Inicio',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Catálogo de Libros',
    path: '/ListaLibros',//'/ListaLibros',
    icon: <IoIcons.IoIosPaper />,
    cName: 'nav-text'
  },
  {
    title: 'Gestion de Libros',
    path: '/GestionLibros',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Cerrar Sesión...',
    path: '/login',
    icon: <IoIcons.IoMdClose />,
    cName: 'nav-text'
  }
];