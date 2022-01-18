import {useEffect, useState } from 'react'
// import { getProject } from '../selectors/get/getProject';

export const useGet = (getFuncion) => { 
    
    const [state, setstate] = useState({
        data:[],
        loading: true
    })

    useEffect( () => {
        getFuncion()
            .then( data => {
                setstate({
                    data: data,
                    loading:false}
                );
            })            
     }, [getFuncion])

    return state;//data[], loading: true
}