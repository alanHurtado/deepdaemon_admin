

export const getMember = async() => {
    const url = 'http://localhost:4000/api/member';
        const resp = await fetch( url );
        const data = await resp.json();
    
    return data;   
}
