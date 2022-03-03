export const getMemberStatus = async(status) => {

    
    const url = `http://localhost:4000/api/member/${status}`;
        const resp = await fetch( url );
        const data = await resp.json();
    
    return data;   
}
