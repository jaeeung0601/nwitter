import { authService } from "fbase";
import React,{useState} from "react";

const Auth = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [newAccount,setNewAccount] = useState(true)
    const onChange = (event) => {
        const { target:{name,value} } = event
        if(name==='email'){
            setEmail(value)
        }else if (name==='password'){
            setPassword(value)
        }
        //console.log(value)
    }
    const onSubmit = async(event) => {
        event.preventDefault()
        try{
            let data;
            if (newAccount){
                //create account
               data = await authService.createUserWithEmailAndPassword(
                email,password
               )
            }else{
                //log in
                data = await authService.signInWithEmailAndPassword(
                    email,password
                )
            }
            console.log(data)
        }catch(error){
            console.log(error)
        }
        
    }
    return(
        <div>
            <form onSubmit={onSubmit}>
                <input name='email' type='text' placeholder='Email' required 
                value={email} onChange={onChange} />
                <input name='password' type='password' placeholder='Passoword' required
                value={password} onChange={onChange} />
                <input type='submit' value={newAccount ? "Create Account" : "Log In"}  />
            </form>
            <div>
                <button>Continue with Google</button>
                <button>Continue with Github</button>
            </div>
        </div>
    )
}
export default Auth