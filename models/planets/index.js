import planets from "../../planets.js";

export const getAllPlanets = () => {
  return planets;
};

export const getAllPlanetsById = (id) => {
  const result = planets.find((item) => item.id === id);
  return result || null;
};
