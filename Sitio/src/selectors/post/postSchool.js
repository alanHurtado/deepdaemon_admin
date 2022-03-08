const postSchool = async(dataSchool) => {
    const urlSchool ='http://localhost:4000/api/school';
    const configSchool = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataSchool)
    }
    const respSchool = await fetch( urlSchool, configSchool );
    const resulSchool = await respSchool.json();
    console.log(resulSchool);
}

export default postSchool;

