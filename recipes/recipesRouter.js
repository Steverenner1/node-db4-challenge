const express = require('express');

const Recipes = require('./data-access.js');

const router = express.Router();

router.get('/', async (req, res) => {
    try {
        const recipes = await Recipes.getRecipes();
        res.json(recipes);
    } catch (err) {
        res.status(500).json({ message: "Could not retrieve recipes" });
    }
});

router.get('/:id/shoppinglist', async (req, res) => {
    const { id } = req.params;
    try {
        const shoppinglist = await Recipes.getShoppingList(id);
        res.json(shoppinglist);
    } catch (err) {
        res.status(500).json({ message: "Could not retrieve shopping list" });
    }
});

router.get('/:id/instructions', async (req, res) => {
    const { id } = req.params;
    try {
        const instructions = await Recipes.getInstructions(id);
        res.json(instructions);
    } catch (err) {
        res.status(500).json({ message: "Could not retrieve instructions" });
    }
});

module.exports = router;