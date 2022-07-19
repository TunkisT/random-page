import { useContext, useState } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Container from './Components/Container/Container';
import Footer from './Components/Footer/Footer';
import Header from './Components/Header/Header';
import CreateCategory from './Pages/CreateCategory';
import NewCategory from './Pages/NewCategory';
import NewSubCategory from './Pages/NewSubcategory';
import NewUser from './Pages/NewUser';
import AuthContext from './store/authContext';

function App() {
  const authCtx = useContext(AuthContext);
  const [result, setResult] = useState(authCtx.listData);
  const [subResult, setSubResult] = useState('');

  function getData(obj) {
    setResult((prevState) => [...prevState, obj]);
    authCtx.listData = [...authCtx.listData, obj];
    console.log('authCtx.listData ===', authCtx.listData);
  }

  function getSubData(obj) {
    setSubResult((prevState) => [...prevState, obj]);
    // authCtx.listData = [...authCtx.listData, obj];
    console.log('authCtx.listData ===', authCtx.listData);
  }

  return (
    <AuthContext.Provider value={authCtx}>
      <div className='App'>
        <Header></Header>
        <Container>
          <Routes>
            {authCtx.listData.map((obj) => (
              <Route
                key={obj.title}
                path={obj.link}
                element={<NewCategory getSubData={getSubData} title={obj.title} />}
              />
            ))}
            {authCtx.listData.map((obj) =>
              obj.subcategory.map((item) => (
                <Route
                  path={`${obj.title}/${item}`}
                  element={<NewSubCategory title={item} />}
                />
              ))
            )}
            <Route path='/' element={<NewUser />} />
            <Route
              path='/categories'
              element={<CreateCategory getData={getData} />}
            />
          </Routes>
        </Container>
        <Footer></Footer>
      </div>
    </AuthContext.Provider>
  );
}

export default App;
