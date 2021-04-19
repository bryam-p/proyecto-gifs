export const getGifs = async (category) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${category}&limit=16&api_key=pH6Xy9jt2HfuPKrOpDs5NR0mODR8M69d`
    const resp = await fetch(url)
    const { data } = await resp.json()

    console.log(data)

    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
            url_origin: img.url
        }
    })

    return gifs
}