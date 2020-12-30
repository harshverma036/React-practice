import react, { useState } from 'react';
import Input from './input';
import Btn from './login_btn';

const isRegistered = true;

const Form = () => {

    const [heading, setHeadingText] = useState('');
    const [name, setName] = useState('');

    function handlechange(event){
        let enteredValue = event.target.value;
        setName(enteredValue);
    }

    function handleClick(event){
        event.preventDefault();
        setHeadingText(name);
    }

    return (
        <div className="row justify-content-center align-items-center main-form">
            <div className="col-lg-3 col-md-6 col-10">
                <h1 className="text-danger text-center font-weight-bold">Hello {heading}</h1>
                    <div className="form-group d-flex flex-column">
                        <input 
                        className="" 
                        placeholder="Username.." 
                        type="text" 
                        id="username"
                        value={name}
                        onChange={handlechange}
                        />
                    </div>
                    <button className="btn btn-outline-dark form-control" onClick={handleClick}>Submit</button>
            </div>
        </div>
    );
}

export default Form;