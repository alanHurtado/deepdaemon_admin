export const getTech = async() => {
    
    const url = 'http://localhost:4000/api/tech';
    const resp = await fetch( url );
    const data = await resp.json();

return data;   
}
