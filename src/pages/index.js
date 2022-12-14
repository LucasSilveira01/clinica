import { Paper, Typography } from "@material-ui/core";
import { withIronSession } from "next-iron-session";
import Image from "next/image";
import Header from "../components/header";
import Content from "../components/content";

import { defaultStyles } from "../styles";
import gsap from 'gsap'
import ScrollTrigger from "gsap/dist/ScrollTrigger";
const Item = ({ item, index, style }) => (
    <>
        <section className={style.fastAnimation}>
            <Paper className={style.background} elevation={24}>
                <Typography
                    className={`${style.title} ${style.titleDesc} ${style.fadeLeftAnimation}`}
                    variant="h1"
                >
                    {item.first}
                </Typography>
                <Typography
                    className={`${style.subtitle} ${style.subtitleDesc} ${style.fadeRightAnimation}`}
                    variant="h1"
                >
                    {item.second}
                </Typography>
                <Typography
                    className={`${style.description} ${style.fadeLeftAnimation}`}
                    variant="h2"
                >
                    {item.description}
                </Typography>
                <Image
                    className={style.image}
                    src={`/assets/bg${index}.jpg`}
                    layout="fill"
                />
            </Paper>
        </section>
    </>
);

export const getServerSideProps = withIronSession(
    async ({ req, res }) => {
        const user = req.session.get("user");

        if (!user) {
            res.statusCode = 403;
            return { props: {} };
        }

        return {
            props: { user },
        };
    },
    {
        cookieName: "MYSITECOOKIE",
        cookieOptions: {
            secure: process.env.NODE_ENV === "production" ? true : false,
        },
        password: process.env.APPLICATION_SECRET,
    }
);

const Home = ({ theme, user, darkMode, setDarkMode }) => {
    const style = defaultStyles();

    const texts = [
        {
            first: "Trazemos mais que consultas,",
            second: "proporcionamos experi??ncia.",
            description:
                "A ?? DisneyMed ?? uma cl??nica m??dica especializada em Check-ups de Sa??de para todo tipo de paciente. Na DisneyMed, voc?? recebe cuidado de especialistas de todas as ??reas que precisa, em um ??nico lugar. Agende v??rias especialidades em um s?? dia e deixe sua sa??de nas m??os de um time inteiro que est?? preparado para te ajudar.",
        },
        {
            first: "Check-up",
            second: "com m??dicos conceituados.",
            description:
                "Selecionamos com muito cuidado os profissionais que cuidar??o de sua sa??de. Entendemos que o primeiro passo para um excelente tratamento ?? um time forte e unido, que realmente se interessa pela sa??de dos nossos pacientes.",
        },
        {
            first: "E com muito conforto",
            second: "e excelente localiza????o",
            description:
                "A ?? DisneyMed est?? localizada pr??xima da Regi??o Hospitalar de Belo Horizonte, em rua de f??cil acesso por transportes p??blicos e tamb??m com diversos estacionamentos no entorno. Contamos com instala????es pensadas para te oferecer conforto e tranquilidade nos momentos que voc?? mais precisa.",
        },
    ];

    return (
        <>
            <Header
                theme={theme}
                user={user}
                darkMode={darkMode}
                toggleDarkMode={setDarkMode}
            />
            <Content />
        </>


    );
};

export default Home;
