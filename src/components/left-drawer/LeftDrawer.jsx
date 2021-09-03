import React from 'react'
import './index.css'
import SelectStyle from './../common/SelectStyle';
import { Droppable } from 'react-beautiful-dnd';
import { Draggable } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';

function LeftDrawer({ initialData }) {
    const mydata = useSelector(state => state.choose);
    let arr = initialData;
    arr = arr.filter(e => e.preview_photos !== null);

    
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
                                    arr && arr.map((e) => (
                                        e && <Draggable index={e.id} draggableId={e.id + 'myimagename'}>
                                            {
                                                (provided) => (
                                                    <div
                                                        className='mylist'
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}

                                                    >
                                                        {mydata + '-' + (e.id)}.png
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
