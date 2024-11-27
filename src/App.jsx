import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import MyNav from "./components/MyNav";
import Welcome from "./components/Welcome";
import MyFooter from "./components/MyFooter";
import BookList from "./components/BookList";

function App() {
  return (
    <>
      <MyNav />
      <Welcome />
      <BookList />
      <MyFooter />
    </>
  );
}

export default App;
