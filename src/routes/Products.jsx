import React, { useContext, useEffect } from 'react'
import { ProductContext } from '../context/Product.context'
import { Fetch } from '../logic/Fetch'
import "../App.css"
import SearchBar from '../components/SearchBar'
import Filters from '../components/Filters'
import Card from '../components/Card'
const Products = () => {
    let { state: { products}, dispatch ,filterState,filterState:{searchQuery,Color,Gender,Price,Type}} = useContext(ProductContext)
    useEffect(() => {
            Fetch()
            .then((r) =>dispatch({ type: "GET_PRODUCTS", payload: r }))
            .catch((e) => console.log(e))
    }, [])
    const transFormation = () => {
        let result = products
        // text search 
        if (searchQuery) {
            searchQuery=searchQuery.toLowerCase()
            result = products.filter((el) => {
                if(el.name.toLowerCase()===searchQuery || el.color.toLowerCase()===searchQuery || el.gender.toLowerCase()===searchQuery || el.type.toLowerCase()===searchQuery || el.price==searchQuery)return true
            })
        }
        // filter color
        if (Color.length > 0) {
            let ans = []
            for (let i = 0; i < Color.length; i++){
               ans=[...ans,...result.filter((el)=>el.color===Color[i])]
            }
            result =ans
        }

        // filter Gender
        if (Gender.length > 0) {
            let ans = []
            for (let i = 0; i < Gender.length; i++){
               ans=[...ans,...result.filter((el)=>el.gender===Gender[i])]
            }
            result =ans
        }
        // filter type
        if (Type.length > 0) {
            let ans = []
            for (let i = 0; i < Type.length; i++){
               ans=[...ans,...result.filter((el)=>el.type===Type[i])]
            }
            result =ans
        }
        // filter by price 
        if (Price.length > 0) {
            let ans = []
            for (let i = 0; i < Price.length; i++){
                let [min, max] = Price[i].split("-")
                // console.log(min,max)
                ans = [...ans, ...result.filter((el) => {
                   if(+el.price>=+min && +el.price<=+max)return true
               })]
            }
            result =ans
        }



        console.log("result",result)
        return result
    }
    console.log(filterState)
  return (
      <main className='product-container-main'>
          <SearchBar />
          <div className="product-container">
              <Filters />
              <div className="products">
          {transFormation().length===0 && <p>Searched Product not found</p>}
                  {transFormation().map((el, i) => <Card key={i}{...el} />)}
              </div>
          </div>
    </main>
  )
}

export default Products