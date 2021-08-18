import { types } from "./types";

export const carReducer = (state = [], action) => {
  switch (action.type) {
    case types.ADD_CAR_LOCALS: {
      return action.payload;
    }
    case types.ADD_CAR: {
      if (!state.some((el) => el.id === action.payload.id)) {
        return state.concat({
          ...action.payload,
          cantidad: 1,
        });
      }
      return state.reduce((acc, _data) => {
        if (_data.id === action.payload.id) {
          return acc.concat({ ..._data, cantidad: _data.cantidad + 1 });
        } else {
          return acc.concat({ ..._data });
        }
      }, []);
    }
    case types.REMOVE_CAR: {
      return state.reduce((acc, _data) => {
        if (_data.id === action.payload.id) {
          if (_data.cantidad === 1) {
            return acc;
          }
          return acc.concat({ ..._data, cantidad: _data.cantidad - 1 });
        } else {
          return acc.concat({ ..._data });
        }
      }, []);
    }
    case types.REMOVEALL_CAR: {
      return state.reduce((acc, _data) => {
        if (_data.id === action.payload.id) return acc;
        return acc.concat({ ..._data });
      }, []);
    }
    case types.ADD_MANUAL: {
      return state.reduce((acc, _data) => {
        if (_data.id === action.payload.id) {
          if (action.payload.manual <= 0) {
            return acc;
          }
          return acc.concat({
            ..._data,
            cantidad: Number(action.payload.manual),
          });
        } else {
          return acc.concat({ ..._data });
        }
      }, []);
    }
    default:
      return state;
  }
};
