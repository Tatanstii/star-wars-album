export type Starship = {
  name: string;
  model: string;
  manufacturer: string;
  costInCredits: string;
  length: string;
  maxAtmospheringSpeed: string;
  crew: string;
  passengers: string;
  cargoCapacity: string;
  consumables: string;
  hyperdriveRating: string;
  mglt: string;
  starshipClass: string;
  pilots: any[];
  films: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type Character = {
  name: string;
  height: string;
  mass: string;
  hairColor: string;
  skinColor: string;
  eyeColor: string;
  birthYear: string;
  gender: string;
  homeworld: string;
  films: string[];
  species: any[];
  vehicles: string[];
  starships: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type Film = {
  title: string;
  episodeID: number;
  openingCrawl: string;
  director: string;
  producer: string;
  releaseDate: Date;
  characters: string[];
  planets: string[];
  starships: string[];
  vehicles: string[];
  species: string[];
  created: Date;
  edited: Date;
  url: string;
};

export type Album = {
  characters: Character[];
  starships: Starship[];
  films: Film[];
};
