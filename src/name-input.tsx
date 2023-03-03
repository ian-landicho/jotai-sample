import { useAtom } from "jotai";
import { nameAtom } from "./atoms";

// A component that allows the user to update their name
export default function NameInput() {
  const [name, setName] = useAtom(nameAtom);

  return (
    <div className="container">
      <label>Name</label>
      <br />
      <input
        type="text"
        value={name}
        onChange={event => setName(event.target.value)}
      />
    </div>
  );
}
