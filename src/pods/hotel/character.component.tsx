import React from 'react';

import { Link } from 'react-router-dom';

import {
  Avatar,
  Button,
  Card,
  Divider,
  TextField,
  Typography,
} from '@mui/material';

import { CharacterEntityVm } from 'common';
import {
  addNewSentence,
  deleteSentence,
  saveEditedSentence,
  styles,
} from './components';

interface Props {
  character: CharacterEntityVm;
  setCharacter: React.Dispatch<React.SetStateAction<CharacterEntityVm>>;
}

export const CharacterComponent: React.FunctionComponent<Props> = (props) => {
  const { character, setCharacter } = props;

  const [newSentence, setNewSentence] = React.useState('');
  const [sentenceEdited, setSentenceEdited] = React.useState('');
  const [addingSentences, setAddingSentences] = React.useState(false);
  const [editSentence, setEditSentence] = React.useState<boolean[]>([]);

  const enableEditSentence = (index: number) => {
    const updatedEditSentences = [...editSentence];
    updatedEditSentences[index] = true;
    setEditSentence(updatedEditSentences);
  };

  const disableEditSentence = (index: number) => {
    const updatedEditSentences = [...editSentence];
    updatedEditSentences[index] = false;
    setEditSentence(updatedEditSentences);
  };

  if (character)
    return (
      <>
        <div style={styles.detailCardContainer}>
          <Card sx={styles.cardContainer}>
            <h1>{character.name}</h1>
            <Avatar
              src={character.image}
              alt="avatar image"
              sx={styles.avatar}
            />
            <Typography>
              <b>
                {character.status} · {character.species} · {character.gender}{' '}
              </b>
            </Typography>

            <Typography>
              <i>Org.:</i> {character.origin}
            </Typography>
            <Typography>
              <i>Loc.:</i> {character.location}
            </Typography>

            <Divider sx={{ width: '100%', marginBottom: '0.5rem' }} />

            {addingSentences ||
            (character.bestSentences && character.bestSentences.length > 0) ? (
              <>
                <h4>Best Sentences</h4>
                {character.bestSentences.map((sentence, index) => (
                  <React.Fragment key={index}>
                    <div style={styles.sentencesContainer}>
                      <div style={styles.sentenceText}>
                        <Typography sx={{ margin: '0.5rem' }}>
                          {sentence}
                        </Typography>
                      </div>
                      <div style={styles.editSentence}>
                        {editSentence && editSentence[index] ? (
                          <>
                            <TextField
                              defaultValue={sentence}
                              onChange={(e) =>
                                setSentenceEdited(e.target.value)
                              }
                              label="Edit sentence"
                              variant="outlined"
                              sx={{ margin: '0.5rem' }}
                            />
                            <Button
                              size="small"
                              variant="outlined"
                              sx={styles.editButton}
                              onClick={() => {
                                saveEditedSentence({
                                  index,
                                  character,
                                  setCharacter,
                                  sentenceEdited,
                                  disableEditSentence,
                                });
                              }}
                            >
                              Save
                            </Button>
                          </>
                        ) : (
                          <div style={styles.editButtonContainer}>
                            <Button
                              size="small"
                              variant="outlined"
                              sx={styles.editButton}
                              onClick={() => {
                                enableEditSentence(index);
                              }}
                            >
                              Edit
                            </Button>
                            <Button
                              size="small"
                              variant="outlined"
                              onClick={() =>
                                deleteSentence({
                                  index,
                                  character,
                                  setCharacter,
                                })
                              }
                            >
                              Delete
                            </Button>
                          </div>
                        )}
                      </div>
                    </div>
                    <Divider sx={{ width: '60%' }} />
                  </React.Fragment>
                ))}

                <div style={{ display: 'flex', margin: '1rem' }}>
                  <TextField
                    value={newSentence}
                    onChange={(e) => setNewSentence(e.target.value)}
                    label="Add sentence"
                    variant="outlined"
                    sx={{ flex: 1, marginRight: '1rem' }}
                  />
                  <Button
                    variant="contained"
                    onClick={() =>
                      addNewSentence({
                        character,
                        setCharacter,
                        newSentence,
                        setNewSentence,
                      })
                    }
                  >
                    Add
                  </Button>
                </div>
              </>
            ) : (
              <Button
                variant="contained"
                sx={{ marginTop: '1rem' }}
                onClick={() => setAddingSentences(true)}
              >
                Add character best sentences
              </Button>
            )}
            <Button
              variant="outlined"
              sx={{ width: '100%', marginTop: '1rem' }}
              component={Link}
              to="/"
            >
              Volver
            </Button>
          </Card>
        </div>
      </>
    );
};
