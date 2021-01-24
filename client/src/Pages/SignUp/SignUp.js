import React,{useEffect,useState} from 'react';
import './SignUp.css';

const SignUp = () =>{
    useEffect(() =>{
        document.title = 'Register';
    },[]);

    const [identity, updateIdentity] = useState('employee');
    const [inputs, updateInputs] = useState({
       fName:'',
       lName:'',
       pEmail:'',
       pPass:'',
       pConfirm:'', 
       cName:'',
       cEmail:'',
       cPass:'',
       cConfirm:''
    });

    const handleChange = (e) =>{
        let name = e.target.name;
        let value = e.target.value;

        updateInputs(prev =>({
            ...prev,
            [name]:value
        }));
        //console.log(inputs);
    }

    let employeeForm =  
    (
        <div id = 'employeeForm'>
            <input onChange = {handleChange} name = 'fName' type = 'text' placeholder = 'First Name'/>
            <input onChange = {handleChange} name = 'lName'style = {{marginTop:'1vh'}} type = 'text' placeholder = 'Last Name'/>
            <input onChange = {handleChange} name = 'pEmail' style = {{marginTop:'1vh'}} type = 'text' placeholder = 'Email'/>
            <input onChange = {handleChange} name = 'pPass' style = {{marginTop:'1vh'}} type = 'password' placeholder = 'Password'/>
            <input onChange = {handleChange} name = 'pConfirm' style = {{marginTop:'1vh'}} type = 'password' placeholder = 'Confirm Password'/>
            <input name = 'resume' style = {{marginTop:'1vh'}} type = 'file' />
            <button style = {{marginTop:'3vh'}}>Register</button>
        </div>
    );

    let employerForm = 
    (
        <div id = 'employerForm'>
            <input style = {{marginTop:'1vh'}} name = 'cName' type = 'text' placeholder = 'Company Name' />
            <input style = {{marginTop:'1vh'}} name = 'cEmail' type = 'text' placeholder = 'Company Email' />
            <input style = {{marginTop:'1vh'}} name = 'cPass' type = 'password' placeholder = 'Password' />
            <input style = {{marginTop:'1vh'}} name = 'cConfirm' type = 'password' placeholder = 'Confirm Password' />
            <button style = {{marginTop:'3vh'}}> Register</button>
        </div>
    );
    
    const changeIdentity = (event) =>{
        let value = event.target.value;
        updateIdentity(value);
        console.log(identity);
        console.log(event.target.value);
    }

    return(
        <div id = 'signUpContainer'>
            <img src = '/assets/padlock.png' width = '30' height = '30' alt = 'padlock locked'/>
            <h1>{(identity === 'employee')? 'New Employee':'New Employer'}</h1>

            <div id = 'identifier'>
                <div className = 'radioGroup'>
                    <label for = 'employeeChoice'>Looking for Work</label>
                    <input onClick = {changeIdentity} defaultChecked type = 'radio' id = 'employeeChoice' name = 'identify' value = 'employee' />
                </div>
                <div className = 'radioGroup'>
                    <label for = 'employerChoice'>Looking to Hire</label>
                    <input onClick = {changeIdentity} type = 'radio' id = 'employerChoice' name = 'identify' value = 'employer'/>
                </div>
            </div>
        
            <form className = 'inputs'>
                {(identity === 'employee') ? employeeForm : employerForm}
            </form>
        </div>
    )
}

export default SignUp;