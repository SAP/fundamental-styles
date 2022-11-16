import '../../../src/timepicker.scss';
export default {
    title: 'Components/Time Picker',
    parameters: {
        description: `Time Picker bla bla bla
`
    },
    tags: ['f3', 'theme']
};

export const Hours24 = () => `
<div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
        <div data-label="Hours" class="fd-time-picker__label"></div>
        
        <div>
            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">1</span>
                <span class="fd-time-picker__number">13</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">2</span>
                <span class="fd-time-picker__number">14</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">3</span>
                <span class="fd-time-picker__number">15</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">4</span>
                <span class="fd-time-picker__number">16</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">5</span>
                <span class="fd-time-picker__number">17</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">6</span>
                <span class="fd-time-picker__number">18</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">7</span>
                <span class="fd-time-picker__number">19</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">8</span>
                <span class="fd-time-picker__number">20</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">9</span>
                <span class="fd-time-picker__number">21</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">10</span>
                <span class="fd-time-picker__number">22</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">11</span>
                <span class="fd-time-picker__number">23</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">12</span>
                <span class="fd-time-picker__number">00</span>
            </div>
        </div>

        <div class="fd-time-picker__item fd-time-picker__item--deg210">
            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
            <div class="fd-time-picker__number fd-time-picker__number--invisible"></div>
            <div class="fd-time-picker__number fd-time-picker__number--selected">19</div>
        </div>
    </div>
</div>
`;

Hours24.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Bla bla bla 
` }
    }
};

export const Hours12 = () => `
<div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
    <div aria-hidden="true" class="fd-time-picker__clock fd-time-picker__clock--inner">
        <div data-label="Hours" class="fd-time-picker__label"></div>
        
        <div>
            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">1</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">2</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">3</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">4</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">5</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">6</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">7</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">8</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">9</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">10</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">11</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">12</span>
            </div>
        </div>

        <div class="fd-time-picker__item fd-time-picker__item--deg210">
            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
            <div class="fd-time-picker__number fd-time-picker__number--selected">7</div>
        </div>
    </div>
</div>
`;

Hours12.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Bla bla bla 
` }
    }
};

export const Minutes = () => `
<div role="img" aria-label="Clock Dial" class="fd-time-picker__clock-container">
    <div class="fd-time-picker__clock fd-time-picker__clock--inner fd-time-picker__clock--active">
        <div data-label="Minutes" class="fd-time-picker__label"></div>
        <div>
            <div class="fd-time-picker__item fd-time-picker__item--deg6">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg12">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg18">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg24">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg30">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">5</span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg36">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg42">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg48">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg54">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg60">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">10</span>
            </div>
           
            <div class="fd-time-picker__item fd-time-picker__item--deg66">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg72">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg78">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg84">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg90">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">15</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg96">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg102">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg108">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg114">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg120">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">20</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg126">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg132">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg138">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg144">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg150">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">25</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg156">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg162">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg168">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg174">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg180">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">30</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg186">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg192">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg198">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg204">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg210">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">35</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg216">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg222">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg228">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg234">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg240">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">40</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg246">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg252">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg258">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg264">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg270">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">45</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg276">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg282">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg288">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg294">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg300">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">50</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg306">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg312">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg318">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg324">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg330">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">55</span>
            </div>
            
            <div class="fd-time-picker__item fd-time-picker__item--deg336">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg342">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg348">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg354">
                <span class="fd-time-picker__tick fd-time-picker__tick--minute"></span>
            </div>

            <div class="fd-time-picker__item fd-time-picker__item--deg360">
                <span class="fd-time-picker__tick fd-time-picker__tick--hour"></span>
                <span class="fd-time-picker__number">0</span>
            </div>

        </div>
        
        <div class="fd-time-picker__item fd-time-picker__item--deg108">
            <div class="fd-time-picker__tick fd-time-picker__tick--selected"></div>
            <div class="fd-time-picker__number fd-time-picker__number--selected">18</div>
        </div>
    </div>
</div>
`;

Minutes.parameters = {
    docs: {
        iframeHeight: 500,
        description: {
            story: `
Bla bla bla 
` }
    }
};

