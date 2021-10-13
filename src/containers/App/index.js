import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import logo from 'containers/App/assets/logo.svg';
import 'containers/App/styles/index.css';
import { setWelcomeMsg } from 'actions/welcome_msg';

const App = () => {

    const welcome_msg = useSelector(state => state.welcome_msg)

    const dispatch = useDispatch()

    useEffect(() => {
        
        dispatch(setWelcomeMsg('This is message send from redux. Go to /admin to see how auth work...'))
        
    }, [dispatch])

    return (
        <div className="App">
            <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    {welcome_msg}
                </p>
                <a
                className="App-link"
                href="/admin"
                >
                Admin page
                </a>
            </header>
        </div>
    );
}

export default App;
