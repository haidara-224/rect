

function Formulaire()
{
    /**
     * 
     * @param {PointerEvent} e 
     */
    const nom='sidy@gmail.com'
    const password='1234'
    const confirm='1234'
    let error=[]
   
  
    const Submit=(e)=>{
        e.preventDefault()
        const form=new FormData(e.target)
        const nom=form.get('nom')
        const pass=form.get('pass')
        const confirm=form.get('confirm')
        
        if(nom.length<3)
        {
            error['nom']='format trop court'
            console.log(error['nom'])
        }
         if(pass !==confirm)
        {
            error['pass']='Les password ne correspondent pas'
            console.log(error['pass'])
            
        }
        else{
          console.log('recupreation de data')
          error=[]
        }
    }

    return <>
    <form action="" onSubmit={Submit}>
        <label >Entrer votre email</label>
        <input defaultValue={nom}  type="text" name="nom" /><br />
       {error['email'] ? <p>{error['email']}</p> : ''}
        <label >Entrer votre mot de passe</label>
        <input defaultValue={password} type="password" name="pass" /><br />
        <label >confirmer le mot de passe</label>
        <input defaultValue={confirm} type="password" name="confirm"  /><br />
        <button>Soumettre</button>
    </form>
    </>
}
export default Formulaire