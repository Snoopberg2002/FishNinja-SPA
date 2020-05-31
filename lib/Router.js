import Navigo from "navigo";
import * as state from "/store";
import { render } from "../index";
import { capitalize, round } from "lodash";


const router = new Navigo(window.location.origin);

router.on({
    "/": () => render(state.Home), 
    ":page": params => {
      let page = capitalize(params.page);
      render(state[page]);
    }});

    export default { router }