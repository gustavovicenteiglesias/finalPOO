
import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react plugin used to create charts
import { Line, Bar } from "react-chartjs-2";

// reactstrap components
import {
  Button,
  ButtonGroup,
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  Label,
  FormGroup,
  Input,
  Table,
  Row,
  Col,
  UncontrolledTooltip
} from "reactstrap";

// core components
import {
  chartExample1,
  chartExample2,
  chartExample3,
  chartExample4
} from "variables/charts.js";

class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  render() {
    return (
      <>
        <div className="content">
          <Row>
            <Col xs="12">
              <Card className="card-chart">
                <CardHeader>
                  <Row>
                    <Col className="text-left" sm="6">
                      <h5 className="card-category">Total Shipments</h5>
                      <CardTitle tag="h2">Bienvenidos </CardTitle>
                    </Col>

                  </Row>
                </CardHeader>
                <CardBody>
                  <p>Esta app es una parte de un tablero de administracion para empresas
                    que dispongan de un servicio tecnico . Se realizo con React en el frontend y Spring 
                    Boot en el backend</p>
                    <p>La base de datos es postgres , la idea es ir escalando y realizar otras vistas
                     para que los tecnicos, en el cliente llenen los formularios y puedan entregar un pdf 
                     </p>
                     <p>Como asi tambien en este mismo tablero poder realizar facturas , remitos, 
                     stock...</p>
                     <br/>
                     <p>El tablero original se saco de esta pagina </p>
                     <p> Copyright 2020 Creative Tim (https://www.creative-tim.com)
                         Licensed under MIT 
                          (https://github.com/creativetimofficial/black-dashboard-react/blob/master/LICENSE.md)
                      </p>
                </CardBody>
              </Card>
            </Col>
          </Row>
        </div>
      </>
    );
  }
}

export default Dashboard;
