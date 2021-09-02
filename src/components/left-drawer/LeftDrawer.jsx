import React from 'react'
import './index.css'
import SelectStyle from './../common/SelectStyle';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';

function LeftDrawer({ initialData, mydata }) {
    return (
        <div className="drawwer">
            <div className="drawerTop">
                <p className="drawerTitle">Categories</p>
                <SelectStyle />
            </div>
            <div className="drawerBelow">
                <p className="drawerTitle">Files</p>
                <Droppable droppableId='myimagename'>
                    {
                        (provided, snapshot) => (
                            <div className={`selector ${snapshot.isDraggingOver ? 'dragactive' : ''}`} ref={provided.innerRef} {...provided.droppableProps}>
                                {
                                    initialData && initialData.map((e) => (
                                        e && <Draggable index={e.index} draggableId={e.index + 'myimagename'}>
                                            {
                                                (provided) => (
                                                    <div
                                                        className='mylist'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}

                                                    >
                                                        {mydata + '-' + (e.index)}.png
                                                    </div>
                                                )
                                            }
                                        </Draggable>

                                    ))
                                }
                                {
                                    provided.placeholder
                                }
                            </div>
                        )
                    }
                </Droppable>

            </div>
        </div>
    )
}

export default LeftDrawer
