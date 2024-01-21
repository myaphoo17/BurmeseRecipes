import React, { useState } from 'react';
import { Row, Col, Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

import jsonData from '../BurmeseRecipes.json';

const MenuPage = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);

  const showRecipeDetails = (recipe) => {
    setSelectedRecipe(recipe);
  };

  const closeRecipeDetails = () => {
    setSelectedRecipe(null);
  };

  const itemsPerPage = 6;
  const totalPages = Math.ceil(jsonData.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentRecipes = jsonData.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <div className="d-flex justify-content-center mt-3">
        <Pagination>
          <PaginationItem>
            <PaginationLink style={{color:"black"}} first onClick={() => paginate(1)} />
          </PaginationItem>
         
          {[...Array(totalPages).keys()].map((number) => (
            <PaginationItem key={number + 1} active={number + 1 === currentPage}>
              <PaginationLink
                onClick={() => paginate(number + 1)}
           
                style={{ backgroundColor: number + 1 === currentPage ? '#F3B664' : '' ,color:'black', boxShadow:'none'}}
              >
                {number + 1}
              </PaginationLink>
            </PaginationItem>
          ))}
      
          <PaginationItem>
            <PaginationLink  style={{color:"black"}}  last onClick={() => paginate(totalPages)} />
          </PaginationItem>
        </Pagination>
      </div>

      <Row>
        {currentRecipes.map((recipe) => (
          <Col key={recipe.Guid} md={6} sm={12} className="mb-3">
            <Link to={`/recipes/${recipe.Guid}`} style={{ textDecoration: 'none', color: 'black' }}>
              <div className="d-flex flex-row bg-light border p-3 align-items-center">
                <img
                  className="me-2 p-1"
                  style={{ maxHeight: '100px', maxWidth: '100px' }}
                  src={`/img/${recipe.Name}.jpg`}
                  alt={recipe.Name}
                  onError={(e) => {
                    e.target.src = "/img/default.png";
                  }}
                />
                <div>
                  <h3 style={{ fontSize: '1.15rem', cursor: 'pointer' }} onClick={() => showRecipeDetails(recipe)}>
                    {recipe.Name}
                  </h3>
                </div>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default MenuPage;
