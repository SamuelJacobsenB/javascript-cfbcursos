class Cxmsg {
    titulo = null
    texto = null
    cor = null
    destino = null
    divsmg = null
    constructor(config){
        this.titulo = config.titulo
        this.texto = config.texto
        this.cor = config.cor
        this.destino = document.body
    }
    mostrar=()=>{
        this.divsmg = document.createElement('div')
        const estilo_divmsg=
            "display: flex;"+
            "justify-content: center;"+
            "align-items: center;"+
            "position: absolute;"+
            "top: 0px;"+
            "left: 0px;"+
            "width: 100%;"+
            "height: 100vh;"+
            "background-color: rgba(0,0,0,0.7);";
        this.divsmg.setAttribute('id','divsmg')
        this.divsmg.setAttribute('style',estilo_divmsg)
        this.destino.prepend(this.divsmg)

        const areaCxmsg = document.createElement('div')
        const estilo_areaCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: flex-start;"+
            "flex-direction: column;"+
            "width: 300px;";
        areaCxmsg.setAttribute('style',estilo_areaCxmsg)
        this.divsmg.appendChild(areaCxmsg)

        const tituloCxmsg = document.createElement('div')
        const estilo_tituloCxmsg=
            "display: flex;"+
            "justify-content: flex-start;"+
            "align-items: center;"+
            "width: 100%;"+
            "background-color:"+this.cor+";"+
            "color:#fff;"+
            "padding:5px;"+
            "border-radius:5px 5px 0px 0px";
        tituloCxmsg.setAttribute('style',estilo_tituloCxmsg)
        tituloCxmsg.innerHTML = this.titulo
        areaCxmsg.appendChild(tituloCxmsg)
    }
    ocultar=()=>{

    }
}