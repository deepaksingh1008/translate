import React, { useState } from 'react'
import { languageData } from '../data/data'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
const LeftSelectLanguage = ({ language1, onChange }) => {

    return (
        <>
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">From</InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={language1}
                        label="Age"
                        onChange={onChange}
                    >
                        <MenuItem value={'en'}>English</MenuItem>
                        {languageData.data.languages.map((val, idx) => (
                            <MenuItem key={idx} value={val.language}>{val.languageName}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </Box>

        </>
    )
}

export default LeftSelectLanguage