import { useEffect, useState } from "react";
import { fetchBio } from "./fetchBio";

function UseEffect_2() {
  const [person, setPerson] = useState<string>("");
  const [bio, setBio] = useState<string>("");

  useEffect(() => {
    let ignore = false;

    if (!person) {
      setBio("");
      return () => {
        ignore = true;
      };
    }

    const fetchBioData = async () => {
      const bio = await fetchBio(person);
      if (!ignore) {
        setBio(bio);
      }
    };

    fetchBioData();

    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <div>
        <div className="mb-3">
          <select
            className="border border-black w-auto"
            value={person}
            onChange={(e) => setPerson(e.target.value)}
          >
            <option value="">Select a name</option>
            <option value="Taro">Taro</option>
            <option value="Jiro">Jiro</option>
            <option value="Saburo">Saburo</option>
          </select>
        </div>
        <p>{bio || "Loading..."}</p>
      </div>
    </>
  );
}

export default UseEffect_2;
