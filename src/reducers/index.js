import { combineReducers } from 'redux';

const balanceReducer = () => {
    return [
        {
            balance: '£300'
        },

        {
            balance: '£1,520'
        },

        {
            balance: '£765'
        },

        {
            balance: '£980'
        }

    ]
};

const displayBalanceReducer = (selectedBalance=null, action) => {
    if (action.type === 'DISPLAY_BALANCE') {
        return action.payload;
    }

    return selectedBalance;
}

export default combineReducers({
    balance: balanceReducer,
    selectedBalance: displayBalanceReducer
});