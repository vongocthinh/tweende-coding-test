import UserInfo from './component/UserInfo';
import './App.css';
// Bootstrap CSS
import 'bootstrap/dist/css/bootstrap.min.css';
// Bootstrap Bundle JS
import 'bootstrap/dist/js/bootstrap.bundle.min';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <UserInfo />
      </header>
    </div>
  );
}

export default App;
