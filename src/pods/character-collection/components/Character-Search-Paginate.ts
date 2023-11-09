import { CharacterEntityVm } from 'common';

const charPerPage = 20;

export const paginateArray = (
  filteredArray: CharacterEntityVm[],
  setSearchCharacterTotalPages: React.Dispatch<React.SetStateAction<number>>
) => {
  const paginatedArray = [];

  const pageCount = Math.ceil(filteredArray.length / charPerPage);

  for (let i = 0; i < pageCount; i++) {
    paginatedArray.push(
      filteredArray.slice(i * charPerPage, (i + 1) * charPerPage)
    );
  }

  setSearchCharacterTotalPages(pageCount);
  return paginatedArray;
};
