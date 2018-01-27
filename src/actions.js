export const CHANGE_URL = 'CHANGE_URL';
export const changeUrl = url => ({
  type: CHANGE_URL,
  url
});

export const SET_INSTRUCTIONS = 'SET_INSTRUCTIONS';
export const setInstructions = instructions => ({
  type: SET_INSTRUCTIONS,
  instructions
});

export const HIDE_CARD = 'HIDE_CARD';
export const hideCard = hidden => ({
  type: HIDE_CARD,
  hidden
});

export const SET_CARD_AS_SEEN = 'SET_CARD_AS_SEEN';
export const setCardAsSeen = time => ({
  type: SET_CARD_AS_SEEN,
  seen: true,
  time
});
