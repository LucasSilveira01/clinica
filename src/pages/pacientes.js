import { Button } from "@material-ui/core";
import { withIronSession } from "next-iron-session";
import { useState } from "react";
import GenericForm from "../components/generic-form";
import GenericList from "../components/generic-list";
import Header from "../components/header";

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

const Pacientes = ({ theme, user, darkMode, setDarkMode }) => {
    const [isCadastro, setIsCadastro] = useState(false);

    return (
        <>
            <Header
                theme={theme}
                user={user}
                darkMode={darkMode}
                toggleDarkMode={setDarkMode}
            />
            <div style={{ marginTop: '80px' }}>
                {user && (
                    <Button onClick={() => setIsCadastro(!isCadastro)}>
                        {isCadastro ? "Voltar" : "Adicionar novo"}
                    </Button>
                )}

                {user && !isCadastro && <GenericList type="paciente" />}
                {user && isCadastro && <GenericForm type="paciente" />}
                {!user && <div>acesso negado</div>}

            </div>
        </>
    );
};

export default Pacientes;
