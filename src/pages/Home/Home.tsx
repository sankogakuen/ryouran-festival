import React from 'react';
import FadeInImage from '../../components/FadingImage'
import Access from './Access'
import Top_title_img from '../../static/img/Top-title-img.png'
import ScrollUp from '../../utils/ScrollUp'
import Page from '../../components/Page';

const Home: React.FC = () => {
    return (
        <>
            <FadeInImage src={Top_title_img} alt="sanko festival" />
            <Page>
                <Access />
            </Page>
            <ScrollUp />
        </>
    );
};

export default Home;
