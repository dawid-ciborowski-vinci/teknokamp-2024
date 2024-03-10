const getAll = async () => {
    try {
        const res = await fetch('http://localhost:3000/conso ');
        return res.json();
    } catch (error) {
        console.log(error);
    }
    return null;
}

export default getAll ;