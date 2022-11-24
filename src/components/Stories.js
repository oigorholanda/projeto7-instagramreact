import Story from "./Story"

export default function Stories() {
    const story = [
        { usuario: "9gag", imagem: "assets/img/9gag.svg" },
        { usuario: "meowed", imagem: "assets/img/meowed.svg" },
        { usuario: "barked", imagem: "assets/img/barked.svg" },
        { usuario: "nathanwpylestrangeplanet", imagem: "assets/img/nathanwpylestrangeplanet.svg" },
        { usuario: "wawawicomics", imagem: "assets/img/wawawicomics.svg" },
        { usuario: "respondeai", imagem: "assets/img/respondeai.svg" },
        { usuario: "filomoderna", imagem: "assets/img/filomoderna.svg" },
        { usuario: "memeriagourmet", imagem: "assets/img/memeriagourmet.svg" }
    ]


    return (
        <div class="stories">
            {story.map(s => <Story usuario={s.usuario} imagem={s.imagem} />)}

            <div class="setinha">
                <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
        </div>
    )
}