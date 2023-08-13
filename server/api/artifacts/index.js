export default defineEventHandler(async () => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/artifacts?populate=*&pagination[pageSize]=300`, {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    })

    const body = await response.json()

    const artifacts = body.data.map((item) => {
      let mappedItem = {
        slug: item.attributes.slug,
        name: item.attributes.name,
        rarity: item.attributes.rarity,
        hero: undefined,
        class: undefined,
        levels: item.attributes.levels,
        image: ''
      }

      if (item.attributes.hero.data) {
        mappedItem.hero = item.attributes.hero.data.attributes.name
      }

      if (item.attributes.class.data) {
        mappedItem.class = item.attributes.class.data.attributes.name
      }

      if (item.attributes.image.data) {
        const image =  item.attributes.image.data[0].attributes
        mappedItem.image = process.env.IMAGE_URL + '/' + image.hash + image.ext
      }

      return mappedItem
    })

    return artifacts
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
})
