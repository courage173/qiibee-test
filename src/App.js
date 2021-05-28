import Routes from "./routes";
import { Provider } from "react-redux";
import { Router } from "react-router-dom";
import { history } from "./redux/store";
import { store } from "./redux/store";
function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Router history={history}>
          <Routes />
        </Router>
      </Provider>
    </div>
  );
}

export default App;
