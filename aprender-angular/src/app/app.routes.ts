import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { Producto } from './components/producto/producto';
import { Cine } from './components/cine/cine';
import { Usuario } from './components/usuario/usuario';
import { Ventas } from './components/ventas/ventas';
import { Pelicula } from './components/pelicula/pelicula';
import { Padre } from './components/padre/padre';
import { Pagina404 } from './components/pagina404/pagina404';
import { PaginaNoEncontrada } from './components/pagina-no-encontrada/pagina-no-encontrada';
import { Cuenta } from './components/cuenta/cuenta';
import { Transacciones } from './components/transacciones/transacciones';
import { Prestamos } from './components/prestamos/prestamos';

export const routes: Routes = [
    {path:"", component:Producto},
    {path:"inicio", component:Producto},
    {path:"componentes", component:Producto},
    {path:"plantillas", component:Usuario},
    {path:"directivas", component:Ventas},
    {path:"modelos", component:Cine},
    {path:"ciclo", component:Pelicula},
    {path:"comunicacion", component:Padre},
    {path:"cuenta", component:Cuenta},
    {path:"transacciones", component:Transacciones},
    {path:"prestamo", component:Prestamos},
    
     {path:"**", component:PaginaNoEncontrada},
];
