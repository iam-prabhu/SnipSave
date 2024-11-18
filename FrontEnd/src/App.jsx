import "./App.css";
import MiddlePart from "./Components/MiddlePart/MiddlePart";
import NavBarWrapper from "./Components/NavBar/NavBarWrapper";
import Footer from "./Components/Footer/Footer";
import InputForm from "./Components/InputForm/InputForm";
import { useState } from "react";
import backgroundImage from "./Components/BackGround/BackGround.jpg";
import Authentication from "./Components/Authentication/Authentication";

function App() {
  const [isInputFormPage, setIsInputFormPage] = useState(false);

  let handleInputFormClick = () => {
    setIsInputFormPage(() => {
      return true;
    });
  };

  return (
    <>
      <div
        style={{
          position: "fixed", // Fixed position to ensure it covers the entire viewport
          top: 0,
          left: 0,
          width: "100vw", // Full width
          height: "100vh", // Full height
          backgroundImage: `url(${backgroundImage})`,
          backgroundSize: "cover", // Ensures the image covers the whole space
          backgroundPosition: "center", // Centers the background image
          backgroundRepeat: "no-repeat", // Prevents image repetition
          zIndex: -1,
        }}
      ></div>
      <>
        <NavBarWrapper
          style={{ borderRadius: "10px" }}
          onInputFormClick={handleInputFormClick}
        />
        <MiddlePart
          onInputFormClick={handleInputFormClick}
          isInputFormPage={isInputFormPage}
        />
        <Footer />
      </>

      {/* LOGIN / SIGNUP */}

      {/* <Authentication /> */}
    </>
  );
}

export default App;
