export interface CharacterEntityVm {
  bestSentences: string[];
  id: number;
  image: string;
  name: string;

  status: 'Alive' | 'Dead' | 'unknown';
  species: string;
  type: string;
  gender: 'Female' | 'Male' | 'Genderless' | 'unknown';
  origin: string;
  location: string;
}
