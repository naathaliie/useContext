
export type Car = {
  type: "Car";
  doors: number;
  wheels: number;
  color: string;
  name: string;
  towbar: boolean;
  engin: "Electric" | "Hybrid" | "Disel" | "Bensin";
};

type Mc = {
  type: "Mc";
  wheels: number;
  color: string;
  name: string;
  offRoad: boolean;
};

type Boat = {
  type: "Boat";
  color: string;
  name: string;
  motor: "inside" | "outside";
  sail: boolean,
};

type Tank = {
  type: "Tank";
  canon_length: number;
  name: string;
  seat_belt: number;
  camoflauge: "camoflauge" | "green";
  rotating_tower: boolean;
};

export type Vehicle = Car | Mc | Boat | Tank;

export const Vehicles: Vehicle[] = [
  {
  type: "Car",
  doors: 2,
  wheels: 4,
  color: "Black",
  name: "Volvo",
  towbar: true,
  engin: "Bensin",
},
{
  type: "Tank",
  canon_length: 12,
  name: "Buldozer",
  seat_belt: 0,
  camoflauge: "camoflauge",
  rotating_tower: true,
},
{
  type: "Boat",
  color: "green",
  name: "eka",
  motor: "outside",
  sail: false,
},
{
  type: "Car",
  doors: 4,
  wheels: 3,
  color: "Pink",
  name: "BMW",
  towbar: false,
  engin: "Hybrid",
},
{
  type: "Mc",
  wheels: 2,
  color: "black",
  name: "Honda",
  offRoad: true,
},
{
  type: "Tank",
  canon_length: 3,
  name: "KillerTrap",
  seat_belt: 2,
  camoflauge: "green",
  rotating_tower: false,
},
{
  type: "Car",
  doors: 6,
  wheels: 8,
  color: "Red",
  name: "Kia",
  towbar: false,
  engin: "Electric",
}
];




