import formVisibleReducer from '../../reducers/form-visible-reducer';
import * as c from './../actions/ActionTypes';

describe("formVisibleReducer", () => {

  // First test omitted for brevity.

  test('Should toggle form visibility state to true', () => {
    expect(formVisibleReducer(false, { type: 'TOGGLE_FORM' })).toEqual(true);
  });

});