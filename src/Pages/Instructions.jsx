import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import jsonData from '../BurmeseRecipes.json';

const Instructions = () => {
  const { recipeId } = useParams();
  const selectedRecipe = jsonData.find(recipe => recipe.Guid === recipeId);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div>
      <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)',width: '90%', maxWidth: '600px', maxHeight: '80vh', overflowY: 'auto' }}>
        <div className="bg-light border p-3">
          <img
            className="me-2 p-2"
            style={{ width: '40%', maxWidth: '40%', height: '40%' }}
            src={`/img/${selectedRecipe.Name}.jpg`}
            alt={selectedRecipe.Name}
            onError={(e) => {
              e.target.src = "/img/default.png";
            }}
          />
          <h3>{selectedRecipe.Name}</h3>
          <br />
          <p>Ingredients: {selectedRecipe.Ingredients}</p>
          <p>Cooking Instructions: {selectedRecipe.CookingInstructions}</p>
          <button className="btn btn-warning" onClick={handleBack}>
            Back
          </button>
        </div>
      </div>
    </div>
  );
};

export default Instructions;
