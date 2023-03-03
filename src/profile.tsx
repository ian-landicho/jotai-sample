import { useAtomValue } from "jotai";
import { profileAtom } from "./atoms";

// A component that displays the user's profile
export default function Profile() {
  const profile = useAtomValue(profileAtom);

  return (
    <div className="container">
      <h1>Your Profile</h1>
      <p>Name: {profile.name}</p>
      <p>Age: {profile.age}</p>
    </div>
  );
}
