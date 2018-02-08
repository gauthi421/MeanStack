'use strict'


const pageDetails = {
mainTag: 'visibility Toggle',
detlsBtnLabl: ['Show details','Hide details'],
visIp: false
};

const visToggle= () => {
pageDetails.visIp= !pageDetails.visIp;
renderApp();
};

const appRoot = document.getElementById('app');
const renderApp= () => {
const template = (

<div>
<h1> {pageDetails.mainTag}</h1>
{pageDetails.visIp?<p>I'm hidden</p>:''}
<br/>
<button onClick={visToggle}>{pageDetails.visIp?pageDetails.detlsBtnLabl[1]:pageDetails.detlsBtnLabl[0]}</button>
</div>

);
ReactDOM.render(template,appRoot);
};


renderApp();
