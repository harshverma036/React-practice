import react, { useState } from 'react';

function Todo(){

    const [inputText, setInputText] = useState('');
    const [items, setItems] = useState([]);

    function handleChange(event){
        const newitem = event.target.value;
        setInputText(newitem);
    }

    function additem(){
        setItems((prevItems) => {
            return [...prevItems, inputText];
        })
    }

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-lg-7 col-md-9 col-12 pt-5">
                    <div className="card">
                        <div className="card-body">
                            <h2 className="text-center text-primary">Todo List</h2>
                            <div className="d-flex flex-row">
                                <input className="w-100" placeholder="List Item..." value={inputText} onChange={handleChange}/>
                                <button className="btn btn-dark ml-2" onClick={additem}>Add</button>
                            </div>
                            <div className="list-group-item-success mt-4">
                            {items.map(todoitems => <p className="list-group-item">{todoitems}</p>)}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Todo;