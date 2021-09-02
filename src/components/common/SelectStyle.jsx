import React from 'react'
import './index.css'
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { chooseCategory } from './../../redux/actions';



function SelectStyle() {
    const dispatch = useDispatch();
    const [categories, setCategory] = React.useState([]);
    React.useEffect(() => {
        axios.get('https://dragdropreact1.herokuapp.com/data').then(data => {
            let temp = []
            data.data.data.map(e => temp.push(e.category));
            setCategory([...new Set(temp)]);
            console.log(categories);
        }).catch(err => {
            console.log(err)
        })
    }, []);

    const [Value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        dispatch(chooseCategory(event.target.value));
    };

    return (
        <FormControl variant="outlined" className="myselect">
            <InputLabel>Select Category</InputLabel>
            <Select
                value={Value}
                onChange={handleChange}
            >
                {
                    categories && categories.map((e, index) => (
                        <MenuItem value={e} key={index}>{e}</MenuItem>
                    ))
                }
            </Select>
        </FormControl>

    )
}

export default SelectStyle
