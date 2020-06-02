import * as Controllers from './controllers';

export default (st) => {
    Controllers[st.controller](st);
}