console.clear();

/// action creator policy

const createPolicy = (name, amount) => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name,
      amount,
    },
  };
};
/// action delete policy

const deletePolicy = (name) => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name,
    },
  };
};

/// action creator claim

const createClaim = (name, amoutOfMoneyToCollect) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name,
      amoutOfMoneyToCollect,
    },
  };
};

//Reducers

// Claim Reducer

const createClaimReducer = (state = [], action) => {
  switch (action.type) {
    case "CREATE_CLAIM":
      return [...state, action.payload];
      break;
    default:
      return state;
  }
};

// accounting

const accounting = (state = 100, action) => {
  switch (action.type) {
    case "CREATE_CLAIM":
      return state - action.payload.amoutOfMoneyToCollect;
      break;
    case "CREATE_POLICY":
      return state + action.payload.amount;
      break;
    default:
      return state;
  }
};

// accounting

const polices = (state = [], action) => {
  switch (action.type) {
    case "CREATE_POLICY":
      return [...state, action.payload.name];
      break;
    case "DELETE_POLICY":
      return state.filter((el) => el.name != action.payload.name);
      break;
    default:
      return state;
  }
};

const { createStore, combineReducers } = Redux;

const combinedReducers = combineReducers({
  createClaimReducer,
  accounting,
  polices,
});

const store = createStore(combinedReducers);

store.dispatch(createPolicy("omar", 20));
store.dispatch(createPolicy("ali", 30));
store.dispatch(createPolicy("ahmed", 70));
store.dispatch(createClaim("ahmed", 100));
store.dispatch(deletePolicy("ahmed"));

console.log(store.getState());

////////////////////////////////

// import axios from "axios";

// axios.defaults.baseURL = 'https://jsonplaceholder.typicode.com';
// axios.defaults.headers.common['Authorization'] = "mnaskj$c1j289u1bxsb1j2nsa@asdkj$";
// axios.defaults.headers.post['Content-Type'] = "application/json";

// axios.interceptors.request.use(
//   (req) => {
//     console.log(req);
//     // edit ?
//     return req;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error)
//   }
// );

// axios.interceptors.response.use(
//   (res) => {
//     console.log(res);
//     // edit ?
//     return res;
//   },
//   (error) => {
//     console.log(error);
//     return Promise.reject(error)
//   }
// );

import axios from "axios";

const instance = axios.create({
  baseURL: "https://jsonplaceholder.typicode.com",
});
