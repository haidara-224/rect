import { Fragment, useState } from "react"
import Formulaire from "./Components/formulaire"
const bonjour='Bonjour les gensos'
const style={
  color:'red',
  backgroundColor:'yellow'
}
const showTitle=true
const liste=[
  'faire 1',
  'faire 2',
  'faire 3',
  'faire 4',
  'faire 5',
]

let gens='Les gens'
/**
 * 
 * @param {PointerEvent} e 
 */
const touch=(e)=>{
  e.preventDefault
  console.log(e)
  alert('bonjour')
}

function Title({children,hiden})
{

  let props={
    id:'id',
    className:'class',
    
    style:{
      color:'red',
      backgroundColor:'yellow'
    }
  }

  if(hiden)
  {
    return null
  }

  return <h1 {...props}>
    {children}
  </h1>
}


function App() {
  
 const [count, setCount]= useState(0)
  const counter=()=>{
  setCount(count+1)
  }
  const [personne,setPersonne]=useState({
    nom:'Haidara',
    prenom:'sidy Mohamed cherif',
    age:23
  })
  const changePersonne=()=>{
  let agesup=personne.age+1
    setPersonne({
      ...personne,
      nom:'Barry',
      prenom:'saoudine',
      age:agesup
    })
  }
  /**
   *  Champ Controller
   * @param {PointerEvent} e 
   */
  const handlePrix=(e)=>{
    setPrix(e.target.value)
   

  } 
  /**
   * Champs non controller
   * @param {PointerEvent} e 
   */
  const handleqte=(e)=>{
    e.preventDefault()
  const nom= new FormData(e.target)
  nom.get
   

  } 
 
  const [prix,setPrix]=useState(0)
  const [check,setChecked]=useState(true)

  
  const handlleCheck=()=>{
    setChecked(!check)
  }
  
  return <Fragment>
    <div>
      <form action="" onSubmit={handleqte}>
      <input onChange={handlleCheck} type="checkbox" checked={check} />

      <input onChange={handlePrix} type="text" value={prix}/> 
      <input  type="text" disabled={!check}/> 
      <p>{prix}</p>
      <input type="text" /> 
      <button >Soumettre</button>

      </form>
  
    
      
      <Title>coucou</Title>
      {showTitle ? <h1 onClick={touch} style={style}>Salut</h1> : ''}
      <p>{gens}</p>
      <ul>
        {liste.map(listes=>(<li key={listes}>{listes}</li>))}
      </ul>
    </div>
    <p>Counteur :{count}</p>
    <button onClick={counter}>Incrementer</button>
    <div>
      <h1>{personne.nom}</h1>
      <h1>{personne.prenom}</h1>
      <h1>{personne.age}</h1>
      <button onClick={changePersonne}>Change</button>
    </div>

    <Formulaire />
  </Fragment>
}

export default App
