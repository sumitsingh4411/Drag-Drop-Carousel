import React from 'react'
import './index.css';
import HeaderStyle from '../Header/HeaderStyle'
import LeftDrawer from '../left-drawer/LeftDrawer'
import MYCarousel from './../carousel/MYCarousel';
import { DragDropContext } from 'react-beautiful-dnd';
import { useSelector } from 'react-redux';
import axios from 'axios';

function Home() {
    const [initialDataName, setinitialDataName] = React.useState([]);
    const [initialDataReal, setinitialDataReal] = React.useState([]);

    const mydata = useSelector(state => state.choose);
    const mycategories = ["Landascape", "Phones", "Beaches", "Houses", "Flowers"]
    React.useEffect(() => {
        axios.get('https://dragdropreact1.herokuapp.com/data').then(data => {
            let p = data.data.data.filter(e => e.category === mydata);
            setinitialDataName(p);
            setinitialDataReal(p);
        }).catch(err => {
            console.log(err)
        })
    }, [mydata]);


    const onDragEnd = (result) => {
        console.log(result)
        const { source, destination } = result;
        if (!destination) return null;
        if (destination.droppableId === source.droppableId && destination.index === source.index)
            return null;
        let add,
            leftname = initialDataName,
            realimage = initialDataReal;
        realimage = realimage.filter(e => e !== undefined)
        let sourcindex = (source.index - (mycategories.indexOf(mydata) * 10)) - 1;
        let destinationindex = (destination.index - (mycategories.indexOf(mydata) * 10)) - 1;
        console.log(sourcindex, destinationindex)
        if (destinationindex === 10)
            destinationindex = destinationindex - 1;
        if (sourcindex === 10)
            sourcindex = sourcindex - 1;
        if (source.droppableId === 'myimagename') {
            add = leftname[sourcindex];
            console.log(add, realimage)
            if (realimage.indexOf(add)) {
                return null;
            }
            leftname.splice(source, 1);
        } else {
            if (realimage.length === 1) {
                alert('you can not remove it');
                return null;
            }
            add = realimage[source];
            realimage.splice(source, 1);
        }
        if (destination.droppableId === 'myimagename') {
            if (leftname.indexOf(add) === -1)
                leftname.splice(destinationindex, 0, add);
        }
        else {
            if (realimage.indexOf(add) === -1)
                realimage.splice(destinationindex, 0, add);
        }

        setinitialDataName(leftname);
        setinitialDataReal(realimage);
    }

    
    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <HeaderStyle />
            <div className="home">
                <div className="homeleft">
                    <LeftDrawer initialData={initialDataName} mydata={mydata} />
                </div>
                <div className="homeright">
                    <MYCarousel initialData={initialDataReal} />
                </div>
            </div>
        </DragDropContext>
    )
}

export default Home
