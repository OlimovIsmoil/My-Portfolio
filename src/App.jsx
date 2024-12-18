import './App.module.css';
import styleAPP from './App.module.css'
import Header from './components/header/Header';
import 'bootstrap/dist/css/bootstrap.min.css';
import Main from './components/main/Main';
function App() {
  return (

    <div className={styleAPP.body}>
      <Header />
      <Main  className={styleAPP.wrapper}/>
    </div>


  );
}

export default App;
