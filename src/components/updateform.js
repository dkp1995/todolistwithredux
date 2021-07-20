import React, {useState} from 'react'

import { useDispatch } from 'react-redux'

import { editAction } from '../actions/formAction'

const Updateform = (props) => {

    const [newVal, setnewVal] = useState(props.data)

    const dispatch = useDispatch();

    const addinput = (e) =>{

        setnewVal({
            
            id: props.data.id,
            data:e.target.value
        })

    }

    
    const updatelist = (e) =>{

        e.preventDefault()

        dispatch(editAction(newVal))

        props.changeflag(false)
    }


    return (
        <div>
                <div>
                        <form onSubmit={updatelist}>

                                <input type="text" onChange={addinput} value={newVal.data} placeholder="update todo"/>
                                <input type="submit" value="Update"/>


                        </form>
         
                </div>
            
        </div>
    )
}

export default Updateform
