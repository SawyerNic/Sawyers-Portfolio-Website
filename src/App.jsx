import 'bulma/css/bulma.css';
import Header from './header.jsx'


const App = () => {
  return <>
  <Header /><div  className="has-background-grey">
    <h1>Projects yay!</h1>
    <ul>
      <li>Project 1</li>
      <li>Project 2</li>
      <li>Project 3</li>
      <li>Project 4</li>
      <li>Project 5</li>
      <li>Project 6</li>
    </ul>
    </div>
  </>
  ;
};

export default App;