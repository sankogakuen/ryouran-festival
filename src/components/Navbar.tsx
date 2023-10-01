import React, { useState, useEffect } from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';
import DeviceTypeDetector from './DeviceTypeDetector';

const useStyles = makeStyles((theme) => ({
    appBar: {
        height: "18h",
        boxShadow: '0px 2px 4px rgba(255, 206, 132, 1)', // 影の色を赤に変更
        display: 'flex',
        alignContent: 'center',
    },
    customButtonForPC: {
        fontSize: '20px',
    },
    customButtonForMobile: {
        padding: '8px 16px', // パディングを調整して大きさを変更
        marginLeft: 'auto',
    },
}));


const Navbar: React.FC = () => {
    const classes = useStyles();

    const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth < 768);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 768);
        };

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <AppBar
                color='default'
                position='static'
                className={classes.appBar}
            >
                <Toolbar
                    style={{ justifyContent: 'center' }}
                >

                    <Typography>
                        <Button className={isMobile ? classes.customButtonForMobile : classes.customButtonForPC}>
                            ABOUT
                        </Button>
                        <Button className={isMobile ? classes.customButtonForMobile : classes.customButtonForPC}>
                            Home
                        </Button>
                        <Button className={isMobile ? classes.customButtonForMobile : classes.customButtonForPC}>
                            CONTACT
                        </Button>
                    </Typography>
                </Toolbar>
            </AppBar >
        </>
    );
}

export default Navbar;