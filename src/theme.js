import { createTheme } from "@mui/material";

export const theme = createTheme({
    components: {
        MuiSvgIcon: {
            styleOverrides: {
                root: {
                    color: 'white'
                },
            },
        },
    },
});