import React from 'react'
import './index.css'
import { InputLabel, MenuItem, FormControl, Select, TextField, Button } from '@material-ui/core';
import { useDispatch } from 'react-redux';
import { chooseCategory } from './../../redux/actions';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    paper: {
        position: 'absolute',
        width: 400,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
    },
}));
function SelectStyle() {
    const classes = useStyles();
    // getModalStyle is not a pure function, we roll the style only on the first render
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
    const [error, seterror] = React.useState(null);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };
    const dispatch = useDispatch();
    let [mycategories, setmycategoires] = React.useState(["Landascape", "Phones", "Beaches", "Houses", "Flowers"]);
    const [input, setinpt] = React.useState(null);
    const submit = (e) => {
        console.log(input)
        e.preventDefault();
        if (input.length <= 2) {
            seterror('You have to pass more than 2 characters');
            setinpt(null);
            return null;
        }
        if (mycategories.indexOf(input) !== -1) {
            alert('It already presnet');
            setinpt(null);
            return null;
        }
        setmycategoires([input].concat(mycategories));
        console.log(mycategories);
        setinpt(null);
        setOpen(false);
    }


    const [Value, setValue] = React.useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
        dispatch(chooseCategory(event.target.value));
    };
    React.useEffect(() => {
        if (input && input.length > 3)
            seterror(null);
    }, [input])

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <form className={classes.root} autoComplete="off" onSubmit={submit} style={{
                display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 10
            }}>
                {
                    error && (
                        <p style={{ marginTop: 10, marginBottom: 10, textAlign: 'center', color: 'red', fontSize: 20 }}>{error}</p>
                    )
                }
                <TextField id="outlined-basic" label="Collection Name" variant="outlined" required
                    value={input}
                    onChange={e => setinpt(e.target.value)}
                />
                <Button size="large" color="primary" variant='outlined'
                    style={{ marginTop: 20 }}
                    type='submit'
                >Add</Button>
            </form>
        </div>
    );
    return (
        <div className="myselect">
            <FormControl variant="outlined" className="leftcategory">
                <InputLabel>Select Category</InputLabel>
                <Select
                    value={Value}
                    onChange={handleChange}
                >
                    {
                        mycategories && mycategories.map((e, index) => (
                            <MenuItem value={e} key={index}>{e}</MenuItem>
                        ))
                    }
                </Select>
            </FormControl>
            <div className="addcategory">
                <AddIcon fontSize='large' onClick={handleOpen} />
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
            </div>
        </div>

    )
}

export default SelectStyle
