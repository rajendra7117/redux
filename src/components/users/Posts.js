import React, {useEffect, useState} from 'react'
import { useSelector, useDispatch } from 'react-redux/'
import { fetchPostsById } from '../../redux-toolkit/posts/postsSlice'

const Posts = () => {

  const dispatch = useDispatch()
  const [id, setId] = useState(1)
  const posts = useSelector((state => state.posts))
  console.log(posts)
  
  useEffect(() => {
    dispatch(fetchPostsById(id))
  }, [dispatch, id])

  


  return (
    <div>
      <h1>Posts</h1>
      {posts.error!=='' ? <h3>{posts.error}</h3> : <>{posts.loading ? <h5>loading..</h5> : <h4>{posts.post.title}</h4>}</>}
      <button onClick={() => setId(prev => prev+1)}>next</button>
    </div>
  )
}

export default Posts