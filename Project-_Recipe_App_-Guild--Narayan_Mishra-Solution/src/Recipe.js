import React from "react";

/**
 * Diplays a post of either text or image.
 *
 */
function Recipe({recipe, deleteRecipe}) {
    return (
        <tr className="recipe">
            <td>Name: {recipe.name}</td>
            <td>Name: {recipe.cuisine}</td>
            <td><img src={recipe.photo} alt="content"></img></td>
            <td>Name: {recipe.ingredients}</td>
            <td>Name: {recipe.preparation}</td>
            <td><button name="delete" onClick={deleteRecipe}>
                Delete
            </button></td>
        </tr>
    );
}

export default Recipe;
