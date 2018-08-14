import { createStore } from 'redux'

const initialState = {
  albums: [
    {
      id: 0,
      name: 'dejan'
    },
    {
      id: 1,
      name: 'marko'
    },
    {
      id: 2,
      name: 'riste'
    },
    {
      id: 3,
      name: 'meri'
    },
    {
      id: 4,
      name: 'kire'
    }
  ]
}

const rootReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUMS':
      return {
        ...state
      }
    default:
      return state
  }
}

export default createStore(rootReducer, initialState)
