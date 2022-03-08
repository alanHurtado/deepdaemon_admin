export const postPublication = async(dataRelease) => {
    const urlPublication ='http://localhost:4000/api/publication';
        const configPublication = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(dataRelease)
        }
        const respPublication = await fetch( urlPublication, configPublication );
        const resulPublication = await respPublication.json();
        console.log(resulPublication);
}
