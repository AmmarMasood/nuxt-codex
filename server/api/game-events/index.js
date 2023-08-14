export default defineEventHandler(async () => {

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/game-events?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    })

    const body = await response.json()
    const events = body.data.map((event) => {
      const startDateTime = new Date(event.attributes.start);
      const endDateTime = new Date(event.attributes.end);

      startDateTime.setHours(8, 0, 0, 0);
      endDateTime.setHours(8, 0, 0, 0);
      endDateTime.setDate(endDateTime.getDate() + 1);

      return {
        name: event.attributes.name,
        description: event.attributes.description,
        image: event.attributes.image?.data.attributes.url,
        start: Math.floor(startDateTime.getTime() / 1000),
        end: Math.floor(endDateTime.getTime() / 1000),
        localTime: new Date().toISOString()
      };
    });

    return events
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
})
