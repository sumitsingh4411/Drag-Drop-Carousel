import React from 'react'
import { Draggable } from 'react-beautiful-dnd';

function Item({ index, src, round }) {
    return (
       <Draggable index={index} draggableId={index + 'myrealimagehello'}>
            {
                (provided) => (
                    <div ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}>
                        <img
                            style={{
                                transform: round === true ? 'rotate(180deg)' : '',
                                transition: '2s'
                            }}
                            className="hello"
                            src={src}
                            alt="First slide"
                        />
                    </div>
                )
            }
        </Draggable>
    )
}

export default Item
