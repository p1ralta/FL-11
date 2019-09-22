import './style.scss';


// ** Here you can pass store down to your components
// ** and initialize them, like in example below

// ** import {createStore} from 'redux';
// ** import myTestReducer from './reducers/my_test_reducer.js';
// ** import MyTestComponent from './components/my_test_component';

// ** const store = createStore(myTestReducer);

// ** const testComponent = new MyTestComponent(store);

// ** testComponent.init()


import {Table} from './components/Table.js';
import DATA from './data';


const users = DATA;
const root = document.getElementById('root');

const table = new Table(users);
root.innerHTML = table.renderTable();

