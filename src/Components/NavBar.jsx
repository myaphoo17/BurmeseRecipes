import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { PiBowlFoodFill } from "react-icons/pi";


function NavbarCustom(args) {
  return (
    <>
     <Navbar className="my-0" style={{ backgroundColor: '#F3B664' }}>

        <NavbarBrand >
        <div className="d-flex align-items-center justify-content-center">
            <PiBowlFoodFill size={50}  style={{ marginRight: '1rem' }} />
            <div>BURMESE RECIPES</div>
          </div>
           
        </NavbarBrand>
      </Navbar>
    </>
  );
}

export default NavbarCustom;
