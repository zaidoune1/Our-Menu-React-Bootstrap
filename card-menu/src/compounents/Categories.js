    import "../compounents/styles/cardsStyle.css";

    const Categories = ({categories, Allcategories}) => {
    return (
        <>

        <article className="article">
            {
                categories.map((c) => {
                    return(
                        <div className="cat-container" key={c}>

                            <button className="btns" onClick={() => {
                                Allcategories(c)
                            }}> {c} </button>
                        </div>
                
                    )
                })
            }
        </article>
                
        </>
    )
    }

    export default Categories