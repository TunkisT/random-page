import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CreateCategory from './Pages/CreateCategory';
import NewUser from './Pages/NewUser';
import AuthContext from './store/authContext';

function App() {
  const ctxValue = {
    categoryData: [],
  };
  return (
    <AuthContext.Provider value={ctxValue}>
      <div className='App'>
        <Header></Header>
        <Container>
          <Routes>
            <Route path='/' element={<NewUser />} />
            <Route path='/categories' element={<CreateCategory />} />
          </Routes>
        </Container>
        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
