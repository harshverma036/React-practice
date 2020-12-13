import react from 'react';
import Form from './components/form';

const isLoggedIn = false;

const App = () => {
    return isLoggedIn ? <h1 className="text-primary text-center font-weight-bold">Successfull</h1> : <Form />
}

export default App;