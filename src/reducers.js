import * as Actions from './actions';
import instructions from './assets/instructions.json';

const initialState = {
  instructions,
  hideCard: true,
  url: '',
  currentTime: 0,
  isCardHidden: true
};

export default (state = initialState, action) => {
  switch (action.type) {
    case Actions.CHANGE_URL: {
      return {
        ...state,
        url: action.url
      };
    }

    case Actions.SET_INSTRUCTIONS: {
      return {
        ...state,
        instructions: action.instructions
      };
    }

    case Actions.HIDE_CARD: {
      return {
        ...state,
        isCardHidden: action.hidden
      };
    }

    case Actions.SET_CARD_AS_SEEN: {
      return {
        ...state,
        instructions: {
          ...instructions,
          [action.time]: {
            ...instructions[action.time],
            seen: true
          }
        }
      };
    }

    default: {
      return state;
    }
  }
};
