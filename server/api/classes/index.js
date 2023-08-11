export default defineEventHandler(async () => {

  try {
    const response = await fetch(`${process.env.BACKEND_URL}/classes?populate=*`, {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    })

    const body = await response.json()
    const classes = body.data.map((heroClass) => {
      return {
        name: heroClass.attributes.name,
        image: heroClass.attributes.image?.data.attributes.url
      }
    })

    return classes
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
})
