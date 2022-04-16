import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const SingleBreakfast = ({ breakfast }) => {

    const {id, name, img, price, discription } = breakfast
    const navigate = useNavigate()

    const handleBreakfastDetails = id => {
        navigate(`/breakfast/${id}`)
    }
    return (
        <div className="container col-sm-12 col-md-6 col-lg-4 mt-5">
            <Card style={{ width: '18rem', backgroundColor: '#473535', padding: '16px'}}>
                <Card.Img variant="top" src={img} />
                <Card.Body>
                    <Card.Title style={{color:'#E5B429'}}>Name: {name}</Card.Title>
                    <Card.Text>
                        <span style={{color:'#FCF4E0'}}>{discription}</span>
                        <h6 style={{color:'#E5B429'}}>Price: ${price}</h6>
                    </Card.Text>
                    <Button onClick={() => handleBreakfastDetails(id)} style={{backgroundColor:'#E5B429'}} variant="primary">See Details</Button>
                </Card.Body>
            </Card>
        </div>
    );
};

export default SingleBreakfast;