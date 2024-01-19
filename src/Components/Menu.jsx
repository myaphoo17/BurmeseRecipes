import React from 'react';
import { Row, Col } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import jsonData from '../../public/BurmeseRecipes.json';

const MenuPage = () => {
  return (
    <Row>
      {jsonData.map((recipe) => (
        <Col className="bg-light border" md={6}>
          <div>

      

            <h3>{recipe.Name}</h3>
           
          </div>
        </Col>
      ))}
    </Row>
  );
}

export default MenuPage;
