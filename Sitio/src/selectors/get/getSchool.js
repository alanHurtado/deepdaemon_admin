export const getSchool = async() => {
    
    const url = 'http://localhost:4000/api/school';
    const resp = await fetch( url );
    const data = await resp.json();

return data;   
}
