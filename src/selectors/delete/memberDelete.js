export const memberDelete = async(id) => {
    const urlMember ='http://localhost:4000/api/member';
    const configMember = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    const respMember = await fetch( urlMember, configMember );
    const resulMember= await respMember.json();
    console.log(resulMember);
}
