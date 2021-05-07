import { createStore } from 'redux';

const INITIAL_STATE ={
    data: [
        'React Native',
        'ReactJS',
        'Angular'
    ],
}

function courses(state: any = INITIAL_STATE, action: any){
    switch (action.type){
        case 'ADD_COURSE':
            return { ...state, data: [...state.data, action.title]};
        default: 
            return state;
    }
}
const store = createStore(courses);

export default store;