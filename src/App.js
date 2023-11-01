import "./App.css";
import { Provider } from "react-redux";
import store from "./redux/store";
import BookList from "./components/BookList";
import AddBook from "./components/AddBook";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <h1>Book Library</h1>
        <div>
          <BookList />
          <AddBook />
        </div>
      </div>
    </Provider>
  );
}

export default App;
