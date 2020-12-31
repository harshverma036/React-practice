import react, { useState } from 'react';

const Form = () => {

    const [contact, setContact] = useState({
        fname: '',
        lname: '',
        email: ''
    });

    function handleChange(event) {
        const {name, value} = event.target;

        setContact((preval) => {
            if (name === 'fname') {
                return {
                    fname: value,
                    lname: preval.lname,
                    email: preval.email
                }
            } else if (name === 'lname') {
                   return {
                       fname: preval.fname,
                       lname: value,
                       email: preval.email
                   } 
            } else if (name === 'email') {
                  return {
                      fname: preval.fname,
                      lname: preval.lname,
                      email: value
                  }  
            }
        });
    }   

    return (
        <div className="row justify-content-center align-items-center main-form">
            <div className="col-lg-3 col-md-6 col-10">
                <h1 className="text-danger text-center font-weight-bold">
                    Hello {contact.fname} {contact.lname} {contact.email}</h1>
                    <div className="form-group d-flex flex-column">
                        <input 
                        className="" 
                        placeholder="First Name.." 
                        type="text" 
                        name="fname"
                        onChange={handleChange}

                        />
                        <input
                        className="mt-2"
                        placeholder="Last Name.."
                        type="text"
                        name="lname"
                        onChange={handleChange}
                        
                        />
                        <input
                        className="mt-2"
                        placeholder="Last Name.."
                        type="text"
                        name="email"
                        onChange={handleChange}

                        />
                    </div>
                    <button className="btn btn-outline-dark form-control">Submit</button>
            </div>
        </div>
    );
}

export default Form;