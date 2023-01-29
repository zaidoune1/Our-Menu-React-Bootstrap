    import { useState } from "react";
    import data from "./data";
    import {Row} from "react-bootstrap";
    import {Card} from "react-bootstrap";
    import "../compounents/styles/cardsStyle.css";
    import Categories from "./Categories";

    const Menu = () => {

        const setArray = ['All', ...new Set(data.map((c) => c.category))]

        console.log(setArray)

        const [menu, setMenu] = useState(data);
        const [categories, setCategories] = useState(setArray);

        const Allcategories = (catName) => {

            if(catName === 'All') {

                return setMenu(data)
            }

            const newCategories = data.filter((cat) => cat.category === catName)

            setMenu(newCategories)
        }

        console.log(data)
    return (

    <section className="section-bloc">
        
            <h1 className="title"> Our Menu </h1>
            <div className="width"> </div> 

        <Categories categories={categories} Allcategories={Allcategories} />
        
        <div className="container">

        <Row  className="row-products" md={2} xs={1} lg={3}>
            {
                menu.map((item) => {
                    
                    const {id, title, category, price, img, desc} = item

                    return<Card key={id} className='cards ' style={{ width: '18rem' }}>
                            <Card.Img className="imgs" variant="top" src={img} alt={title} />
                            <Card.Body className="body">
                            <Card.Title> {title} </Card.Title>
                            <Card.Title> {price} </Card.Title>
                            <Card.Text className="description">
                                {desc}
                            </Card.Text>
                            <Card.Title>
                                {category}
                            </Card.Title>
                        </Card.Body>
                        </Card>
                })
            }
        </Row> 

    </div>

    </section>


        
    )
    }

    export default Menu