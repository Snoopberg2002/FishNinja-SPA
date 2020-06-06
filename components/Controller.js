import * as Controllers from './controllers';

export default (st, props) => {
    Controllers[st.controller](st, props);
}