import React, {useState} from 'react'
import { buyCake } from '../../redux/cakes/cakeActions'
import {connect} from 'react-redux'
const CakeContainer = (props) => {
    const [cakes, setCakes] = useState(1)
  return (
    <div>
        <h1>Number of cakes - {props.numberOfCakes} </h1>
        <input type="number" min={1} max={5} onChange={(e) => setCakes(e.target.value)} value={cakes}/>
        <button onClick={()=> props.buyCake({cakes: cakes})}>buy {cakes} cake</button>
    </div>
  )
}

const mapStateToProps = state => {
    return {
        numberOfCakes: state.cake.numberOfCakes
    }
}

const mapDispatchToProps = dispatch=> {
    return{
        buyCake: (cakes) => dispatch(buyCake(cakes))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer) 