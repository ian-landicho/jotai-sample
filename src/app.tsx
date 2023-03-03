import "./app.css";
import AgeInput from "./age-input";
import NameInput from "./name-input";
import Profile from "./profile";

export default function App() {
  return (
    <>
      <Title />
      <NameInput />
      <AgeInput />
      <Profile />
    </>
  );
}

function Title() {
  return (
    <div className="container">
      <h1>Create User Profile</h1>
    </div>
  );
}
