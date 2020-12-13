import react from 'react';
import Form from './components/form';

const isLoggedIn = false;

function renderConditionaly() {
    if (isLoggedIn) {
        return <h1 className="text-primary text-center font-weight-bold">Successfull</h1>
    } else {
        return <Form />
    }
}

const App = () => {
    return renderConditionaly();
}

export default App;