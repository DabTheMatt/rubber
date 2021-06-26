import  {createGlobalStyle} from "styled-components";
import { setColor, setFlex } from "../styles";

export const Globals = createGlobalStyle`

* {
    box-sizing: border-box;
}

body {
    background: ${setColor.white};
}


`;

export default Globals;