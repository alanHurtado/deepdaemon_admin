const postCareer = async(dataCareer) => {
    const urlCareer ='http://localhost:4000/api/career';
    const configCareer = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataCareer)
    };
    const respCareer = await fetch( urlCareer, configCareer );
    const resulCareer = await respCareer.json();
    console.log(resulCareer);
}

export default postCareer;
