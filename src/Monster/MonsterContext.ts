import React, { createContext } from "react";

//Skapa en array av monster som ska bli det initialavärdet till monstercontext

//Börja med att skapa en type alias för Monster
//discriminatorn är type

export type KindMonster = {
  type: "kindmonster";
  name: string;
  eyes: number;
  fleshEater: boolean;
  pet: "Dragonpuppy" | "Kitten"; //union stringlitteral
};

type EvilMonster = {
  type: "evilmonster";
  name: string;
  eyes: number;
  goodHunter: boolean;
  favouritePrays: FavouritePrays[];
  pet: string; //union stringlitteral
};

type FavouritePrays = {
  kindOfPray: string;
  habitat: string;
  hardToCatchLevel: number;
};

export type initialState = {
  kindMonsters: KindMonster[];
  evilMonsters: EvilMonster[];
};

export const initialMonsters: initialState = {
  kindMonsters: [
    {
      type: "kindmonster",
      name: "Lilly",
      eyes: 12,
      fleshEater: true,
      pet: "Dragonpuppy",
    },
    {
      type: "kindmonster",
      name: "Maximus",
      eyes: 8,
      fleshEater: false,
      pet: "Kitten",
    },
    {
      type: "kindmonster",
      name: "Aurora",
      eyes: 10,
      fleshEater: true,
      pet: "Dragonpuppy",
    },
    {
      type: "kindmonster",
      name: "Thalia",
      eyes: 6,
      fleshEater: false,
      pet: "Kitten",
    },
    {
      type: "kindmonster",
      name: "Zephyr",
      eyes: 14,
      fleshEater: true,
      pet: "Kitten",
    },
    {
      type: "kindmonster",
      name: "Cassius",
      eyes: 9,
      fleshEater: false,
      pet: "Dragonpuppy",
    },
  ],
  evilMonsters: [
    {
      type: "evilmonster",
      name: "Slayer Demon",
      eyes: 66,
      goodHunter: false,
      favouritePrays: [
        { kindOfPray: "humans", habitat: "all around", hardToCatchLevel: 2 },
      ],
      pet: "Slayer unicorn",
    },
    {
      type: "evilmonster",
      name: "Shadow Behemoth",
      eyes: 30,
      goodHunter: true,
      favouritePrays: [
        { kindOfPray: "elves", habitat: "forests", hardToCatchLevel: 4 },
      ],
      pet: "Shadow Dragon",
    },
    {
      type: "evilmonster",
      name: "Bloodfiend",
      eyes: 18,
      goodHunter: false,
      favouritePrays: [
        { kindOfPray: "vampires", habitat: "dark alleys", hardToCatchLevel: 3 },
      ],
      pet: "Bloodhound",
    },
    {
      type: "evilmonster",
      name: "Doomsday Crawler",
      eyes: 42,
      goodHunter: true,
      favouritePrays: [
        {
          kindOfPray: "small mammals",
          habitat: "underground tunnels",
          hardToCatchLevel: 5,
        },
      ],
      pet: "Venomous Serpent",
    },
    {
      type: "evilmonster",
      name: "Hellfire Fiend",
      eyes: 56,
      goodHunter: false,
      favouritePrays: [
        {
          kindOfPray: "souls",
          habitat: "infernal realms",
          hardToCatchLevel: 5,
        },
      ],
      pet: "Hellhound",
    },
    {
      type: "evilmonster",
      name: "Abyssal Specter",
      eyes: 72,
      goodHunter: true,
      favouritePrays: [
        {
          kindOfPray: "lost travelers",
          habitat: "haunted forests",
          hardToCatchLevel: 4,
        },
      ],
      pet: "Wraith Panther",
    },
  ],
};

export const monsterContext = createContext<{
  state: initialState;
  dispatch: React.Dispatch<Action>;
}>({
  state: initialMonsters,
  dispatch: () => null,
});
