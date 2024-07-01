
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import MyNav from './components/MyNav';
import MyFooter from './components/MyFooter';
import Welcome from './components/Welcome'
// import AllTheBooks from './components/AllTheBooks';
// import SingleBook from './components/SingleBook';
import BookList from './components/BookList'; 
import romance from './data/romance.json';
import AddComment from './components/AddComment';
import { Col, Row } from 'react-bootstrap';
import CommentArea from './components/CommentArea';


function App() {
  return (
    <div className="App">
     <MyNav />
      <div className='container'>
        <Welcome/>
        {/* <AllTheBooks/> */}
        {/* <SingleBook book={romance[0]/> */}
        
              <BookList books={romance}  /> 
        
      </div>
      <MyFooter className="footer" />
    </div>
  );
}

export default App;
