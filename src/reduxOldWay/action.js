function setQuery(key) {
    return {
        type: "setQuery",
        payload: key
    };
}

export { setQuery };