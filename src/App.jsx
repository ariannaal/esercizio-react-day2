
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome'
import AllTheBooks from './components/AllTheBooks';
import SingleBook from './components/SingleBook';

function App() {
  return (
    <div className="App">
     <MyNav />
      <div className='container'>
        <Welcome/>
        {/* <AllTheBooks/> */}
        {/* <SingleBook/> */}
        <SingleBook/>
      </div>
      <MyFooter className="footer" />
    </div>
  );
}

export default App;
