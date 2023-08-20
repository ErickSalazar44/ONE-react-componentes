import { v4 as uuidv4 } from "uuid";

// Lista de equipos
const equiposDefault = [
    {
        id: uuidv4(),
        titulo: "Programación",
        colorPrimario: "#57C278 ",
    },
    {
        id: uuidv4(),
        titulo: "Front End",
        colorPrimario: "#82CFFA ",
    },
    {
        id: uuidv4(),
        titulo: "Data Science",
        colorPrimario: "#A6D157 ",
    },
    {
        id: uuidv4(),
        titulo: "Devops",
        colorPrimario: "#E06B69 ",
    },
    {
        id: uuidv4(),
        titulo: "UX y Diseño",
        colorPrimario: "#DB6EBF ",
    },
    {
        id: uuidv4(),
        titulo: "Móvil",
        colorPrimario: "#FFBA05 ",
    },
    {
        id: uuidv4(),
        titulo: "Innovación y Gestión",
        colorPrimario: "#FF8A29 ",
    },
];

export default equiposDefault;
