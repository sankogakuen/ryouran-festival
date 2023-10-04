
import React from 'react';
import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    googleMapStyle: {
        width: "100vh",
        height: "40vh",
    },
}));

const GoogleMap: React.FC = () => {
    const classes = useStyles();

    return (
        <>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3231.6183097461003!2d139.62473711124974!3d35.907362817404454!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6018c1d81a784a8d%3A0xc78f27be11a4012f!2zUmFpQm9DIEhhSUkg44Os44Kk44Oc44OD44Kv44Ob44O844Or77yI44GV44GE44Gf44G-5biC5rCR5Lya6aSo44GK44GK44G_44KE77yJ!5e0!3m2!1sja!2sjp!4v1696168056551!5m2!1sja!2sjp"
                className={classes.googleMapStyle} loading="lazy" />
        </>
    )
}


export default GoogleMap;