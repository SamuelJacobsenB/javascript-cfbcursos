const body = document.body

//---------------------------------------

const estilotopo = 
    'display: flex;'+
    'justify-content: space-between;'+
    'align-items: center;'+
    'background-color: lightblue;';
const topo = document.createElement('div')
topo.setAttribute('id','topo')
topo.setAttribute('style',estilotopo)
body.prepend(topo)

//----------------------------------------

const estilo_img_logo = "width: 200px;";
const logo = 
    "<div id='logo' class='logo'>"+
        "<img src='logo.png' style='"+estilo_img_logo+"'/>"+
    "</div>";

const login = 
    "<div id='login' class='login'>"+
        "<p id='matricula'>Matrícula:<span></span></p>"+
        "<p id='nome'>Nome:<span></span></p>"+
    "</div>";

//----------------------------------------

topo.innerHTML+=logo
topo.innerHTML+=login