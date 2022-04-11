import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import Layout from "./components/Layout";
import Grades from "./pages/Grades";
function App() {
  return (
    <Router>
      <Layout>
        <Grades />
      </Layout>
      <Routes>
        <Route path="/" element={App} />
        <Route path="grades" element={Grades} />
      </Routes>
    </Router>
  );
}

export default App;
