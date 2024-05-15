import { useState } from "react";

const todoForm = ({ addTodo }) => {
  const [value, setValue] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit =(e) => {
    e.preventDefault();
    if (!value || !category){
        alert("Preencha os Campos")
        return;
    }

    addTodo(value, category);
    setValue("");
    setCategory("");
   
  }

  return (
  <div className="todo-form">
    <form onSubmit={handleSubmit}>
        <h1>Criar Treino: </h1>  
        <input value={value} type="text" placeholder='Treino' onChange={(e) => setValue(e.target.value)}/>
        <select  value={category} onChange={(e) => setCategory(e.target.value)}>
            <option value=""> Selecione uma Categoria </option>
            <option value="superiores-antreiores"> Superiores Antreiores </option>
            <option value="inferiores"> Inferiores </option>
        </select>
        <button type='submit'>Criar Treino</button>
  </form>
</div>
    );
};

export default todoForm;    