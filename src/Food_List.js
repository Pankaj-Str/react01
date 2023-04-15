import ListGroup from 'react-bootstrap/ListGroup';
function Food_List(){

    let food = ['Samosa','kachori','fafda','jalebi','Pav'];
    let price = [100,200,300,400,500];
   // let heading = "Joy Food Store"

    return (
        <ListGroup>
            {food.map(food=>(
                <ListGroup.Item>{food}</ListGroup.Item>
            ))}
        </ListGroup>

    );




}

export  default  Food_List;