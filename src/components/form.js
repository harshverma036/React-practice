import react from 'react';
import Input from './input';

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
                    </div>
                    <button className="btn btn-outline-dark form-control">Login</button>
                </form>
            </div>
        </div>
    );
}

export default Form;