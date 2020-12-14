import react from 'react';
import Input from './input';
import Btn from './login_btn';

const isRegistered = true;

const Form = () => {
    return (
        <div className="row justify-content-center align-items-center main-form">
            <div className="col-lg-3 col-md-6 col-10">
                <form>
                    <div className="form-group d-flex flex-column">
                        <Input placeholder="Username" type="text" id="username" />
                    </div>
                    <div className="form-group d-flex flex-column">
                        <Input placeholder="Password" type="password" id="password" />
                        {isRegistered ? null : <Input placeholder="Confirm Password" type="password" id="cpassword" />}
                    </div>
                    {isRegistered ? <Btn text="Login" id="login-btn" /> : <Btn text="Register" id="register-btn" />}
                </form>
            </div>
        </div>
    );
}

export default Form;