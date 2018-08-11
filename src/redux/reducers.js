const initialState = {
  albumsReducer: {
    albums: []
  }
}

export const albumsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'GET_ALBUMS':
      return {
        ...state
      }
    default:
      return state
  }
}
