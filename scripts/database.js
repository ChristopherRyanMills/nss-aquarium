const database = {
    fish: [
        {
            id: 1,
            name: "",
            species: "",
            diet: "",
            length: 0,
            location: ""
        }
    ]
}

//getFish copies and returns the fish array

export const getFish = () => {
    return database.fish.map(fish => ({...fish}))
}
