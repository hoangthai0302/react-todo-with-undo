import  { v4 } from 'uuid'
const fakeData = {
    todos:[
        {
            id:v4(),
            text:'hey',
            complete:true
        },
        {
            id:v4(),
            text:'ho',
            complete:true
        },
        {
            id:v4(),
            text:'let go',
            complete:false
        }
    ]
}

const delay = (ms) => 
    new Promise(resolve => setTimeout(resolve, ms));

export const fetchTodos = (filter) =>{
    delay(500).then(() =>{
        switch (filter) {
            case 'all':
                return fakeData.todos;
            case 'active':
                return fakeData.todos.filter(t => !t.completed);
            case 'completed':
                return fakeData.todos.filter(t => t.completed);
            default:
                throw new Error(`Unknown filter: ${filter}`)    
        }
    })
}

class TodoApi {
    
    static getAllTodos(){
        return 
            new Promise(resolve => setTimeout(resolve, 500));
    }
}