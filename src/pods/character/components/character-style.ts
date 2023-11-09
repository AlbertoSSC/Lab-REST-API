import { CSSProperties } from 'react';

export const styles = {
  detailCardContainer: {
    display: 'flex',
    justifyContent: 'center',
  },

  cardContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    maxWidth: '400px',
    padding: '1rem',

    textWrap: 'balance',
    textAlign: 'center',
  },

  avatar: {
    minWidth: '200px',
    minHeight: '200px',
    marginBottom: '1rem',
  },

  sentencesContainer: {
    display: 'flex',
    flexDirection: 'row',
    margin: '0.3rem 0',
    width: '100%',
    alignItems: 'center',
  } as CSSProperties,

  sentenceText: {
    flex: 1,
  },

  editSentence: {
    display: 'flex',
    alignItems: 'center',
  } as CSSProperties,

  editButton: {
    margin: '0.1rem',
  },

  editButtonContainer: {
    display: 'flex',
    flexDirection: 'column',
    margin: '0.5rem',
  } as CSSProperties,
};
