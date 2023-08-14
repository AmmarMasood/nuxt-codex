export default defineEventHandler(async () => {

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/game-events?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    })

    const body = await response.json()
    const events = body.data.map((event) => {
      return {
        name: event.attributes.name,
        description: event.attributes.description,
        image: event.attributes.image?.data.attributes.url,
        start: event.attributes.start,
        end: event.attributes.end
      }
    })

    return events
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
})
