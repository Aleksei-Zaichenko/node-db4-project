const express = require('express');

const Recipes = require('./scheme-model.js');

const router = express.Router();

router.get('/', (req, res) => {
    Recipes.getRecipes()
    .then(recipes => {
      res.json(recipes);
    })
    .catch(err => {
        console.log(err);
      res.status(500).json({ message: 'Failed to get recipes' });
    });
  });
  
  router.get('/:id/shoplist', (req, res) => {
    const { id } = req.params;
  
    Recipes.getShoppingList(id)
    .then(ShoppingList => {
      if (ShoppingList) {
        res.json(ShoppingList);
      } else {
        res.status(404).json({ message: 'Could not find shopping list for given id recipe.' })
      }
    })
    .catch(err => {
        console.log(err);
      res.status(500).json({ message: 'Failed to get shopping list' });
    });
  });
  
  router.get('/:id/instructions', (req, res) => {
    const { id } = req.params;
  
    Recipes.getInstructions(id)
    .then(instructionsForRecipe => {
      if (instructionsForRecipe.length > 0) {
        res.json(instructionsForRecipe);
      } else {
        res.status(404).json({ message: 'Could not find instructions for given id recipe.' })
      }
    })
    .catch(err => {
        console.log(err);
      res.status(500).json({ message: 'Failed to get instructions for recipe' });
    });
  });

module.exports = router;