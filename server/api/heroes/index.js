export default defineEventHandler(async (event) => {
  try {
    const response = await fetch(`${process.env.BACKEND_URL}/heroes?populate=*&pagination[pageSize]=300`, {
      headers: {
        Authorization: `Bearer ${process.env.BACKEND_API_KEY}`
      }
    })

    const body = await response.json()

    const heroes = body.data.map((item) => {
      return {
        slug: item.attributes.slug,
        name: item.attributes.name,
        isLord: item.attributes.isLord,
        isRanged: item.attributes.ranged,
        description: item.attributes.description,
        title: item.attributes.title,
        class: item.attributes.class?.data.attributes.name,
        rarity: item.attributes.rarity?.data.attributes.name,
        damageType: item.attributes.damageType?.data.attributes.name,
        image: item.attributes.image?.data.attributes.url,
        baseAttackRange: item.attributes.baseAttackRange.data?.attributes.url,
        maxAttackRange: item.attributes.maxAttackRange.data?.attributes.url,
        factions: item.attributes.factions.data.map((faction) => {
          return {
            name: faction.attributes.name,
            shortName: faction.attributes.shortName
          }
        }),
        tags: item.attributes.tags.data.map((tag) => {
          return tag.attributes.name
        }),
        basicAttributes: item.attributes.basicAttributes,
        promotedAttributes: item.attributes.promotedAttributes,
      }
    })

    return heroes
  } catch (e) {
    console.log(e)
    return 'Something went wrong'
  }
})
