
import * as api from '../services/api';
export default {

    namespace: 'signin',
  
    state: {},
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *signin({ payload }, { call, put }) {  // eslint-disable-line
        // console.log('payload',payload);
        const result = yield api.doSignIn(payload)
        yield put({ 
            type: 'change' ,
            payload: result
        });
        return result.data;
      }
    },
  
    reducers: {
      change(state, action) {
        return { ...state, ...action.payload };
      },
    },
  
  };
  