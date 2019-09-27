
import * as api from '../services/api';
export default {

  namespace: 'signup',

  state: {},

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *signup({ payload }, { call, put }) {  // eslint-disable-line
      const result = yield call(api.doSignUp(payload))
      yield put({ type: 'signup' });
    },
  },

  reducers: {
    signup(state, action) {
      return { ...state, ...action.payload };
    },
  },

};
