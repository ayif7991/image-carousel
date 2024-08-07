import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselComponent = () => {
    return (
        <Carousel>
            <div>
                <img src="https://th.bing.com/th/id/OIP.PCf9ierlZvP9HSlBs9i6qgHaE8?rs=1&pid=ImgDetMain" alt="Image 1" />
                <p className="legend">Legend 1</p>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.MoYlNQjh5tVdXdDMtATRWQHaFR?pid=ImgDet&w=474&h=337&rs=1" alt="Image 2" />
                <p className="legend">Legend 2</p>
            </div>
            <div>
                <img src="https://th.bing.com/th/id/OIP.E1f87SwFQoyqYQgXVN6P1wHaE8?pid=ImgDet&w=474&h=316&rs=1" alt="Image 3" />
                <p className="legend">Legend 3</p>
            </div>
        </Carousel>
    );
};

export default CarouselComponent;
