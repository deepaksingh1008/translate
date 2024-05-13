import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { languageData } from '../data/data'
const RightSelectLanguage = ({ language2, onChange }) => {

    return (
        <Box sx={{ minWidth: 120 }}>
            <FormControl fullWidth>
                <InputLabel id="demo-simple-select-label">To</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={language2}
                    label="Age"
                    onChange={onChange}
                >
                    <MenuItem value={'hi'}>Hindi</MenuItem>
                    {languageData.data.languages.map((val, idx) => (
                        <MenuItem key={idx} value={val.language}>{val.languageName}</MenuItem>
                    ))}
                </Select>
            </FormControl>
        </Box>
    )
}

export default RightSelectLanguage