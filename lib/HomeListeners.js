export default function HomeListeners() {
    //Search Button
    document.querySelector("#search").addEventListener("click", e => {
        e.preventDefault();
        render(state.Lake);
    }); 
}