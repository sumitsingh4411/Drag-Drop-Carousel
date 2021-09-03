import React from 'react'
import './index.css';
import { Droppable } from 'react-beautiful-dnd';
import LeftIcon from './../../assets/chevron-left-solid.svg';
import rightIcon from './../../assets/chevron-right-solid.svg';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';
import { useSelector } from 'react-redux';




function MYCarousel({ initialData }) {
    const value = useSelector(e => e.updateValue)
    const [round, setround] = React.useState(false);
    const [data, setData] = React.useState([]);
    React.useEffect(() => {
        setData(initialData);
    }, [value, initialData])
    return (
        <div className="carousel">
            <div className="inner">
                <img src={LeftIcon} alt="" className='helloimage' onClick={() => setround(!round)} />
                <Droppable droppableId='myrealimagehello'>
                    {
                        (provided, snapshot) => (
                            <div className={`mycar ${snapshot.isDraggingOver ? 'dragactive2' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                                <Carousel animation='slide' interval={5000}>
                                    {
                                        initialData && initialData.map((e) => (
                                            e && e.preview_photos && <Item index={e.id} src={e.preview_photos[0].urls.full} round={round} />
                                        ))
                                    }
                                </Carousel>
                                {
                                    provided.placeholder
                                }
                            </div>

                        )
                    }
                </Droppable>
                <img src={rightIcon} alt="" className='helloimage' onClick={() => setround(!round)} />
            </div>
            <div className="carouselximage">
                {
                    data && data.map(e => (
                        e && e.preview_photos && <img
                            className="carousexlImage"
                            src={e.preview_photos[0].urls.full}
                            alt="First slide"
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default MYCarousel
