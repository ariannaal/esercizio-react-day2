
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome'

function App() {
  return (
    <div className="App">
     <MyNav />
      <div className='container'>
        
        <Welcome/>
      </div>
      <MyFooter className="footer" />
    </div>
  );
}

export default App;
