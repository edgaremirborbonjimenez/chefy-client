import { OrderSelectDTO } from "./dto/orderSelectDTO";

const API_ORDERS = "http://localhost:3000/orders";

const orderDefault = new OrderSelectDTO(1, 0, "null");

export const selectOrdersFetch = () =>{
    fetch(`${API_ORDERS}`, {
        method: "GET",
        body: JSON.stringify(orderDefault),
        headers:{
            "Conent-Type":"application/json",
        },
    });
};
