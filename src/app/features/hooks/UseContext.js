import React, { createContext, useState, useContext, useEffect  } from "react";


const AlertContext = createContext();



const Main = ({toggle}) => {


    return (
        <div>
            <h2>Какое то предложение</h2>
            <button 
                className = "btn btn-cuccess"
                onClick = { toggle }>Показать Alert</button>
        </div>
    );

};


const Alert = ({alert}) => {

    let obj = useContext(AlertContext);

    if( alert === false ){
        return null;
    };


    return (
        <div className = 'alert alert-danger'>
            Внимание-внимание, говорит Москва!
        </div>
    );
};








export default function UseContext(){
    const [alert, setAlert] = useState(true);

    const toggleAlert = () => {
        setAlert((prev) => {
            return !prev;
        });
    };


    return (
        <AlertContext.Provider value = {{
            alert, toggleAlert
        }}>

            <div className = 'container pt-3'>
                <Alert alert = {alert}/>
                <Main toggle = {toggleAlert}/>
            </div>

        </AlertContext.Provider>

    )
};