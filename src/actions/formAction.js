

export const addAction = (todoText) => {
   
    return {

            type: 'addTodo',
            payload: {
                
                        id:Date.now(),
                        data: todoText
            }
    }
     
}

export const deleteAction = (id1) => {
   
    return {

            type: 'deleteTodo',
            payload: id1
    }
     
}

export const editAction = (data) => {
   
    return {

            type: 'editTodo',
            payload: {
                    id:data.id,
                    data:data.data
            }
    }
     
}

export const remove = () => {
   
        return {
    
                type: 'removeAll',
              
        }
         
    }



