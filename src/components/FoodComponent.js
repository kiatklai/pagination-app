const FoodComponent=({name,image_url})=>{
  return(
    <div>
      <h1>{name}</h1>
      <img src={image_url} alt={name}/>
    </div>
  )
}

export default FoodComponent