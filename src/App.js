import "./App.css";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import Container from "./components/Container";
import Footer from "./components/Footer";
import { useState } from "react";

function App() {
  const [inputText, setInputText] = useState(`# Start typing...`);
  return (
    <>
      <main>
        <Container>
          <Editor inputText={inputText} setInputText={setInputText} />
          <Previewer inputText={inputText} />
        </Container>
      </main>
      <Footer />
    </>
  );
}

export default App;
