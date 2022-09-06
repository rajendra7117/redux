import React, {useState} from 'react'
import { useSelector,useDispatch  } from 'react-redux/'
import { buyIcecream } from '../../redux/icecreams/icecreamActions'
const IcecreamsContainer = () => {
    const [icecreams, setIcecreams] = useState(1)
    const numberOfIcecreams = useSelector(state => state.icecreame.numberOfIcecreams)
    const dispatch = useDispatch()
  return (
    <div>
        <h1>Number of icecreams - {numberOfIcecreams} </h1>
        <input type="number" min={1} max={5} onChange={(e) => setIcecreams(e.target.value)}  value={icecreams}/>
        <button onClick={() => dispatch(buyIcecream({icecreams: icecreams}))}>buy {icecreams} icecreame</button>
    </div>
  )
}

export default IcecreamsContainer