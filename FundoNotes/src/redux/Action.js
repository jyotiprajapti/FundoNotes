import {TOGGLE_GRID_LABEL_VIEW} from './Constants';
import {LABEL_DATA} from './Constants';
import {DATE_AND_TIME} from './Constants';
export const toggleGridLabelView = () => {
  return {
    type: TOGGLE_GRID_LABEL_VIEW,
  };
};

export const labelsData = label => {
  return {
    type: LABEL_DATA,
    payload: label,
  };
};

export const dateAndTime = dateTime => {
  return {
    type: DATE_AND_TIME,
    payload: dateTime,
  };
};
