import { combineReducers } from 'redux'

const nameInitialState = {}

export const item = (state = nameInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}

export const kit = (state = nameInitialState, action) => {
    switch (action.type) {
        case ACTION_TYPE_1:
            return state
        case ACTION_TYPE_2:
            return state
        default:
            return state
    }
}

const inventory = combineReducers({
  item,
  kit
})

export default inventory