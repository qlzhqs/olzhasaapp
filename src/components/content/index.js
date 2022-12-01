import React, { useState } from "react";

import swCharacters from "../../data/characters.json";
import swPlanets from "../../data/planets.json";
import { CharacterLayout } from "../sw-character-layout";
import { CharacterList } from "../sw-character-list";

import { Select } from "../sw-select";

export const Content = () => {
  const [tab, setTab] = useState("Heroes");

  const handleChangeTab = (e) => {
    setTab(e.target.value);
  };

  return (
    <div className="content-layout">
      <Select tab={tab} handleChangeTab={handleChangeTab} />

      {tab === "Heroes" &&
        swCharacters.map((character) => (
          <CharacterLayout key={character.name} item={character}>
            <CharacterList label="Name" item={character.name} />
              <CharacterList label="Club: " item={character.club}/>
          </CharacterLayout>
        ))}

      {tab === "Villain" &&
        swPlanets.map((planet) => (
          <CharacterLayout key={planet.name} item={planet}>
            <CharacterList label="name:" item={planet.name} />
              <CharacterList label="Club: " item={planet.club}/>
          </CharacterLayout>
        ))}
    </div>
  );
};
