import './App.css';
import './script.js';
import Header from '../src/component/header';
import Banner from '../src/component/banner';
import Content from '../src/component/content';



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <>
            <Header />
            <Banner />
            <Content />
        </>
  );
}

export default App;
