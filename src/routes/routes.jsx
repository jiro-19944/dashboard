import Dashboard from 'views/Dashboard/Dashboard';
import Contact from 'views/Contact/Contact';
import TableList from 'views/TableList/TableList';
import Login from 'views/Typography/Login';
import Icons from 'views/Icons/Icons';
import Maps from 'views/Maps/Maps';
import Notifications from 'views/Notifications/Notifications';
import Upgrade from 'views/Upgrade/Upgrade';
import CorpProfile from "../views/CorpProfile/CorpProfile";

const appRoutes = [
    { path: "/dashboard", name: "Заказы", icon: "orders", component: Dashboard },
    { path: "/add-action", name: "Меню и товары", icon: "pe-7s-plus", component: Contact },
    // { path: "/your-actions", name: "Ваши акции", icon: "pe-7s-note2", component: TableList },
    // { path: "/goods-requests", name: "Заявки на товары", icon: "pe-7s-news-paper", component: Login },
    // { path: "/req-stats", name: "Статистика запросв", icon: "pe-7s-news-paper", component: Login },
    { path: "/corp-profile", name: "Профиль компании", icon: "pe-7s-config", component: CorpProfile },
    { path: "/contact", name: "Связь с разработчиками", icon: "pe-7s-mail", component: Contact },
    // { path: "/logout", name: "Выход", icon: "pe-7s-power", component: Contact },
    // { path: "/icons", name: "Icons", icon: "pe-7s-science", component: Icons },
    { redirect: true, path:"/", to:"/dashboard", name: "Dashboard" }
];

export default appRoutes;