export default {

    namespace: 'changeMenu',
  
    state: {
      key: "picture"
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *change({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'changeKey',payload });
      },
    },
  
    reducers: {
      changeKey(state, action) {
        // console.log('changeKey');
        // console.log(action);
        return { ...state, ...action.payload };
      },
    },
  
  };
  