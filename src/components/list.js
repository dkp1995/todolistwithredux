import React, {useState,useEffect} from 'react'

import {useSelector, useDispatch} from 'react-redux'

import { deleteAction } from '../actions/formAction';

import Updateform from './updateform';


const List = () => {

    const listitem =  useSelector(state => state.formReducer.list);

    const [update , setudpate] = useState({id:'', data:''});
    const [flag, setFlag]  = useState(false);

    const dispatch = useDispatch();

    const editClicked = (val) =>{

        setudpate(val)
        setFlag(true)
    }

    const getflag = (gotflag) =>{

        setFlag(gotflag)
    }

    if(flag){

        return (
            <>
                <Updateform data={update} changeflag={getflag}/>
                
            </>
        )
        
    }

   


    return (


        <div>
                {listitem.map((value)=>{

                      return (      
                                <div key={value.id} className="list">
                                        <h3 className="listitem">{value.data}</h3>
                                        <button className="listitem btnaddlist" onClick={()=>editClicked(value)}>Edit</button>
                                        <button className="listitem btnaddlist" onClick={()=>dispatch(deleteAction(value.id))}>Delete</button>

                                </div>
                                    

                      )
                })}
                
            
        </div>
    )
}

export default List
