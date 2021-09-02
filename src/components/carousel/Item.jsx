import React from 'react'
import { Draggable } from 'react-beautiful-dnd';


function Item({ index, src, round, mydata }) {
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
                        <div style={{
                            position: 'absolute',
                            top: 10,
                            right: 10,
                            fontSize: 24,
                            color: 'white',
                            padding: 10,
                            background: 'red',
                            borderRadius: 5
                        }}>{mydata + '-' + (index)}.png</div>
                    </div>
                )
            }
        </Draggable>
    )
}

export default Item
