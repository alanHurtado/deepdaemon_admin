
export const getProject = async() => {
    
        const url = 'http://localhost:4000/api/project';
        const resp = await fetch( url );
        const data = await resp.json();
    
    return data;   
}
