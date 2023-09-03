import React from 'react'
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@mui/material/Typography'

const useStyles = makeStyles((theme) => ({
    appBar: {
        boxShadow: '0px 2px 4px rgba(255, 206, 132, 1)', // 影の色を赤に変更
    },
}));


const Navbar: React.FC = () => {
    const classes = useStyles();
    return (
        <>

            <AppBar
                color='default'
                position='static'
                className={classes.appBar}
            >
                <Toolbar
                    style={{ justifyContent: 'center' }}>

                    <Button>
                        ABOUT
                    </Button>
                    <Button color='inherit'>
                        Home
                    </Button>
                    <Button color='inherit'>
                        CONTACT
                    </Button>
                </Toolbar>
            </AppBar>
        </>
    );
}

export default Navbar;