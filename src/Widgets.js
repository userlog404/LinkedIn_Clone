import { FiberManualRecord, Info } from '@mui/icons-material';
import React from 'react';
import './Widgets.css';

function Widgets() {

    const newsArt = (heading, subtle) => (
        <div className='widgets_article'>
            
            <div className='widgetsArt_left'>
                <FiberManualRecord/>
            </div>    

            <div className='widgetsArt_right'> 
                
                <h4>{heading}</h4>
                <p>{subtle}</p>

            </div>

        </div>
    )

    return (
        <div className='widgets'>
            <div className='widgets_header'>
                <h2>LinkedIn News</h2>
                <Info/>
            </div>
            {newsArt('Guess whose back?', 'Top news - 90 readers')}
            {newsArt('Hackers in the SE', 'Security - 90 readers')}
            {newsArt('IBM hack was futile', 'Top Technology - 90 readers')}
            {newsArt('Google launches the pixel 5', 'Top gadget - 90 readers')}
            {newsArt('Tesla model IV', 'Top Car - 90 readers')}
            {newsArt('Nutrients from a carrot', 'Health - 90 readers')}
            <img className='rick_roll' src="https://c.tenor.com/eBltHZ96be4AAAAd/dans-opgeven.gif"alt=''/>
            <img className='rick_roll' src="https://c.tenor.com/uhnVFBgGehUAAAAC/rick-astley-dancing.gif" alt=''/>
            <img className='rick_roll' src="https://c.tenor.com/rtnshG9YFykAAAAd/rick-astley-rick-roll.gif" alt=''/>
            <img className='rick_roll' src="https://c.tenor.com/O8pLLR56sj8AAAAC/gun-goodbye.gif" alt=''/>
            
        </div>
    );
}

export default Widgets;
