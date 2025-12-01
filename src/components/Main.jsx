import React from "react"
export default function Main(){
  const [ingredients, setIngredients] = React.useState([])
  const ingredientsListItem = ingredients.map((item)=>(
     <li key={item}>{item}</li>
  ))
  function addIngredient(formData){
    const newIngredient = formData.get("ingredient")
    setIngredients(prevIngredients => [...prevIngredients, newIngredient])
  }
  return(
    <main>
      <form action={addIngredient} className="addIngredientForm">
        <input 
        aria-label="Add ingredient"
        placeholder="e.g. Origano"
        type="text" 
        name="ingredient"/>
        <button>Add ingredient</button>
      </form>
      <ul>
        {ingredientsListItem}
      </ul>
    </main>
  )
}