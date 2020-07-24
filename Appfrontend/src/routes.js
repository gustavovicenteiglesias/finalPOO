
import Dashboard from "views/Dashboard.js";

import TablaAbono from "views/TablaAbono.js";
import TableList from "views/TableList.js";
import TablaTecnico from "views/TablaTecnico.js";


var routes = [
  
  {
    path: "/dashboard",
    name: "Home",
    rtlName: "لوحة القيادة",
    icon: "tim-icons icon-chart-pie-36",
    component: Dashboard,
    layout: "/admin"
  },
  

  {
    path: "/tables",
    name: "Tabla Empresa",
    rtlName: "قائمة الجدول",
    icon: "tim-icons icon-align-center",
    component: TableList,
    layout: "/admin"
  },

    {
    path: "/map",
    name: "Abono",
    
    icon: "tim-icons icon-align-center",
    component: TablaAbono,
    layout: "/admin"
  },
  

  {
    path: "/tablaTecnico",
    name: "Tabla Tecnico",
    rtlName: "إخطارات",
    icon: "tim-icons icon-align-center",
    component: TablaTecnico,
    layout: "/admin"
  }

];
export default routes;
