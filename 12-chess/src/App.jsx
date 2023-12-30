import { useReducer } from 'react'
import Board from './components/Board/Board';
import { reducer } from './reducer/reducer'
import { initGameState } from './constants';
import AppContext from './contexts/Context'
import Control from './components/Control/Control';
import TakeBack from './components/Control/bits/TakeBack';
import MovesList from './components/Control/bits/MovesList';
import './App.css';

const App=()=> {

    const [appState, dispatch ] = useReducer(reducer,initGameState);
    const providerState = {appState,dispatch}

    return (
        <AppContext.Provider value={providerState} >
            <div className="App">
                <Board/>
                <Control>
                    <MovesList/>
                    <TakeBack/>
                </Control>
            </div>
        </AppContext.Provider>
    ); 
}

export default App;
