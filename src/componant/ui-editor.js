//https://medium.com/the-andela-way/react-drag-and-drop-7411d14894b9
//https://www.npmjs.com/package/react-resize-detector

//import ReactResizeDetector, { onResize } from 'react-resize-detector';
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import MaterialTextField from '../common-componant/material-textfield';
import MaterialButton from '../common-componant/material-button';
import {
    CONTROL_BUTTON,
    CONTROL_TEXTBOX, CONTROL_CHECKBOX, CONTROL_DROPDOWN, CONTROL_RADIO_BUTTON, CONTROL_TREEVIEW,
    CONTROL_TABLE, CONTROL_DATEPICKER, CONTROL_UPLOAD

} from '../constant';
import DeleteIcon from '@material-ui/icons/Delete';
import MaterialCheckBox from '../common-componant/material-checkbox';
import MaterialDatePicker from '../common-componant/material-datepicker';
import MaterialRadioButton from '../common-componant/material-radio-button';
import MaterialSelect from '../common-componant/material-select';
import ReactVirtualizedTable from '../common-componant/material-table';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

const useStyles = makeStyles((theme) => ({
    fab: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: theme.spacing(2),
    },
    fabRight: {
        position: 'absolute',
        bottom: theme.spacing(2),
        right: 301,
    },

    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
    },
    margin: {
        margin: '0px',
    },

    gridcell: {
        border: '2px solid #e0d9d9',
        height: '50px',
        resize: 'both',
        overflow: 'auto',
        width: '100%'
    },

    input: {
        boxSizing: 'inherit'
    }
}));

