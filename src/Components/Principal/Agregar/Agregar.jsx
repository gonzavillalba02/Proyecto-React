import * as React from "react";
import "./Agregar.css"
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

const Agregar = () => {

    const categorias = ["Transporte", "Salud", "Comida", "Utilidades"]

    return (
        <div className="agregar-container">
            <Autocomplete
            autoHighlight
            disablePortal
            id="combo-box-demo"
            options={categorias}
            sx={{ width: 432 }}
            renderInput={(params) => <TextField {...params} label="Categorias" fullWidth color="secondary"/>}
            />
            <TextField 
            type="text" 
            label="Titulo"
            color="secondary"
            margin="normal"
            fullWidth
            />
            <TextField 
            type="text" 
            label="$"
            color="secondary"
            margin="normal"
            fullWidth
            />

            <input type="date" className="agregar-container-date"/>
        </div>
    )
}

export default Agregar