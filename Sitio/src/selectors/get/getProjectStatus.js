export const getProjectStatus = async(status) => {

    
    const url = `http://localhost:4000/api/project/${status}`;
        const resp = await fetch( url );
        const data = await resp.json();
    
    return data;   
}
