import "./App.css";
import Form from "./Components/Form";
// https://www.frontendmentor.io/challenges/multistep-form-YVAnSdqQBJ
function App() {
  return (
    <div className="bg-[#EEF5FF] h-screen flex flex-col items-center sm:justify-center sm:shadow-md shadow-none">
      <Form></Form>
      <footer className=" w-full justify-center absolute bottom-0 hidden sm:flex">
        <p>Challenge by&nbsp; </p>
        <a
          href="https://www.frontendmentor.io?ref=challenge"
          target="_blank"
          rel="noreferrer"
          className="text-[#483EFF]"
        >
          Frontend Mentor
        </a>
        <span>. Coded by&nbsp; </span>
        <a
          target="_blank"
          href="https://github.com/apekul"
          rel="noreferrer"
          className="text-[#483EFF]"
        >
          apekul
        </a>
        <span>.</span>
      </footer>
    </div>
  );
}

export default App;
