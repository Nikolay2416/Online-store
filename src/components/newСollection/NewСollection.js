import {Card, Image} from "react-bootstrap"
import productPhoto from "../../assets/productPhoto.png"

const NewСollection = () => {


  return (
    <div style={{width: 1300}} className="m-auto">
      <h2 className="mt-3 mb-3">Новая коллекция</h2>
       <div className="m-auto mt-3 flex row">
      <Card style={{width: 400}}>
        <Image width={350} height={487} className="m-3" src={productPhoto}/>
        <Card.Body className="m-auto">
          <Card.Title>Футболка USA</Card.Title>
          <div className="price"> 130 руб</div>
        </Card.Body>
      </Card>
      <Card style={{width: 400}}>
      <Image width={350} height={487} className="m-3" src={productPhoto}/>
        <Card.Body className="m-auto">
          <Card.Title>Футболка USA</Card.Title>
          <div className="price"> 130 руб</div>
        </Card.Body>
      </Card>
      <Card style={{width: 400}}>
        <Image width={350} height={487} className="m-3" src={productPhoto}/>
        <Card.Body className="m-auto">
          <Card.Title>Футболка USA</Card.Title>
          <div className="price"> 130 руб</div>
        </Card.Body>
      </Card>
    </div>
    </div>
  )
}

export default NewСollection;