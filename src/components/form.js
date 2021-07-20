import React, {useState, useRef} from 'react'

import { useDispatch } from 'react-redux'

import { addAction, remove } from '../actions/formAction'


const Form = () => {

    const [input , setInput] = useState('');

    const inputref = useRef();

    const addinput = (e) => {

            setInput(e.target.value)
    }

    const dispatch = useDispatch();

    const addtolist = (e) => {

        e.preventDefault()

        dispatch(addAction(input))
        
        setInput('')

        inputref.current.focus();

    }


    return (
        <div>
            <form onSubmit={addtolist} className="listitem">

                    <input ref={inputref} type="text" onChange={addinput} value={input} className="input" placeholder="Type your Todo"/>
                    <input className="btnadd" type="submit" value="Add"/>
                    


            </form>
            <button className="btnadd2 listitem" onClick={()=>dispatch(remove())}>Remove All</button>
         
         </div>
    )
}

export default Form
