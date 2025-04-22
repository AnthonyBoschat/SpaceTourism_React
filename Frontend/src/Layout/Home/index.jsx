import "./style.scss"

export default function Home_Layout(){



    return(
        <main className="main-home">

            <div className="presentation">
                <h1>
                    <span>So, You want to travel to </span>
                    <strong>space</strong>
                </h1>

                <p>
                    Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
                </p>
            </div>

            <div className="explore">
                <a href="/destination">
                    <span>
                        Explore
                    </span>
                </a>
            </div>
        </main>
    )
}