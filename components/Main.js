import * as views from "./views";

export default st => {
    return `
${views[st.view](st)}
`;
}