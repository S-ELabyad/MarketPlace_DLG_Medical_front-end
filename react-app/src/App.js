import React , { Component} from 'react';
import './App.css';


// function App(){  

//   return(
//     <div>
//        <h1>hello react by saloua</h1>
     
    
//     </div>
//   );
// }

class App extends Component {
  render () {
    return (
      <div className="App">

      <h1>Title</h1>

      <p>
        Paragraphe with <b>html</b> inside
      </p>

      <p>
        Paragraphe with clickable <a href="http://google.com" target="_blank">link</a>
      </p>

      <input type="text" placeholder="input" />

    </div>
    );
}
}

export default App;