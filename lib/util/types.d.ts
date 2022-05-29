interface Post {
  _id: string
  _createdAt: string
  title: string
  slug: {
    current: string
  }
  author: {
    name
    image
  }
  description
  mainImage: {
    asset: {
      url: string
    }
  },
  body: [object]
}

interface PostPair {
  index: number
  post1: Post
  post2: Post | null
}
