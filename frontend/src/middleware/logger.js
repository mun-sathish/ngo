const logger = store => next => action => {
    console.log("arrowlogger::pre:action:", action);
    console.log("arrowogger::pre:store:", store.getState());
    let ret = next(action);
    console.log("arrowlogger::post:action:", action);
    console.log("arrowlogger::post:store:", store.getState());
    return ret;
};
export default logger;