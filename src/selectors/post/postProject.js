
const postProject = async(dataProject) => {
    const urlProject ='http://localhost:4000/api/project';
    const configProject = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataProject)
    }
    const respProject = await fetch( urlProject, configProject );
    const resulProject = await respProject.json();
    console.log(resulProject);
}

export default postProject
