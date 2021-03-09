import React from 'react';
import { useFormik}  from 'formik'; 
import { v4 as uuidv4 } from "uuid";
const Formularz=({store}) =>{
    
    const formik=useFormik({
        initialValues:{
            change:1,
            value:0,
            id:uuidv4()
        },
    
    onSubmit: values=>{
        store.dispatch({
            type:"ADD_COUNTER",
            payload: {
                change:1,
                value:0,
                id:uuidv4()
            
            }
        })
        formik.resetForm({
            values: { change:1,value:0,id:uuidv4() }, 
          });
        
    },
   
    })
    return (
        <>
        <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
            <button type="submit">Dodaj Licznik</button>
        </form>
        </>
      );
    
}
 export default Formularz;


