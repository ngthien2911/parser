import React,{useState} from 'react'
import './App.css';

function App() {
  
  const [email,setEmail] = useState('')
  const [text,setText] = useState('')
  const [result,setResult] = useState('')

  function handleChange(event){
    setText(event.target.value)
  }

  function handleEmailchange(event){
    setEmail(event.target.value)
  }

  const handleClick=(event)=>{
    event.preventDefault();
  let b =text.slice(1,-1).replace(/, /g,`','`)
  let c = `'${email}','${b}'`
  let d =(<> <p>select 'lead' as `table`, ID as ID, email as email from lead where email in ( {c} )</p>
  <p>union</p>
  <p>select 'guest' as `table`, ID as ID, email as email from guest where email in ( {c} )</p> 
  <p>union</p>
  <p>select 'triggerlog' as `table`, ID as ID, recipientsInfo as email from triggerLog where recipientsInfo in ( {c} ) ;</p></>)
    
    setResult(d)
  }
  
  console.log(email);
  return(
  <div id="all">
  
  <form onSubmit={handleClick}>
    <label>
      Email:
      <input type="text" onChange={handleEmailchange} ></input>
    </label>
<br></br>
    <label>
      String:
      <textarea type="text" onChange={handleChange} rows="10" cols="50" ></textarea>
    </label>
    <br></br>
    <input type="submit" value="Submit" />
    
  </form>

  <p>{result}</p>
 
  </div>)
}

export default App;
