import {css} from "styled-components";

export const setColor = {
    white: "#f8f9fa",
    lightGray: "#dee2e6",
    gray: "#adb5bd",
    darkGray: "#495057",
    black: "#212529",
    blueAccent: "#4ea8de"
};

export const setFlex = ({ x = "center", y = "center", z = "row" } = {}) => {
    return `display:flex;align-items:${x};justify-content:${y};flex-direction"${z}`;
};