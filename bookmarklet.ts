const getMetaValue = (propName: string) => {
  const metaTags = document.getElementsByTagName('meta')

  for (let i = 0; i < metaTags.length; i++) {
    const tag = metaTags[i]

    const metaName = tag.getAttribute('property') || tag.getAttribute('name')

    if (metaName === propName) {
      return tag.getAttribute('content')
    }
  }
}

javascript: (() => {
  const requestURL = 'http://127.0.0.1:8080/api/readingList'
  const token = 'dfgkjlhsdfgkljghklhj'

  const pageTitle = document.title
  const pageURL = location.href

  const metaDescription =
    getMetaValue('og:description') || getMetaValue('description')
  const metaImage = getMetaValue('og:image')

  console.log(
    'BOOKMARKET PRESSED:',
    pageTitle,
    pageURL,
    metaDescription,
    metaImage
  )

  const url = new URL(requestURL)
  const searchParams = url.searchParams

  searchParams.set('title', pageTitle)
  searchParams.set('url', pageURL)
  searchParams.set('description', metaDescription || '')
  searchParams.set('image', metaImage || '')
  // searchParams.set('nexturl', pageURL)
  searchParams.set('token', token)

  location.href = url.toString()
})()
