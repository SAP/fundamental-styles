import React from 'react';

const communityUrls = [
    {
        url: 'https://sap.github.io/fundamental-styles/',
        title: <>Fundamental Library <strong>Styles</strong></>
    },
    {
        url: 'https://sap.github.io/fundamental-ngx/',
        title: <>Fundamental Library for <strong>Angular</strong></>
    },
    {
        url: 'https://sap.github.io/fundamental-react/',
        title: <>Fundamental Library for <strong>React</strong></>
    },
    {
        url: 'https://sap.github.io/fundamental-vue/',
        title: <>Fundamental Library for <strong>Vue</strong></>
    }
];

const Community = () => {
    return (
    <div className='fddocs-community'>
        <section>
            <h4>Libraries</h4>
            <ul>
                {communityUrls.map((url, index) => <li key={index}>
                    <a href={url.url}>{url.title}</a>
                </li>)
                }
            </ul>
        </section>
        <section>
            <h4>Community</h4>
            <ul>
                <li>
                    <a href='https://github.com/sap/fundamental-styles' target='_blank' rel="noreferrer"><img
                        src='./assets/github.png' alt='github logo'/>github.com/sap/fundamental-styles</a>
                </li>
                <li>
                    <a href='https://twitter.com/fundamental_lib' target='_blank' rel="noreferrer"><img
                        src='./assets/twitter.png' alt='twitter logo'/>twitter.com/fundamental_lib</a>
                </li>
                <li>
                    <a href='https://join.slack.com/t/ui-fundamentals/shared_invite/enQtNTIzOTU0Mzc2NTc5LWQzZWI5MWFhYjE5OTc4YzliN2JhOTc1ZjQxZTg1YjZiMWZiYzRkNjMwYzgyMmFkYmNhZDVjMWE5MDIzOWEzMmM'
                       target='_blank' rel="noreferrer">
                        <img src='./assets/slack.png' alt='slack logo'/>ui-fundamentals-slack.com</a>
                </li>
                <li>
                    <a href='https://linkedin.com/company/sap-graph/' target='_blank' rel="noreferrer">
                        <img src='./assets/linkedin.png' alt='linkedin logo'/>
                    </a>
                </li>
            </ul>
        </section>
    </div>
    )
}

Community.displayName = 'Community';

export default Community;
