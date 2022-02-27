import React ,  { useState, useEffect , useMemo, useCallback} from "react";

function App() {

  const[tarefas, setTarefas] = useState([]);
  const [input, setInput] = useState('');

  //useEffect quando o pagina carregar ele executa
  useEffect(()=>{
    const tarefasStorage = localStorage.getItem('tarefas');

    if(tarefasStorage)
    {
      setTarefas(JSON.parse( tarefasStorage))
    }
  }, [])

  //useEffect quando o componente carregar ele executa
  useEffect(()=>{
    localStorage.setItem('tarefas',JSON.stringify(tarefas))
  },[tarefas])


  // useCallback retorna uma função 
  const handleAdd = useCallback(()=> {
    setTarefas([...tarefas,  input])
    setInput('');
  }, [tarefas, input])


  //useMemo retora um valor 

  const totalTarefas = useMemo(()=> tarefas.length,[tarefas])
  return (
    <div>
      {tarefas.map(tarefa => (
        <li key={tarefa}>{tarefa}</li>
      ))}

      <strong>Voce tem {totalTarefas}</strong>
      <br/>
      <input type="text" value={input} onChange={((e)=> setInput(e.target.value))}></input>
      <button onClick={handleAdd}>Adicionar</button>
    </div>
  );
}

export default App;
