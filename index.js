require("./db/conn");
const PORT = 4000
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
app.use(express.json())
app.use(express.urlencoded())
app.use(cors())

// View Engine Setup
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


app.get('/', function (req, res) {
    res.send('<h1>Working</h1>')
})
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Inventory APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/inventory',
    require('./apis/Inventory/Products/addProduct'),
    require('./apis/Inventory/Products/removeProduct'),
    require('./apis/Inventory/Products/viewProduct'),
    require('./apis/Inventory/Products/getAllProducts'),
    require('./apis/Inventory/Products/updateProduct'),
    // MRP 
    require('./apis/Inventory/MRP/addMRP'),
    require('./apis/Inventory/MRP/deleteMRP'),
    require('./apis/Inventory/MRP/editMRP'),
    require('./apis/Inventory/MRP/getAllMRP'),
    require('./apis/Inventory/MRP/getMRP'),
    require('./apis/Inventory/MRP/getProductMRP'),

)
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Customer APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/customer',
    require('./apis/Customers/crud/addCustomer'),
    require('./apis/Customers/crud/deleteCustomer'),
    require('./apis/Customers/crud/editCustomer'),
    require('./apis/Customers/crud/viewAllCustomers'),
    require('./apis/Customers/crud/viewCustomer'),
    // Supply Order 
    require('./apis/Customers/SupplyOrder/addSupplyOrder'),
    require('./apis/Customers/SupplyOrder/deleteSupplyOrder'),
    require('./apis/Customers/SupplyOrder/editSupplyOrder'),
    require('./apis/Customers/SupplyOrder/viewAllSupplyOrder'),
    require('./apis/Customers/SupplyOrder/viewSupplyOrder'),
    // Order Product 
    require('./apis/Customers/OrderProducts/addOrderProduct'),
    require('./apis/Customers/OrderProducts/deleteOrderProduct'),
    require('./apis/Customers/OrderProducts/updateOrderproduct'),
    require('./apis/Customers/OrderProducts/viewAllorderProduct'),
    require('./apis/Customers/OrderProducts/viewOrderedProduct'),
    require('./apis/Customers/OrderProducts/supplyOrderData'),
    // SalesOrder 
    require('./apis/Customers/SalesOrder/addSalesOrder'),
    require('./apis/Customers/SalesOrder/deleteSalesOrder'),
    require('./apis/Customers/SalesOrder/updateSalesOrder'),
    require('./apis/Customers/SalesOrder/viewAllSalesOrder'),
    require('./apis/Customers/SalesOrder/viewAllSupplySales'),
    require('./apis/Customers/SalesOrder/viewSalesOrder'),















)
////////////////////////////////////////////////////////////////////////////////
///////////////////////////////Staff Member APIS////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////
app.use('/staff',
    require('./apis/StaffMembers/addStaffMember'),
    require('./apis/StaffMembers/getAllStaffMembers'),
    require('./apis/StaffMembers/removeStaffMember'),
    require('./apis/StaffMembers/updateStaffMember'),
    require('./apis/StaffMembers/viewStaffMember'),










)

app.listen(PORT, () => {
    console.log(`Server is started in PORT no ${PORT}`)
});