import React from 'react'

const Counter=({counter,store})=>{
    console.log(counter);
    const Dodaj = () => {
        store.dispatch({
            type:'INCREMENT_COUNTER',
            payload:{
                id:counter.id
            }
        })}
    const Odejmij = () => {
        store.dispatch({
            type:'DECREMENT_COUNTER',
            payload:{
                id:counter.id
            }
        })
    }
    const zmianawartosci = (e) => {
        store.dispatch({
            type:'CHANGE_INCREMENTED_VALUE',
            payload:{
                id:counter.id,
                change:e.target.value
            }
            })
        }
    
    const Usun=()=>{
        store.dispatch({
            type:'DELETE_COUNTER',
            payload:{
                id:counter.id
            }
            })
    }

    return(
        
        <div key={counter.id}>
        Wartość: {counter.value}
        <button onClick={Odejmij}> Odejmij </button>
        <button onClick={Dodaj}> Dodaj </button>
        <input type='number' value={counter.change} onChange={zmianawartosci}/>
        <button onClick={Usun}> Usuń Licznik </button>
        </div>
        
    )
}

export default Counter