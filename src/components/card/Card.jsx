import cardStyle from "./card.module.css"
import Buton from "../button/Buton"



const Card = ({img,dil,btnName}) => {
  return (
    <div>
      <h1 className={cardStyle["title"]} >{dil}</h1>
      <img className={cardStyle["images"]} src={img} alt="img"/>
      <Buton btnName={btnName} />
    </div>
    
  )
}

export default Card;