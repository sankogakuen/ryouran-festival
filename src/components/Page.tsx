// MyComponent.tsx

import React from 'react';
import { Grid } from '@material-ui/core';

interface Page {
    children: React.ReactNode,
}

const Page: React.FC<Page> = ({ children }) => {

    return (

        <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            style={{ minHeight: '100vh' }}
        >
            {/* コンポーネントの中身 */}
            <Grid item>{children}</Grid>
        </Grid>

    );
};

export default Page;
