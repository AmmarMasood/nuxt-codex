export default defineEventHandler(async () => {

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/factions?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    })

    const body = await response.json()
    const factions = body.data.map((faction) => {
      return {
        name: faction.attributes.name,
        shortName: faction.attributes.shortName,
        image: faction.attributes.image?.data.attributes.url
      }
    })

    return factions
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
})
