import axios from 'axios';

import { CharacterEntityVm, mapFromApiToVm } from 'common';
import { getCharacter } from '../api';

interface Props {
  character: CharacterEntityVm;
  setCharacter: React.Dispatch<React.SetStateAction<CharacterEntityVm>>;

  index?: number;

  newSentence?: string;
  setNewSentence?: React.Dispatch<React.SetStateAction<string>>;

  sentenceEdited?: string;
  disableEditSentence?: (index: number) => void;
}

export const addNewSentence = async (props: Props) => {
  const apiCharacter = await getCharacter(props.character?.id);
  const updatedCharacter = {
    ...apiCharacter,
    bestSentences: [...apiCharacter.bestSentences, props.newSentence],
  };

  props.setCharacter(mapFromApiToVm(updatedCharacter));

  await axios.put(
    process.env.API_BASE_URL + '/characters/' + props.character.id.toString(),
    updatedCharacter
  );

  props.setNewSentence('');
};

export const deleteSentence = async (props: Props) => {
  const apiCharacter = await getCharacter(props.character.id);
  const updatedCharacter = {
    ...apiCharacter,
    bestSentences: props.character.bestSentences.filter(
      (_, i) => i !== props.index
    ),
  };

  props.setCharacter(mapFromApiToVm(updatedCharacter));

  await axios.put(
    process.env.API_BASE_URL + '/characters/' + props.character.id.toString(),
    updatedCharacter
  );
};

export const saveEditedSentence = async (props: Props) => {
  const apiCharacter = await getCharacter(props.character.id);
  const updatedCharacter = {
    ...apiCharacter,
    bestSentences: props.character.bestSentences.map((sentence, i) =>
      i === props.index ? props.sentenceEdited : sentence
    ),
  };

  props.setCharacter(mapFromApiToVm(updatedCharacter));

  await axios.put(
    process.env.API_BASE_URL + '/characters/' + props.character.id.toString(),
    updatedCharacter
  );

  props.disableEditSentence(props.index);
};
