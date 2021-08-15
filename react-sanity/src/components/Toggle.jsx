import { useState } from 'react';
import { Box, Switch, Typography } from '@material-ui/core';
import { useStyle } from '../style/style';

export default function Toggle({theme, settheme, darkTheme, lightTheme}) {
    const classes = useStyle();
    const [text, settext] = useState(darkTheme ? 'Dark' : 'Light');
    const [state, setState] = useState({
        checkedA: true,
        checkedB: true,
      });
    
      const handleChange = (event) => {
        setState({ ...state, [event.target.name]: event.target.checked });
        if (theme === darkTheme) {
            settext('Light');
            settheme(lightTheme)
        };
        if (theme === lightTheme) {
            settext('Dark');
            settheme(darkTheme)
        };

      };
    return (
        <Box display='flex' alignItems='center' >
            <Typography color='secondary'>
                {text}
            </Typography>
            <Switch
                checked={state.checkedA}
                onChange={handleChange}
                name="checkedA"
                inputProps={{ 'aria-label': 'secondary checkbox' }}
                />
        </Box>
    )
}
