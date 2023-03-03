import { useAtom } from "jotai";
import { ageAtom } from "./atoms";

// A component that allows the user to update their age
export default function AgeInput() {
  const [age, setAge] = useAtom(ageAtom);

  return (
    <div className="container">
      <label>Age</label>
      <br />
      <input
        placeholder="Enter your age"
        type="number"
        value={age}
        onChange={event => setAge(event.target.valueAsNumber)}
      />
    </div>
  );
}
