import { combineReducers } from 'redux'
import DashboardReducer from 'modules/dashboard/DashboardReducer'
import InventoryReducer from 'modules/dashboard/InventoryReducer'
import { reducer as formReducer } from 'redux-form';

const rootReducer = combineReducers({
  dashboard: DashboardReducer,
  inventory: InventoryReducer,
  form: formReducer
});

export default rootReducer;