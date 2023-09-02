import FoodComponent from "./components/FoodComponent";
import {useEffect, useState} from "react"
import MenuData from "./data/MenuData";
import './App.css'

function App() {
  const [foodData,setFoodData] = useState(MenuData)
  const [dataInPage,setDataInPage] = useState([])

  const pagination=()=>{
    const foodPerPage = 5
    const pages = Math.ceil(MenuData.length / foodPerPage)
    console.log("page number =",pages)

    const newFood=Array.from({length:pages},(data,index)=>{
      const start = index * foodPerPage
      return MenuData.slice(start,start+foodPerPage)
    })
    return newFood
  }

  useEffect(()=>{
    const paginate=pagination()
    setDataInPage(paginate)
  },[])

  return (
    <div className="App">
      <h1>FoodCard | Pagination</h1>
      <div className="container">
        {foodData.map((data,index)=>{
          return <FoodComponent key={index} {...data}/>
        })}
      </div>
      <div className="pagination-container">
        {dataInPage.map((data,index)=>{
          return(
            <button>{index+1}</button>
          )
        })}
      </div>
    </div>
  );
}

export default App;
