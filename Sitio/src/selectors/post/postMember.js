const postMember = async(dataMember) => {
    const urlMember='http://localhost:4000/api/member';
        const configMember = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataMember)
        };
        const repMember = await fetch( urlMember, configMember );
        const resulMember = await repMember.json();
        console.log(resulMember);
}

export default postMember;