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




 /*

    const postRespons = () => {
        const result = new Promise( (func) => {
            return func();
        } );
        return result;
    };

    const url = 'https://jsonplaceholder.typicode.com/todos/1';

   
    function fetchTodos(){

        const result = postRespons()
            .then(() => {
                return fetch( url );
            })
            .then( ( respons ) => { 
                return respons.json() 
            });

        return result;

    };

    fetchTodos()
        .then( (data) => {
            console.dir(data);
        })
        .catch( (e) => {
            console.error(e);
        });
    */

    // async function fetchAsyncTodos(){
    //     await postRespons();
    //     const respons = await fetch(url);
    //     const data = await respons.json();
    //     console.dir(data);
    // };

    // fetchAsyncTodos();



   



    setTimeout(() => {
        dispatch(incrementByAmount(amount))
    }, 1000)

};


export const selectCount = (state) => {
    return {
        value:      state.counter.value,
        myValue:    state.counter.myValue,
    };
};

export default counterSlice.reducer;
