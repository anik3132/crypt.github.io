import React,{useState,useEffect} from 'react'
import axios from 'axios'
import API1 from './API1'

const API = () => {
    const [coins,setCoins] = useState([])
    const [search,setsearch]= useState('')
    useEffect(() => {
        axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
        .then(res=>{
            setCoins(res.data)
        }).catch(err=>{
            alert(err)
        })
    }, [])
    const handle=e=>{
        setsearch(e.target.value)
    }
    const filterCoins= coins.filter(coin=>
        coin.name.toLowerCase().includes(search.toLocaleLowerCase())
    )
    return (
        <>
        <div>
        <h1 className="text-center ">srearch any coins</h1>           
        <input type="text" name="search" id="s" className="form-control m-5" placeholder="sreach any crypt" onChange={handle} />
        </div>
        <div>
            {
                filterCoins.map((val)=>{ 
                    return(
                    <API1 key={val.id} name={val.name} image={val.image} symble={val.symbol} price={val.current_price} volume={val.market_cap} priceChange={val.price_change_percentage_24h} />)
                })
            }
        </div>
        </>
    )
}

export default API
