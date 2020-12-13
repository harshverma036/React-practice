import react from 'react';

const Input = (props) => {
    return (
        <input placeholder={props.placeholder} type={props.type} id={props.id} />
    );
}

export default Input;