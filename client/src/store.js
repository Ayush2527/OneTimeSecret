import create from 'zustand'
import {devtools} from 'zustand/middleware'
 const Store = (set =>({
  secret:{},
  setCurrentSecret:(secrettesting) =>{set((state)=>({
      secret:{...state.secret,secrettesting}  
  }))},
}));


export const useStore = create(devtools(Store));

