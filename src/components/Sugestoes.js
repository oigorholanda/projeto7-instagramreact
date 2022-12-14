import Sugestao from "./Sugestao"

export default function Sugestoes() {
    const sugest = [
        {nome: "bad.vibes.memes", razao: "Segue você", imagem: "assets/img/bad.vibes.memes.svg"},
        {nome: "chibirdart", razao: "Segue você", imagem: "assets/img/chibirdart.svg"},
        {nome: "razoesparaacreditar", razao: "Novo no Instagram", imagem: "assets/img/razoesparaacreditar.svg"},
        {nome: "adorable_animals", razao: "Segue você", imagem: "assets/img/adorable_animals.svg"},
        {nome: "smallcutecats", razao: "Segue você", imagem: "assets/img/smallcutecats.svg"},
    ]

    return (
        <div class="sugestoes">
            <div class="titulo">
                Sugestões para você
                <div>Ver tudo</div>
            </div>

            {sugest.map(s => <Sugestao nome={s.nome} razao={s.razao} imagem={s.imagem} />)}

        </div>
    )
}

