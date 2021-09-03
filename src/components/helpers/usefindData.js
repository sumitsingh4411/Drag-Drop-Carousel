import axios from 'axios';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const usefindData = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const mydata = useSelector(state => state.choose);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    // eslint-disable-next-line react-hooks/rules-of-hooks
    React.useEffect(() => {
        axios.post('https://dragdropreact1.herokuapp.com/api/mydata', { name: mydata }).then(data => {
            setData(data.data);
            console.log(data.data)
        }).catch(err => {
            console.log(err)
        })
    }, [mydata]);
    return { data }
}


export default usefindData;