// Action creator

export const displayBalance = (balance) => {
    // return an action
    return {
        type: 'DISPLAY_BALANCE',
        payload: balance
    }
}
