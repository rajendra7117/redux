import React, {useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchUsers } from '../../redux-toolkit/users/usersSlice'

const Users = () => {

    const dispatch = useDispatch()
    const data = useSelector((state) => state.users)
    useEffect(() => {
        dispatch(fetchUsers())
    }, [dispatch])


    console.log(data)
  return (

    <div>
        <h1>Users</h1>
        {data.error!=='' ? <h3>{data.error}</h3> : <>{data.loading ? <h1>loading...</h1> : data.users.map((user) => <h3>{user.name}</h3>)}</>}
    </div>
  )
}

export default Users