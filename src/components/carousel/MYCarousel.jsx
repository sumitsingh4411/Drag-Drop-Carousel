import React from 'react'
import './index.css';
import { Droppable } from 'react-beautiful-dnd';
import LeftIcon from './../../assets/chevron-left-solid.svg';
import rightIcon from './../../assets/chevron-right-solid.svg';
import Carousel from 'react-material-ui-carousel'
import Item from './Item';



function MYCarousel({ initialData, mydata }) {
    const [round, setround] = React.useState(false);
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
                                            e && <Item index={e.index} src={e.imageUrl} round={round} mydata={mydata} />
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
                    initialData && initialData.map(e => (
                        <img
                            className="carousexlImage"
                            src={e.imageUrl}
                            alt="First slide"
                        />
                    ))
                }
            </div>
        </div >
    )
}

export default MYCarousel
