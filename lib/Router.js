import Navigo from "navigo";
import * as state from "/store";
import { render } from "./Render";
import { capitalize, round } from "lodash";


const router = new Navigo(window.location.origin);

router.on({
    "/": () => render(state.Home), 
    "/Tips": () => render(state.Tips),
    
    "/Lake/:id": (params) => {
      let page = capitalize(params.page);
      return render(state.Lake, {id: params.id});
    }}).resolve();

    export default { router }