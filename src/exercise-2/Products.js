import React from 'react';
import Product from './Product';
import { Link, Switch, Route} from 'react-router-dom';
import './Products.css';

class Products extends React.Component {
    render() {
        return (
            <div>
                <div className="text">
                     All Products:<br/>
                     <Link to="/products/:1" className="product">Bicycle</Link><br/>
                     <Link to='/products/:2' className="product">TV</Link><br/>
                     <Link to='/products/:3' className="product">Pencil</Link><br/>
                </div>
                         
                <Switch>
                    <Route path="/products/:1" component={Product} />
                    <Route path="/products/:2" component={Product} />
                    <Route path="/products/:3" component={Product} />
                </Switch>
            </div>
        );
    }
}
export default Products;