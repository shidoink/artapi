//Get Data
const getData= async (id) =>{
    let response = await axios.get(`https://api.artic.edu/api/v1/artworks/${id}`)
    //console.log(response)
    let artist_title= response.data.data.artist_title
    //console.log(artist_title)
    let art_category= response.data.data.category_titles[0]
    //console.log(art_category)
    let classification = response.data.data.classification_title
    //console.log(classification)
    let year_painted = response.data.data.date_display
    //console.log(year_painted)
    const artObj= {
        'artist_title': (' ' +artist_title),
        'art_category': (' ' +art_category),
        'classification': (' ' +classification),
        'year_painted': (' ' +year_painted)
    }
    //console.log(artObj)
    alert(Object.values(artObj))
}

//load data

const load_data = async () =>{
    const obj = await getData();
    console.log(obj)
}