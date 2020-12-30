import react, { useState } from 'react';
import Input from './input';
import Btn from './login_btn';

const isRegistered = true;

const Form = () => {

    const [heading, setHeadingText] = useState('Hello');
    const [isMouseOver, setMouseOver] = useState(false);

    function handleMouseOver() {
        setHeadingText(`${heading}, mouse over button`)
        setMouseOver(true)
    }

    function handleMouseOut() {
        setMouseOver(false);
    }

    return (
        <div className="row justify-content-center align-items-center main-form">
            <div className="col-lg-3 col-md-6 col-10">
                <h2 className="text-danger">{heading}</h2>
                <form>
                    <div className="form-group d-flex flex-column">
                        <Input placeholder="Username" type="text" id="username" />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <Input placeholder="Password" type="password" id="password" />
                        {isRegistered ? null : <Input placeholder="Confirm Password" type="password" id="cpassword" />}
                    </div>
                    {isRegistered ? <Btn text="Login" id="login-btn" /> : <Btn text="Register" id="register-btn" />}
                    <button className="btn w-100 mt-3" style={isMouseOver ? { backgroundColor: 'black', color: 'white' } : { backgroundColor: 'white', color: 'black' }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>Submit</button>
                </form>
            </div>
        </div>
    );
}

export default Form;