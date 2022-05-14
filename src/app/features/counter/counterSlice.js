import { createSlice } from '@reduxjs/toolkit';

export const counterSlice = createSlice({

    name: 'counter',

    initialState: {
        value: 5,
        myValue: 100,
        vremJson: {},
    },

    reducers: {

        increment: (state) => {
            state.myValue += 10;
            state.value += 1;

        },

        decrement: (state) => {
            state.value -= 1;
            state.myValue -= 10;

        },

        incrementByAmount: ( state, action ) => {
            state.myValue += action.payload;
            state.value += action.payload;

        },

        consoleVrem: ( state, action )=>{
            state.vremJson = action.payload;
            console.dir(state.vremJson);
        }
    },

})

export const { increment, decrement, incrementByAmount, consoleVrem } = counterSlice.actions

export const incrementAsync = (amount) => (dispatch) => {

    async function func(){

        try{
            const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=5');
            const json = await response.json();
            console.dir('json');
            console.dir(json);
            dispatch(consoleVrem(json));
        }catch(e){
            console.error(e);
        }finally{ // этот блок кода выполнится в любом случае
            console.log('finally');
        };
        
    };

    func();


    // setTimeout(() => {
    //     dispatch(incrementByAmount(amount))
    // }, 1000)

};


export const selectCount = (state) => {
    return {
        value:      state.counter.value,
        myValue:    state.counter.myValue,
    };
};

export default counterSlice.reducer;
