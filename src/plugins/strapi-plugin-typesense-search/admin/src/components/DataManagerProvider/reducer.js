import produce, { current } from 'immer';
import get from 'lodash/get';
import set from 'lodash/set';
import * as actions from './constants';

const initialState = {
  components: {},
  contentTypes: {},
  initialComponents: {},
  initialContentTypes: {},
  initialData: {},
  modifiedData: {},
  reservedNames: {},
  isLoading: true,
  isLoadingForDataToBeSet: true,
};

const reducer = (state = initialState, action) =>
  // eslint-disable-next-line consistent-return
  produce(state, draftState => {
    switch (action.type) {
      default:
        return draftState;
    }
  });

export default reducer;
export { initialState };
