const addFavorite = (item) => {
    const citiArr =  JSON.parse(localStorage.getItem('cities')) || [];
    citiArr.push(item);
    //compare if exist
    const result = Array.from(new Set(citiArr.map(c => c.id)))
                    .map(id => {
                        return citiArr.find(c => c.id === id)
                    })

    localStorage.setItem('cities', JSON.stringify(result));
}

const removeFavorite = (item) => {
    const citiArr =  JSON.parse(localStorage.getItem('cities'))
    let newCiti = []
    citiArr.forEach(v => {
        if(v.id !== item.id){
        newCiti.push(v)
        }
    })
    localStorage.setItem('cities', JSON.stringify(newCiti));
}

const verifyAdded = (item) => {
    const citiArr =  JSON.parse(localStorage.getItem('cities')) || []
    return citiArr.find(c => c.id === item.id)
    
}
export  {
    addFavorite,
    removeFavorite,
    verifyAdded
}