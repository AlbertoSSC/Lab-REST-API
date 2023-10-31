import { CharacterEntityApi, CharacterEntityVm } from '../models/';

export const mapFromApiToVm = (
  character: CharacterEntityApi
): CharacterEntityVm => ({
  id: character.id,
  image: character.image,
  name: character.name,
  status: character.status,
  species: character.species,
  type: character.type,
  gender: character.gender,
  origin: character.origin.name,
  location: character.location.name,
});

// `${process.env.BASE_PICTURES_URL}/${character.image}`
