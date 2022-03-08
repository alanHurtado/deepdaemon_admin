export const deleteHProject = async(id) => {
    const urlProject ='http://localhost:4000/api/project';
    const configProject = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(id)
    }
    const respProject = await fetch( urlProject, configProject );
    const resulProject = await respProject.json();
    console.log(resulProject);
}




