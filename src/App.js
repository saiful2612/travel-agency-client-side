import Header from "./Component/Header/Header";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./Component/Home/Home";
import MyOrder from "./Component/MyOrder/MyOrder";
import AuthProvider from "./Context/AuthProvider";
import Login from "./Component/LogIn/Login";
import Register from "./Component/Register/Register";
import NoDataFound from "./Component/NoDataFound/NoDataFound";
import PrivateRoute from "./Component/PrivateRoute/PrivateRound";
import Details from "./Component/Details/Details";
import AddTour from "./Component/AddTour/AddTour";
import AllOrders from "./Component/AllOrders/AllOrders";
import Footer from "./Component/Footer/Footer";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/myorders">
            <MyOrder></MyOrder>
          </PrivateRoute>
          <PrivateRoute path="/allorders">
            <AllOrders></AllOrders>
          </PrivateRoute>
          <PrivateRoute path="/addtour">
            <AddTour></AddTour>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <Route path="/register">
            <Register></Register>
          </Route>
          <PrivateRoute path="/details/:detailsId">
            <Details></Details>
          </PrivateRoute>
          <Route path="*">
            <NoDataFound></NoDataFound>
          </Route>
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
