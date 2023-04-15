import ListGroup from "react-bootstrap/ListGroup";

function Multi_Product(){

    const fruits = [
        ["Fruit", "Quantity"],
        ["Apple", 80],
        ["Orange", 70],
        ["watermelon", 50],
        ["Mango", 100]
    ];

    return (
        <div>
            <ListGroup horizontal>
                    {fruits[0].map((item, index) => {
                        return (
                            <ListGroup.Item className="tableHead" key={"head" + index}>
                                {item}
                            </ListGroup.Item>
                        );
                    })}
                </ListGroup>


                {fruits.slice(1, fruits.length).map((item, index) => {
                    return (
                        <ListGroup horizontal key={"row-" + index}>
                            <ListGroup.Item>{item[0]}</ListGroup.Item>
                            <ListGroup.Item>{item[1]}</ListGroup.Item>
                            <ListGroup.Item>{item[2]}</ListGroup.Item>

                        </ListGroup>
                    );
                })}

        </div>
    );

}

export  default Multi_Product;