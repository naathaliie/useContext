import { Vehicle } from "./VehicleTypes";

type VehicleListProp = {
  Vehicles: Vehicle[];
};

const VehicleList = ({ Vehicles }: VehicleListProp) => {
  console.log(Vehicles);
  return (
    <div className="fordonDiv">
      <h2>Fordon</h2>
      {Vehicles.map((v, index) => {
        if (v.type === "Car") {
          return (
            <ul key={index}>
              Typ av fordon: {v.type === "Car" ? "Bil" : "Fordon"}
              <li>Modell: {v.name}</li>
              <li>Färg: {v.color}</li>
              <li>Antal dörrar: {v.doors}</li>
              <li>Motor: {v.engin}</li>
              <li>Dragkrok: {v.towbar ? "ja" : "nej"}</li>
              <li>Antal hjul: {v.wheels}</li>
            </ul>
          );
        } else if (v.type === "Mc") {
          return (
            <ul key={index}>
              Typ av fordon: {v.type === "Mc" ? "Mc" : "Fordon"}
              <li>Modell: {v.name}</li>
              <li>Färg: {v.color}</li>
              <li>Kan köras i skog: {v.offRoad ? "ja" : "nej"}</li>
              <li>Antal hjul: {v.wheels}</li>
            </ul>
          );
        } else if (v.type === "Boat") {
          return (
            <ul key={index}>
              Typ av fordon: {v.type === "Boat" ? "Båt" : "Fordon"}
              <li>Namn: {v.name}</li>
              <li>Färg: {v.color}</li>
              <li>Motor: {v.motor}</li>
              <li>Segel: {v.sail ? "Ja" : "Nej"}</li>
            </ul>
          );
        } else if (v.type === "Tank") {
          return (
            <ul key={index}>
              Typ av fordon: {v.type === "Tank" ? "Pansarvagn" : "Fordon"}
              <li>Namn: {v.name}</li>
              <li>Längd på kanon: {v.canon_length}m</li>
              <li>Bälte: {v.seat_belt}</li>
              <li>Roterande torn: {v.rotating_tower ? "Ja" : "Nej"}</li>
              <li>Färg: {v.camoflauge}</li>
            </ul>
          );
        }
      })}
    </div>
  );
};

export default VehicleList;
