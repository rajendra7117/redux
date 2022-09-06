import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { cakeSliceActions } from '../../redux-toolkit/cakes/cakeSlice'
const CakeContainer = (props) => {
    const [cakes, setCakes] = useState(1)
    const cake = useSelector((state) => state.cakes.cakes)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of cakes - {cake} </h1>
        <input type="number" min={1} max={5} onChange={(e) => setCakes(e.target.value)} value={cakes}/>
        <button onClick={() => dispatch(cakeSliceActions.buyCake(cakes))}>buy {cakes} cake</button>
    </div>
  )
}


export default CakeContainer