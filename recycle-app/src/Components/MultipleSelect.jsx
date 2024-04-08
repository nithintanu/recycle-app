import React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

const ITEM_HEIGHT = 40;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const names = [
    'Automobiles',
    'Books',
    'Calculators',
    'Easy Electronics',
    'Laptops and SmartPhones',
    'LifeStyle',
    'Sports',
];

export default function SingleSelect() {
    const theme = useTheme();
    const [selectedName, setSelectedName] = React.useState('');

    const handleChange = (event) => {
        setSelectedName(event.target.value);
    };

    return (
        <div>
            <FormControl sx={{ m: 1, width: 300 }}>
                <InputLabel id="demo-single-name-label">Name</InputLabel>
                <Select
                    labelId="demo-single-name-label"
                    id="demo-single-name"
                    value={selectedName}
                    onChange={handleChange}
                    input={<OutlinedInput label="Name" />}
                    MenuProps={MenuProps}
                >
                    {names.map((name) => (
                        <MenuItem
                            key={name}
                            value={name}
                            style={getStyles(name, selectedName, theme)}
                        >
                            {name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    );
}

function getStyles(name, selectedName, theme) {
    return {
        fontWeight:
            selectedName === name
                ? theme.typography.fontWeightMedium
                : theme.typography.fontWeightRegular,
    };
}
