export default {

    namespace: 'antdForm',
  
    state: {
        autoCompleteResult: [],
        confirmDirty: false,
        modalVisible: false,
        action: 'login',
        hasLogined: false,
        username: '',
        userid: 0
    },
  
    subscriptions: {
      setup({ dispatch, history }) {  // eslint-disable-line
      },
    },
  
    effects: {
      *change({ payload }, { call, put }) {  // eslint-disable-line
        yield put({ type: 'changFrom',payload });
      },
    },
  
    reducers: {
      changeFrom(state, action) {
        // console.log('changeKey');
        // console.log(action);
        return { ...state, ...action.payload };
      },
    },
  
  };
  