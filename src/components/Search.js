import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Divider, Steps } from 'antd';
import { Card, Col, Row } from 'antd';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent'
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';



function Search() {
    const { Step } = Steps;
    const [searchText ,setSearchText]=useState("");
    const [details, setDetails]=useState(null);
    const [poDate, setPODate]=useState([])
    useEffect(() => {
    console.log(searchText);
    }, [searchText]); 
  

    function getData(){
        var config = {
            method: 'get',
            url: `/api/orders-lookup/services/v4/orders?orderNo=${searchText}`,
            headers: { 
              'Accept': 'application/json', 
              'Content-Type': 'application/json', 
              'WM_CONSUMER.ID': '2d0a30c7-b4cc-45d1-b451-d93535f5a92d', 
              'WM_CONSUMER.TENANT_ID': '0', 
              'WM_SVC.ENV': 'teflon', 
              'WM_SVC.NAME': 'order-service', 
              'WM_SVC.VERSION': '4.0.0', 
              'X-Request-ID': '1234_3bb32b5d-32e9-4d0a-ace6-e682edddd348', 
              'WM_QOS.CORRELATION_ID': '1234'
            }
        };
          
  
          axios(config)
          .then(function (response) {
            setDetails(response.data);
            console.log(details);
            })
          .catch(function (error) {
            console.log(error);
          });
  
    }  
    
  return (
        <div className='search-form'>
        <div className='form-control'>
            <label htmlFor='number'>Search your order Number</label>
            <input
            type='name'
            name='OrderNo'
            id='OrderNo'
            value={searchText}
            onChange={e => setSearchText(e.target.value)}
            />
            <button onClick={getData} className='submit'>search</button>
        </div>
        <div >
        {details!==null &&(
           
            <div className='result-container' >
                <div className='first-container'>
                <table >
                    <tr>           
                    <th>Group Order No</th>
                    <tr>{details.payload[0].groupOrderNo}</tr>
                    </tr>

                    <tr>
                    <th> Order No</th>
                    <tr>{details.payload[0].orderNo}</tr>
                    </tr>
                    <tr>
                    <th>Order Type</th>
                    <tr>{details.payload[0].orderType}</tr>
                    </tr>

                    <tr>
                    <th>Origin System ID</th>
                    <tr>{details.payload[0].originSystemId}</tr>
                    </tr>

                    <tr>
                    <th>Origin System Order Id</th>
                    <tr>{details.payload[0].originSystemOrderId}</tr>
                    </tr>

                    <tr>
                    <th>Order Source</th>
                    <tr>{details.payload[0].orderSource}</tr>
                    </tr>
                    <tr>
                    <th>Payment Status</th>
                    <tr>{details.payload[0].paymentStatus}</tr>
                    </tr>
                    <tr>
                    <th>Payment Rule ID</th>
                    <tr>{details.payload[0].paymentRuleId}</tr>
                    </tr>
                    <tr>
                    <th>Order Origin</th>
                    <tr>{details.payload[0].orderOrigin}</tr>
                    </tr>
                    <tr>
                    <th>Order Tax ID</th>
                    <tr>{details.payload[0].orderTaxId}</tr>
                    </tr>
                    <tr>
                    <th>Original System ID</th>
                    <tr>{details.payload[0].originSystemId}</tr>
                    </tr>
                    <tr>
                    <th>Mart ID</th>
                    <tr>{details.payload[0].martId}</tr>
                    </tr>
                    <tr>
                    <th>Vertical ID</th>
                    <tr>{details.payload[0].verticalId}</tr>
                    </tr>
                    <tr>
                    <th>Order Date</th>
                    <tr>{details.payload[0].orderDate}</tr>
                    </tr>
                </table>    
                </div>
                <div className='second-container' >
                <Row >
                    <Col >
                    <Card >
                    <React.Fragment>
                        <h3>Order Lines</h3>
                        <h4>Seller Details</h4>
                    <Timeline>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                        Partner Display Name
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{details.payload[0].orderLines[0].seller.partnerDisplayName}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                        {details.payload[0].orderLines[0].seller.legacySellerId}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>legacy Seller ID</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary" marginLeft="30%">
                        Seller
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{details.payload[0].orderLines[0].seller.seller}</TimelineContent>
                    </TimelineItem>    
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                    {details.payload[0].orderLines[0].seller.sellerType}
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent> Seller Type</TimelineContent>
                    </TimelineItem>   
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                    Prime Line No
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{details.payload[0].orderLines[0].primeLineNo}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                        Fullfillment Type
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                        </TimelineSeparator>
                        <TimelineContent>{details.payload[0].orderLines[0].fulfillmentType}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineOppositeContent color="text.secondary">
                        Fullfillment Path
                        </TimelineOppositeContent>
                        <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        </TimelineSeparator>
                        <TimelineContent>{details.payload[0].orderLines[0].fulfillmentPath.fulfillmentType}</TimelineContent>
                    </TimelineItem> 
                    </Timeline>
                </React.Fragment>
                    </Card>
                </Col>
                <Col >
                    <Card >
                        <h4>Order Product</h4>
                    <TimelineItem>
                    <TimelineOppositeContent color="text.secondary" marginLeft="35%">
                        Offer Id
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{details.payload[0].orderLines[0].orderProduct.offerId.offerId}</TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                    wupc
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{details.payload[0].orderLines[0].orderProduct.offerId.wupc}</TimelineContent>
                    </TimelineItem> 
                    <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        gtin
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary'/>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>{details.payload[0].orderLines[0].orderProduct.offerId.gtin}</TimelineContent>
                    </TimelineItem> 
                    <TimelineItem>
                    <TimelineOppositeContent color="text.secondary">
                        Item ID
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color='primary'/>
                    </TimelineSeparator>
                    <TimelineContent>{details.payload[0].orderLines[0].orderProduct.offerId.USItemId}</TimelineContent>
                    </TimelineItem> 
                  
                    </Card>
                </Col>
                <Col >
                    <Card className='prod'>
                        <h3>PRODUCT DETAILS</h3>
                        <CardMedia
                            component="img"
                            display="block"
                            image={details.payload[0].orderLines[0].orderProduct.offerLogistics.itemImageURL}
                            alt="Item Image"
                        />
                        <CardContent>
                        <h4>{details.payload[0].orderLines[0].orderProduct.productName}</h4>
                            
                            <Typography variant="body2" color="text.secondary">
                            <p>Product ID: {details.payload[0].orderLines[0].orderProduct.productId.productId}</p>
                            <p>Price: {details.payload[0].orderLines[0].unitPrice.currencyAmount} {details.payload[0].orderLines[0].unitPrice.currencyUnit}</p>
                            <p>Shipping Eligibility: {details.payload[0].orderLines[0].orderProduct.offerAttributes.shippingEligibility}</p>
                            </Typography>
                        </CardContent>
                        </Card>
                    </Col>
                </Row>
                </div>  
                <div>
                <table className='third-container'>
                    <tr>
                    <th>Purchase Order No</th>
                    <tr>{details.payload[0].purchaseOrders[0].purchaseOrderNo}</tr>
                    </tr>

                    <tr>
                    <th>Ship Node</th>
                    <tr>{details.payload[0].purchaseOrders[0].shipNode}</tr>
                    </tr>
                    <tr>
                    <th>Ship Node Type</th>
                    <tr>{details.payload[0].purchaseOrders[0].shipNodeType}</tr>
                    </tr>

                    <tr>
                    <th>TC Number</th>
                    <tr>{details.payload[0].purchaseOrders[0].tcNumber} </tr>
                    </tr>

                    <tr>
                    <th> Node Type</th>
                    <tr>{details.payload[0].orderLines[0].fulfillmentPath.nodeType}</tr>
                    </tr>

                    <tr>
                    <th>Fullfillment Type</th>
                    <tr>{details.payload[0].orderLines[0].fulfillmentType}</tr>
                    </tr>
                    <tr>
                    <th>Fullfillment Path</th>
                    <tr>{details.payload[0].orderLines[0].fulfillmentPath.fulfillmentType}</tr>
                    </tr>
                    <tr>
                    <th>Payment Rule ID</th>
                    <tr>{details.payload[0].paymentRuleId}</tr>
                    </tr>
                    <tr>
                    <th>Order Origin</th>
                    <tr>{details.payload[0].orderOrigin}</tr>
                    </tr>
                    <tr>
                    <th>Order Tax ID</th>
                    <tr>{details.payload[0].orderTaxId}</tr>
                    </tr>
                    <tr>
                    <th>Original System ID</th>
                    <tr>{details.payload[0].originSystemId}</tr>
                    </tr>
                    <tr>
                    <th>Mart ID</th>
                    <tr>{details.payload[0].martId}</tr>
                    </tr>
                    <tr>
                    <th>Vertical ID</th>
                    <tr>{details.payload[0].verticalId}</tr>
                    </tr>
                    <tr>
                    <th>Order Date</th>
                    <tr>{details.payload[0].orderDate}</tr>
                    </tr>
                </table>    
                </div>
            </div>           
        )}
        </div>
   </div>
  )
}

export default Search;