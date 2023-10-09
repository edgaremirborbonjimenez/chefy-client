import { AllOrdersPage } from "./pages/all-orders/all-orders.page";
import { OrderHistoryPage } from "./pages/order-history/order-history.page";
import { OrderInfoPage } from "./pages/order-info/order-info.page";

export default[
    {path:'',component:AllOrdersPage},
    {path:'info',component:OrderInfoPage},
    {path:'history',component:OrderHistoryPage},
]