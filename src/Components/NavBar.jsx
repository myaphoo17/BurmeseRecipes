import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiBowlFoodFill } from "react-icons/pi";


function NavbarCustom(args) {
  return (
    <>
      <Navbar className="my-0" color="dark" dark>
        <NavbarBrand href="/">
        <div className="ml-8 d-flex align-items-center">
            <PiBowlFoodFill size={60}  style={{ marginRight: '1rem' }} />
            <div>BURMESE RECIPES</div>
          </div>
           
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default NavbarCustom;
