
const initialState = [
    { incomeSource: 'Job', expenditure: 'House rent', proportion: 30 , id: 1},
    { incomeSource: 'Job', expenditure: 'Cab rent', proportion: 5 , id: 2},
    { incomeSource: 'Job', expenditure: 'Phone EMI', proportion: 20 , id:3},
    { incomeSource: 'Freelancing', expenditure: 'Party', proportion: 10 , id:4},
    { incomeSource: 'Freelancing', expenditure: 'House rent', proportion: 20 , id:5},
];

export const appReducer = function(state = initialState, action) {

    switch (action.type) {
        case 'add' : return addDataFn(state);
        case 'edit' : return modifyDataFn(state, action);
        case 'delete' : return deleteDataFn(state, action);
        default: return state;
    }
}

const modifyDataFn = (state, action) => {
    const { payload, payload:{keyName} } = action;
    let updatedValue = "";
    const idx = state.findIndex((obj => obj.id === payload.id));
    updatedValue = keyName === "proportion" ? Number(payload[keyName]) : payload[keyName]

    const updatedObj = { ...state[idx], [keyName]: updatedValue}

    let modifiedState = [...state];

    modifiedState[idx] = updatedObj;
    return modifiedState;
}


const deleteDataFn = (state, action) => {
    const { payload } = action;
    const idx = state.findIndex((obj => obj.id === payload.id));
    let modifiedState = [...state];
    modifiedState.splice(idx, 1);
    return modifiedState;
}

const addDataFn = (state) => {
    let modifiedState = [...state];
    modifiedState.push({ incomeSource: 'Add IncomeSource', expenditure: 'Add expenditure', proportion: 5 , id: Date.now()},);
    return modifiedState;
}

