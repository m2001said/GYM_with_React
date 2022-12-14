import "./App.css";
import { Route, Routes } from "react-router-dom";
import { Box } from "@mui/material";
import Home from "./pages/Home";
import ExerciseDetail from "./pages/ExerciseDetail";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m="auto">
      <Navbar />
      {/* <Home /> */}
      <Routes>
        <Route path="/GYM_with_React" element={<Home />} />
        <Route
          // /GYM_with_React
          path="/GYM_with_React/exercise/:id"
          element={<ExerciseDetail />}
        />
      </Routes>
      <Footer />
    </Box>
  );
}

export default App;
