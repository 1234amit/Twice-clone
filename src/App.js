import './App.css';
import Header from './Header';
import Mainbody from './Mainbody';
import Sidebar from './Sidebar';

function App() {
  return (
    <div className="app">
       <Header />
       <div className="app__main">
          <Sidebar />
          <Mainbody />
       </div>
       
    </div>
  );
}

export default App;
