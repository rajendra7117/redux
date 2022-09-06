import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux/'
import { fetchPosts } from '../../redux/posts/postActions'

const Posts = () => {

  const dispatch = useDispatch()
  const posts = useSelector((state => state.posts))
  
  useEffect(() => {
    dispatch(fetchPosts())
  }, [dispatch])

  console.log(posts)

  return (
    <div>
      <h1>Posts</h1>
      {posts.isLoading && <h1>Loading...</h1>}
      {posts.posts.length>0 && <>{posts.posts.map((post) => <div key={post.id}>{post.title}</div>)}</>}
      {posts.error!=='' && <h1>{posts.error}</h1>}
    </div>
  )
}

export default Posts