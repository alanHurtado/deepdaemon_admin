export const getCareer = async() => {
    
    const url = 'http://localhost:4000/api/career';
    const resp = await fetch( url );
    const data = await resp.json();

return data;   
}
