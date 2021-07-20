const initalState = {

    list: []
}

const formReducer = (state= initalState, action) => {

        switch(action.type){

            case "addTodo" : 
            
                const {id, data} = action.payload
            
            return {
                    
                    list: [...state.list, {id:id, data:data}]

            }

            case "deleteTodo" :

                return {
                    
                    list : [...state.list].filter(value=>value.id!==action.payload)

                }

            case "editTodo"   :

                        for(var i in [...state.list])
                        {
                            if([...state.list][i].id==action.payload.id)
                            {
                                [...state.list][i].data = action.payload.data ;

                                return {list: state.list}
                            }
                        }

                return {

                     list: [...state.list]
                }

            case "removeAll" :
                
                return {list:[]}


            default: return state
        }

        
}

export default formReducer
