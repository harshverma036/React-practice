import react from 'react';

const btn = (prpos) => {
    return (<button className="btn btn-outline-dark form-control" id={prpos.id}>{prpos.text}</button>);
}

export default btn;