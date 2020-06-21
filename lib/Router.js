import Navigo from "navigo";
import * as state from "/store";
import { render } from "./Render";
import { capitalize, round } from "lodash";


const router = new Navigo(window.location.origin);

router.on({
    "/": () => render(state.Home),
    "/Home": () => render(state.Home), 
    "/Tips": () => render(state.Tips),
    "/Search": () => render(state.Search),
    "/Register": () => render(state.Register),
    "/Entries": () => render(state.Entries),
    "/Lake/:id": (params) => {
      let page = capitalize(params.page);
      return render(state.Lake, {id: params.id});
    }}).resolve();

    export default { router }