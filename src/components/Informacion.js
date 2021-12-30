import React, { useEffect, useState } from 'react'
/* import informacion from '../img/info2.jpg' */
import { getCarrousel } from '../helpers/getCarrousel'

const Informacion = () => {

    const [items, setItems] = useState([])

    useEffect(() => {
        getCarrousel()
            .then(items => {
                console.log(typeof(items[0].img))
                setItems(items);
            })
    }, [])


    return (
        /*         <div className="container-fluid">
                    <div className="container animate__animated animate__fadeIn" id="info-container">
                        <img src={informacion} alt="rockspace" className="w-100"/>
                    </div>
                </div> */
        <>
            {/* <!-- Carousel wrapper --> */}
            <div
                id="carouselBasicExample"
                className="carousel slide"
                data-mdb-ride="carousel"
            >
                {/* <!-- Indicators --> */}
                <div className="carousel-indicators">
                    {
                        items && items.length > 0 && items.map(item => (
                            <button
                                key={item.id}
                                type="button"
                                data-mdb-target="#carouselBasicExample"
                                data-mdb-slide-to={item.id}
                                className="active"
                                aria-current="true"
                                aria-label={"slide to" + item.id}
                            ></button>
                        ))
                    }
                </div>
                {/* <!-- Inner --> */}
                <div className="carousel-inner">

                    {/* <!-- Single item --> */}
                    {
                        items && items.length > 0 && items.map(item => (
                            item.id === 0 ?
                                <div key={item.id} className="carousel-item active">
                                    <img
                                        src={item.img}
                                        className="d-block w-100"
                                        alt={item.title}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{item.title}</h5>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                                :
                                <div key={item.id} className="carousel-item">
                                    <img
                                        src={`${item.img}`}
                                        className="d-block w-100"
                                        alt={item.title}
                                    />
                                    <div className="carousel-caption d-none d-md-block">
                                        <h5>{item.title}</h5>
                                        <p>{item.paragraph}</p>
                                    </div>
                                </div>
                        ))
                    }

                </div>
                {/* <!-- Inner --> */}

                {/* <!-- Controls --> */}
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="prev"
                >
                    <i className="material-icons">arrow_back</i>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-mdb-target="#carouselBasicExample"
                    data-mdb-slide="next"
                >
                    <i className="material-icons">arrow_forward</i>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            {/* /* <!-- Carousel wrapper --> */}
        </>
    )
}

export default Informacion
