import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import BlogPage from "./pages/BlogPage";
import ProjectPage from "./pages/ProjectPage"

function App() {
  return (
    <>
    <div className="dark:bg-[#18181B]">
    <Router>
    <Header />
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/blog" element = {<BlogPage />} />
        <Route path="/projects" element = {<ProjectPage />} />
      </Routes>
      <Footer />
    </Router>
    </div>
    </>
  );
}

export default App;
