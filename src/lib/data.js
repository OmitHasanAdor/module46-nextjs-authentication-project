export const getCatagories = async () => {
  const res =await fetch('https://openapi.programming-hero.com/api/news/categories')
  const data = await res.json()
  return data.data
}
export const getNewsByCategory = async (categoryId) => {
  const res =await fetch(`https://openapi.programming-hero.com/api/news/category/${categoryId}`)
  const data = await res.json()
  return data.data
}

export const getNewsDetails= async (newsId) => {
    const res=await fetch(`https://openapi.programming-hero.com/api/news/${newsId}`)
    const news =await res.json()
    return news.data[0]

}
