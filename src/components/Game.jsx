import "./Game.css"

export function Game(){
    return(
        <main>
            <section className="init">
                <h1>Bienvenido a la Trivia River!</h1>
                <h2>Respondé preguntas sobre el club y su historia para obtener puntos que podrás canjear en la Tienda River y en beneficios con nuestros sponsors</h2>
                <button>Empezar</button>
            </section>   
            <img className="banner" src="/img/widgetbbvamobile.gif" alt="Widget promocional del BBVA" />
        </main>
    )
}