export default function UiEditor(props) {
    const classes = useStyles();
    const { configData } = props;
    const [rowCount, setRowCount] = useState('');
    const [columnCount, setcolumnCount] = useState('');
    const [layout, setLayout] = useState(false);
    const [schema, setSchema] = useState([]);
    const [configuration, setConfiguration] = useState({});
    const [drop, setDrop] = useState(false);
    const [isDragged, setIsDragged] = useState(false);
    const [colStyle, setcolStyle] = useState({});


    /* Research and development start */
    const [rowCol, setrowCol] = useState([]);
    const [selectedCellIndex, setselectedCellIndex] = useState();
    const [marginTop, setMarginTop] = useState(0);
    const [marginRight, setMarginRight] = useState(0);
    const [marginBottom, setMarginBottom] = useState(0);
    const [marginLeft, setMarginLeft] = useState(0);
    const [showPanel, setshowPanel] = useState(false);
    const [showDeleteIcon, setShowDeleteIcon] = useState(false);
    const show = false;
    var columnStyle = columnStyle ? columnStyle : {};
    const addRow = () => {
        var rw = rowCol;
        rw.push({});
        setrowCol(rw);
        //setSchema(rw)
        setLayout(!layout);
    }

    const onResize = (e, index, col) => {
        col.showDeleteIcon = false;
        const width = e.currentTarget.offsetWidth;
        const height = e.currentTarget.offsetHeight;
        let style = colStyle;
        //style[index] = { width, height};
        style[index] = { ...style[index], width, height };
        //setcolStyle(state)
        setShowDeleteIcon(false)
        setcolStyle(style)

    }

    const setTopMargin = (e) => {
        let style = colStyle;
        style[selectedCellIndex]['marginTop'] = `${e.target.value}%`;
        setcolStyle(style)
        setMarginTop(e.target.value)

    }

    const setRightMargin = (e) => {
        let style = colStyle;
        style[selectedCellIndex]['marginRight'] = `${e.target.value}%`;
        setcolStyle(style)
        setMarginRight(e.target.value)

    }

    const setBottomMargin = (e) => {
        let style = colStyle;
        style[selectedCellIndex]['marginBottom'] = `${e.target.value}%`
        setcolStyle(style)
        setMarginBottom(e.target.value)
    }

    const setLeftMargin = (e) => {
        let style = colStyle;
        style[selectedCellIndex]['marginLeft'] = `${e.target.value}%`
        setcolStyle(style)
        setMarginLeft(e.target.value)

    }

    const deleteCell = (e, index) => {
        e.stopPropagation();
        var rw = rowCol;
        rw.splice(index, 1);
        setrowCol(rw);
        setShowDeleteIcon(false)
    }

    const onMouseOver = (col) => {
        col.showDeleteIcon = true;
        setShowDeleteIcon(true)
    }


    const dropDownData = [{ value: 1, displayName: 'Item 1' }, { value: 2, displayName: 'Item 2' }];

    //const tabledata = [{ id: 1, 'Name': 'Name', 'LastName': 'LName' }, { id: 2, 'Name': 'Name', 'LastName': 'LName' }]
    const tabledata = []

    const columnsData =
        [
            {
                width: 50,
                label: 'ID',
                dataKey: 'id'
            },
            {
                width: 200,
                label: 'Name',
                dataKey: 'Name'
            },
            {
                width: 200,
                label: 'LastName',
                dataKey: 'LastName'
            }
        ]


    /* End */


    useEffect(() => {
        let rowObject = [];
        let i = 0;
        while (i < rowCount) {
            let col = 0;
            let colObject = [];
            while (col < columnCount) {

                colObject.push({});
                col++;
            }
            rowObject.push(colObject);
            i++;
        }
        setSchema(rowObject);

    }, [layout])


    useEffect(() => {
        setIsDragged(false)
    }, [props.newControl])

    const onDrop = (e) => {


        //const pos = e.currentTarget.attributes["position"]["value"].split("-");
        const pos = e.currentTarget.attributes["position"]["value"];
        //schema[pos[0]] = JSON.parse(configuration);
        rowCol[pos[0]] = JSON.parse(configuration);
        setDrop(!drop);
        setIsDragged(true);
    }
    const onDrag = (e) => {
        e.preventDefault();
        if (e.currentTarget.attributes["position"]) {
            const pos = e.currentTarget.attributes["position"]["value"].split("-");
            schema[pos[0]][pos[1]] = {}

        }
        console.log('on Drag ');
        setConfiguration(JSON.stringify(props.configData));
    }



    const onDragOver = (e) => {
        e.preventDefault();
        console.log('onDragOver');
    }

    function getRows(rownum) {
        return (<Grid container className={classes.margin} spacing={2}>
            {getColumns(rownum)}
        </Grid>);
    }


    function getColumns(rownum) {
        let column = [];
        for (let i = 0; i < columnCount; i++) {
            column.push(< Grid position={`${rownum}-${i}`} item xs onDragOver={onDragOver} onDrop={onDrop}>
                Drop here
                 </Grid >)
        }
        return column;
    }

    /* const GridColumns = ({ columns,rowIndex }) => {
        return columns.map((col, index) =>
            <Grid position={`${rowIndex}-${index}`} className={classes.gridcell} item xs onDragOver={onDragOver} onDrop={onDrop}>
                
                {col.controlType && col.controlType === CONTROL_CHECKBOX && <MaterialCheckBox
                    position={`${rowIndex}-${index}`}
                    draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_TEXTBOX && <MaterialTextField
                    position={`${rowIndex}-${index}`}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="UserName"
                    name="UserName"
                    autoComplete="email"
                    draggable onDrag={onDrag}/>}
                {col.controlType && col.controlType === CONTROL_DATEPICKER && <MaterialDatePicker position={`${rowIndex}-${index}`} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_RADIO_BUTTON && <MaterialRadioButton position={`${rowIndex}-${index}`} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_DROPDOWN && <MaterialSelect position={`${rowIndex}-${index}`} data={['item1', 'item2', 'item3']} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_BUTTON && <MaterialButton position={`${rowIndex}-${index}`} text={CONTROL_BUTTON} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_TABLE && <ReactVirtualizedTable position={`${rowIndex}-${index}`} draggable onDrag={onDrag} />}
    
    
            </ Grid>
        )
    }*/



    /* const GenerateLayout = () => {
    
        return (schema.map((val, index) => {
            return <Grid container draggable className={classes.margin} spacing={2}>
                <GridColumns rowIndex={index} columns={val}></GridColumns>
            </Grid>
        }));
    
    }*/


    /* const GridColumns = ({ col = {}, index }) => {
        return <Grid position={`${index}`} className={classes.gridcell} item xs onDragOver={onDragOver} onDrop={onDrop}>
    
            {col.controlType && col.controlType === CONTROL_CHECKBOX && <MaterialCheckBox
                position={`${index}`}
                draggable onDrag={onDrag} />}
            {col.controlType && col.controlType === CONTROL_TEXTBOX && <MaterialTextField
                position={`${index}`}
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="UserName"
                name="UserName"
                autoComplete="email"
                draggable onDrag={onDrag} />}
            {col.controlType && col.controlType === CONTROL_DATEPICKER && <MaterialDatePicker position={`${index}`} draggable onDrag={onDrag} />}
            {col.controlType && col.controlType === CONTROL_RADIO_BUTTON && <MaterialRadioButton position={`${index}`} draggable onDrag={onDrag} />}
            {col.controlType && col.controlType === CONTROL_DROPDOWN && <MaterialSelect position={`${index}`} data={dropDownData} draggable onDrag={onDrag} />}
            {col.controlType && col.controlType === CONTROL_BUTTON && <MaterialButton position={`${index}`} text={CONTROL_BUTTON} draggable onDrag={onDrag} />}
            {col.controlType && col.controlType === CONTROL_TABLE && <ReactVirtualizedTable position={`${index}`} draggable onDrag={onDrag} />}
    
    
        </ Grid>
    }*/


    /* const GenerateFlexibleLayoutBackup = ({ style }) => {
    
        return (rowCol.map((col, index) => {
            const st = colStyle && colStyle[index] ? { height: colStyle[index].height, width: colStyle[index].width } : {};
    
            return <Grid container position={`${index}`} onMouseOut={(e) => { onResize(e, index) }} style={st} className={classes.gridcell} onDrag={onDrag} onDragOver={onDragOver} onDrop={onDrop}>
                {col.controlType && col.controlType === CONTROL_CHECKBOX && <MaterialCheckBox
                    position={`${index}`}
                    draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_TEXTBOX && <MaterialTextField
                    position={`${index}`}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="UserName"
                    name="UserName"
                    autoComplete="email"
                    draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_DATEPICKER && <MaterialDatePicker position={`${index}`} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_RADIO_BUTTON && <MaterialRadioButton position={`${index}`} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_DROPDOWN && <MaterialSelect position={`${index}`} data={dropDownData} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_BUTTON && <MaterialButton position={`${index}`} text={CONTROL_BUTTON} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_TABLE && <ReactVirtualizedTable columns={columnsData} data={tabledata} position={`${index}`} draggable onDrag={onDrag} />}
    
    
            </Grid>
        }));
    
    }*/

    const GenerateFlexibleLayout = ({ style }) => {

        return (rowCol.map((col, index) => {
            const st = colStyle && colStyle[index] ? {
                height: colStyle[index].height,
                width: colStyle[index].width,
                marginTop: colStyle[index].marginTop,
                marginRight: colStyle[index].marginRight,
                marginLeft: colStyle[index].marginLeft,
                marginBottom: colStyle[index].marginBottom,
            } : {};

            return <Grid container onMouseOver={() => { onMouseOver(col)}} onClick={() => { setselectedCellIndex(index); setshowPanel(true) }} position={`${index}`} onMouseOut={(e) => { onResize(e, index,col) }} style={st} className={classes.gridcell} onDrag={onDrag} onDragOver={onDragOver} onDrop={onDrop}>

                {col.controlType && col.controlType === CONTROL_CHECKBOX && <MaterialCheckBox
                    position={`${index}`}
                    draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_TEXTBOX && <MaterialTextField
                    position={`${index}`}
                    variant="outlined"
                    margin="normal"
                    required
                    fullWidth
                    id="UserName"
                    name="UserName"
                    autoComplete="email"
                    draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_DATEPICKER && <MaterialDatePicker position={`${index}`} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_RADIO_BUTTON && <MaterialRadioButton position={`${index}`} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_DROPDOWN && <MaterialSelect position={`${index}`} data={dropDownData} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_BUTTON && <MaterialButton position={`${index}`} text={CONTROL_BUTTON} draggable onDrag={onDrag} />}
                {col.controlType && col.controlType === CONTROL_TABLE && <ReactVirtualizedTable columns={columnsData} data={tabledata} position={`${index}`} draggable onDrag={onDrag} />}
                {col.showDeleteIcon && < DeleteIcon onClick={(e) => { deleteCell(e,index)}} />}

            </Grid>
        }));

    }


    return (
        <>
            {showPanel && <Grid container spacing={1}>
                <Grid item xs='2' ></Grid>
                <Grid item xs='2' >
                    <MaterialTextField
                        variant="outlined"
                        margin="normal"
                        type="number"
                        fullWidth
                        label="Top"
                        id="columncount"
                        name="columncount"
                        onChange={(e) => { setTopMargin(e) }}
                        value={marginTop}
                    />
                </Grid>
                <Grid item xs='2' >
                    <MaterialTextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="number"
                        fullWidth
                        id="columncount"
                        name="columncount"
                        onChange={(e) => { setRightMargin(e) }}
                        value={marginRight}
                        label="Right" />
                </Grid>
                <Grid item xs='2' >
                    <MaterialTextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="number"
                        fullWidth
                        id="columncount"
                        name="columncount"
                        onChange={(e) => { setBottomMargin(e) }}
                        value={marginBottom}
                        label="Bottom" />
                </Grid>
                <Grid item xs='2' >
                    <MaterialTextField
                        variant="outlined"
                        margin="normal"
                        required
                        type="number"
                        fullWidth
                        id="columncount"
                        name="columncount"
                        onChange={(e) => { setLeftMargin(e) }}
                        value={marginLeft}
                        label="Left" />
                </Grid>
            </Grid>}
            <Fab color="primary" onClick={addRow} className={props.drawerOpen ? classes.fabRight : classes.fab} aria-label="add">
                <AddIcon />
            </Fab>
            {configData && <div className={classes.root}>
                <Grid container spacing={1}>
                    <Grid item xs='2' >

                    </Grid>
                    {
                        /* <Grid item xs='2'>
                        <MaterialTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="rowcount"
                            name="rowcount"
                            onChange={(e) => { setRowCount(e.target.value) }}
                            value={rowCount}
                            placeholder="No of Rows" />
                    </Grid>
                        <Grid item xs='2'>
                            <MaterialTextField
                                variant="outlined"
                                margin="normal"
                                required
                                fullWidth
                                id="columncount"
                                name="columncount"
                                onChange={(e) => { setcolumnCount(e.target.value) }}
                                value={columnCount}
                                placeholder="No of Columns" />
                        </Grid>

                        <Grid item xs='2'>
                            <MaterialButton onClick={() => { setLayout(true) }} text="Generate" />
                        </Grid> */}
                    <Grid item xs='2'>
                        {/* <MaterialButton text='Add Cell' onClick={addRow} draggable onDrag={onDrag} />*/}
                    </Grid>
                    <Grid item xs='2'>
                        {!isDragged && configData && configData.controlType === CONTROL_CHECKBOX && <MaterialCheckBox draggable onDrag={onDrag} />}
                        {!isDragged && configData && configData.controlType === CONTROL_TEXTBOX && <MaterialTextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            draggable onDrag={onDrag} />}
                        {!isDragged && configData && configData.controlType === CONTROL_DATEPICKER && <MaterialDatePicker draggable onDrag={onDrag} />}
                        {!isDragged && configData && configData.controlType === CONTROL_RADIO_BUTTON && <MaterialRadioButton draggable onDrag={onDrag} />}
                        {!isDragged && configData && configData.controlType === CONTROL_DROPDOWN && <MaterialSelect draggable onDrag={onDrag} />}
                        {!isDragged && configData && configData.controlType === CONTROL_BUTTON && <MaterialButton text={CONTROL_BUTTON} draggable onDrag={onDrag} />}
                        {!isDragged && configData && configData.controlType === CONTROL_TABLE && <ReactVirtualizedTable height={40} columns={columnsData} data={tabledata} draggable onDrag={onDrag} />}


                    </Grid>

                </Grid>


            </div>}
            <br />
            <div className={classes.root} >

                <Grid container spacing={2}>
                    {<GenerateFlexibleLayout style={colStyle} />}
                </Grid>
            </div>
        </>
    );
}
