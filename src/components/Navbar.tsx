import React, { useState, useEffect } from 'react';
import { makeStyles } from "@material-ui/core/styles";
import AnchorLink from 'react-anchor-link-smooth-scroll'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles((theme) => ({
    appBar: {
        position: "fixed",
        background: "#FFFEF3",
        height: "18h",
        boxShadow: '0px 2px 4px rgba(255, 206, 132, 1)', // 影の色を赤に変更
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
                            about
                        </Button>

                        <Button className={isMobile ? classes.customButtonForMobile : classes.customButtonForPC}>
                            Home
                        </Button>

                        <AnchorLink href='#access' style={{
                            textDecoration: 'none',
                            color: 'inherit'
                        }}>
                            <Button className={isMobile ? classes.customButtonForMobile : classes.customButtonForPC}>
                                Access
                            </Button>
                        </AnchorLink>

                    </Typography>
                </Toolbar>
            </AppBar >
        </>
    );
}

export default Navbar;