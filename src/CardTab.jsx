// import "./Card.css";
import Card from "./Card.jsx";
function CardTab() 
{
    return (
        <>
            <Card title="React" description="Learn React props"/>
            <Card title="Python" description="learn data structures"/>
            <Card title="Git" description="Learn version control" />
            <Card />
        </>
    );
}

export default CardTab;