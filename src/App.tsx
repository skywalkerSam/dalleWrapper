import { useState } from "react";
import reactLogo from "./assets/react.svg";
import appLogo from "/favicon.svg";
import PWABadge from "./PWABadge.tsx";
import "./App.css";
import starboyLogo from "/logo.png";
import "tachyons";
import ErrorBoundary from "./components/ErrorBoundary.tsx";
import ImageDisplay from "./components/ImageDisplay.tsx";
import InputBox from "./components/InputBox.tsx";

const SERVER: string = "http://localhost:8080/test";

const App = () => {
  const [prompt, setPrompt] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  function onChange(event: React.ChangeEvent<HTMLTextAreaElement>) {
    console.log(event.target.value);
    setPrompt(event.target.value);
  }

  async function onSubmit() {
    setLoading(true);
    try {
      const response = await fetch(SERVER, {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prompt: prompt,
        }),
      });

      // error
      // if (!response.ok) {
      //   throw new Error(`HTTP error! status: ${response.status}`);
      // }

      // response
      // console.log(response);
      // console.log(response.headers);
      const data = await response.json();

      // error alert
      if (data.message) {
        console.log(data.message);
        alert(data.message);
      }

      // imageUrl
      if (data.imageUrl) {
        setImageUrl(data.imageUrl);
      }
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }
  return (
    <>
      <ErrorBoundary>
        <div>
          <a
            href="https://github.com/skywalkersam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={starboyLogo} alt="Starboy Logo" className="logo" />
          </a>
        </div>
        <header>
          <div>
            <h1 className="f1 red">Image Generator</h1>
            <p className="tc f6">using Dall·E by OpenAI</p>
          </div>
        </header>

        <InputBox
          onChange={onChange}
          onSubmit={onSubmit}
          loading={loading}
        ></InputBox>

        <ImageDisplay imageUrl={imageUrl}></ImageDisplay>
        <footer className="white-80 mt5">
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={appLogo} className="footerLogo" alt="animalFarm logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img
                src={reactLogo}
                className="footerLogo react"
                alt="React logo"
              />
            </a>
          </div>
          <small>&copy; Copyright 2024, Starboy Inc.</small>
        </footer>
        <PWABadge></PWABadge>
      </ErrorBoundary>
    </>
  );
};

export default App;
