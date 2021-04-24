const priceLocalString: (price: number) => string = (price) => {
    return price.toLocaleString("nl-NL", {
        currency: "EUR",
        style: "currency",
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
    });
};

export default priceLocalString;
