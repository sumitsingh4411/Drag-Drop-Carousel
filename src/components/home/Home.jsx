import React from "react";
import "./index.css";
import HeaderStyle from "../Header/HeaderStyle";
import LeftDrawer from "../left-drawer/LeftDrawer";
import MYCarousel from "./../carousel/MYCarousel";
import { DragDropContext } from "react-beautiful-dnd";
import usefindData from "./../helpers/usefindData";
import { useDispatch } from 'react-redux';
import { updateValue } from "../../redux/actions";

function Home() {
  const dispatch=useDispatch();
  const [initialDataLeft, setinitialDataLeft] = React.useState([]);
  const [initialDataCarousel, setinitialDataCaroulsel] = React.useState([]);

  const { data } = usefindData();

  React.useEffect(() => {
    let arr = data;
    arr = arr.filter(e => e.preview_photos !== null);
    setinitialDataLeft(data);
    (() => {
      arr = arr.splice(3, 3);
      setinitialDataCaroulsel(arr);
    })();

  }, [data]);

  const findindex = (findin, left) => {
    let ind = -1;
    left.forEach((element, index) => {
      if (element && element.id === findin)
        ind = index;
    });
    return ind;
  }

  const onDragEnd = (result) => {
    console.log(result)
    const { source, destination } = result;

    if (!destination) return null;
    if (destination.droppableId === source.droppableId && destination.index === source.index)
      return null;

    let add,
      left = initialDataLeft,
      real = initialDataCarousel;

    if (source.droppableId === 'myimagename') {
      const ind = findindex(source.index, left);
      add = left[ind];
      left.splice(ind, 1);
    } else {
      if (real.length === 1) {
        alert('you can not remove it');
        return null;
      }
      const ind = findindex(source.index, real);
      add = real[ind];
      real.splice(ind, 1);
    }
    if (destination.droppableId === 'myimagename') {
      const ind = findindex(destination.index, left);
      left.splice(ind, 0, add);
    }
    else {
      const ind = findindex(destination.index, real);
      const ind1 = findindex(source.index, real);
      console.log(ind1)
      if (ind1 === -1)
        real.splice(ind, 0, add);
      else
        alert('it already present in Carousel');
    }

    setinitialDataCaroulsel(real);
    setinitialDataLeft(left);
    dispatch(updateValue(true));
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      <HeaderStyle />
      <div className="home">
        <div className="homeleft">
          <LeftDrawer initialData={initialDataLeft} />
        </div>
        <div className="homeright">
          <MYCarousel initialData={initialDataCarousel} />
        </div>
      </div>
    </DragDropContext>
  );
}

export default Home;
