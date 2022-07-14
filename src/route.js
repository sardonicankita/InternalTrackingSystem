const axios = require('axios');

function getData(){
    var config = {
        method: 'get',
        url: 'http://localhost:3000/api/orders-lookup/services/v4/orders?orderNo=200001001037715',
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
        console.log(JSON.stringify(response.data));
      })
      .catch(function (error) {
        console.log(error);
      });

}
getData()
module.exports={getData}

<div className="site-card-wrapper">
<span className='display'>
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Seller Details" bordered={false}>
      <React.Fragment>
    <Timeline position="alternate">
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
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>legacy Seller ID</TimelineContent>
      </TimelineItem>
      {/* <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        Seller
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].orderLines[0].seller.seller}</TimelineContent>
      </TimelineItem>     */}
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
      {details.payload[0].orderLines[0].seller.sellerType}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> Seller Type</TimelineContent>
      </TimelineItem>   
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        Node Type
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].orderLines[0].fulfillmentPath.nodeType}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        {details.payload[0].orderLines[0].accessMode}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Access Mode</TimelineContent>
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
      <Col span={8}>
        <Card title="order product" bordered={false}>
        <TimelineItem>
          <TimelineOppositeContent color="text.secondary">
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
      <Col span={8}>
        <Card title="PRODUCTS" bordered={false}>
          <CardActionArea>
            <CardMedia
                component="img"
                height= '100%'
                width= '100%'
                display="block"
                image={details.payload[0].orderLines[0].orderProduct.offerLogistics.itemImageURL}
                alt="Item Image"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {details.payload[0].orderLines[0].orderProduct.productName}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  <p>Product ID: {details.payload[0].orderLines[0].orderProduct.productId.productId}</p>
                  <p>Price: {details.payload[0].orderLines[0].unitPrice.currencyAmount} {details.payload[0].orderLines[0].unitPrice.currencyUnit}</p>
                  <p>Shipping Eligibility: {details.payload[0].orderLines[0].orderProduct.offerAttributes.shippingEligibility}</p>
                </Typography>
              </CardContent>
              </CardActionArea>
        </Card>
    </Col>
  </Row>
     <Row gutter={16}>
        <Col span={8}>
          <Card title="Purchase Order" bordered={false}>
      
          <React.Fragment>
          <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            Purchase Order No
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{details.payload[0].purchaseOrders[0].purchaseOrderNo}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            {details.payload[0].purchaseOrders[0].shipNode}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='warning'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Ship Node</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            Ship Node Type
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{details.payload[0].purchaseOrders[0].shipNodeType}</TimelineContent>
          </TimelineItem>    
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            {details.payload[0].purchaseOrders[0].tcNumber}                        </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='warning'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent> TC Number</TimelineContent>
          </TimelineItem>   
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            Node Type
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='primary'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>{details.payload[0].orderLines[0].fulfillmentPath.nodeType}</TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent color="text.secondary">
            {details.payload[0].orderLines[0].accessMode}
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color='warning'/>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Access Mode</TimelineContent>
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
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
        <Col span={8}>
          <Card title="Card title" bordered={false}>
            Card content
          </Card>
        </Col>
      </Row>
      
  </span>
</div>
{/* <div className='first-container'>
<div className="site-card-wrapper2">
  <Row gutter={16}>
    <Col span={8}>
      <Card title="Order Line Quantity Info" bordered={false}>
  
      <React.Fragment>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        status
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].orderLines[0].orderLineQuantityInfo[0].status}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        {details.payload[0].orderLines[0].orderLineQuantityInfo[0].statusCode}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Status Code</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
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
        {details.payload[0].orderLines[0].orderLineQuantityInfo[0].eligibleCancelAction}                        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> Eligible Cancel Action</TimelineContent>
      </TimelineItem>   
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        Node Type
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].orderLines[0].fulfillmentPath.nodeType}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        {details.payload[0].orderLines[0].accessMode}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Access Mode</TimelineContent>
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
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
</div>
</div> */}
<div className='second-container'>
<div className='PO'>



<Row gutter={16}>
    <Col span={8}>
      <Card title="Purchase Order" bordered={false}>
  
      <React.Fragment>
      <Timeline position="alternate">
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        Purchase Order No
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].purchaseOrders[0].purchaseOrderNo}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        {details.payload[0].purchaseOrders[0].shipNode}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Ship Node</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        Ship Node Type
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].purchaseOrders[0].shipNodeType}</TimelineContent>
      </TimelineItem>    
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        {details.payload[0].purchaseOrders[0].tcNumber}                        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent> TC Number</TimelineContent>
      </TimelineItem>   
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        Node Type
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='primary'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>{details.payload[0].orderLines[0].fulfillmentPath.nodeType}</TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineOppositeContent color="text.secondary">
        {details.payload[0].orderLines[0].accessMode}
        </TimelineOppositeContent>
        <TimelineSeparator>
          <TimelineDot color='warning'/>
          <TimelineConnector />
        </TimelineSeparator>
        <TimelineContent>Access Mode</TimelineContent>
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
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
    <Col span={8}>
      <Card title="Card title" bordered={false}>
        Card content
      </Card>
    </Col>
  </Row>
  </div>
<Steps progressDot current={1}>
<Step title="Purchase Order No" description={details.payload[0].purchaseOrders[0].purchaseOrderNo}/>
<Step title="Ship Node" description={details.payload[0].purchaseOrders[0].shipNode} />
<Step title="Ship Node Type" description={details.payload[0].purchaseOrders[0].shipNodeType} />
<Step title="TC Number" description={details.payload[0].purchaseOrders[0].tcNumber} />
</Steps>
<Divider />
<Steps progressDot current={1} direction="vertical">
<Step title="Finished" description="This is a description. This is a description." />
<Step title="Finished" description="This is a description. This is a description." />
<Step title="In Progress" description="This is a description. This is a description." />
<Step title="Waiting" description="This is a description." />
<Step title="Waiting" description="This is a description." />
</Steps>
</div>

</div>
)}
{/* {details!==null && (<div> <h1>{details.payload[0].version}</h1></div>)} */}