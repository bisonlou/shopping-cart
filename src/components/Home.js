import React, { Component } from 'react';

import axios from 'axios';
import NavBar from './NavBar';
import PurchasePopper from './PurchasePopper';
import image1 from '../assets/images/image1.jpeg';
import image2 from '../assets/images/image2.jpeg';
import image3 from '../assets/images/image3.jpeg';
import image4 from '../assets/images/image4.jpeg';
import image5 from '../assets/images/image5.jpeg';
import { Carousel } from 'react-responsive-carousel';
import carouselClasses from '../assets/styles/styles';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { withStyles, Grid, Typography, Button } from '@material-ui/core';


class Home extends Component {
  state = {
    phoneNumber: '260968086794',
    openPurchasePopper: false,
    anchorEl: null,
    car: {
      model: 'Mercedes Benz',
      year: '2015',
      Engine: 'Diesel',
      Price: '23,000,000.0',
    },
  };

  componentDidMount() {
    // 
  };

  handlePurchaseClick = (event) => {
    const { currentTarget } = event;

    this.setState({
      anchorEl: currentTarget,
      openPurchasePopper: true,
    })
  }

  handlePurchsePopperClose = () => {
    return null;
  }

  handlePhoneNumberVerification = () => {
    const url = "https://sandbox.syspearl.com/api";
    const auth_key = "CNKMKA996XKGQPGPTAUHPWFKJNWUMCW6V3ERHANJMWR9BBWKUKB";
    const conc_string = auth_key + "initiate_mobile_money_payments";

    const encoded = window.btoa(conc_string);

    const data = JSON.stringify({
      amount: 2000,
      merchant_code: 10021,
      narrative: 894312057,
      mm_number: "260968080022",
      external_ref: "260968086794-0003",
      action: "initiate_mobile_money_payments",
      callback_url: "https://payments.domain.net/path/to/api",
    });
    const config = {
      headers: {
        'Content-Type': 'application/json',
        'Authorization-key': "Q05LTUtBOTk2WEtHUVBHUFRBVUhQV0ZLSk5XVU1DVzZWM0VSSEFOSk1XUjlCQldLVUtCaW5pdGlhdGVfbW9iaWxlX21vbmV5X3BheW1lbnRz",
      },
      responseType: 'json',
    };

    fetch(url, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json',
        'Authorization-key': "Q05LTUtBOTk2WEtHUVBHUFRBVUhQV0ZLSk5XVU1DVzZWM0VSSEFOSk1XUjlCQldLVUtCaW5pdGlhdGVfbW9iaWxlX21vbmV5X3BheW1lbnRz",
      },
      body: data
    })
      // .then(response => {
        // return response.json();
      // })
      .then(data => console.log(data))

      // axios.post(
      //   url,
      //   JSON.stringify(data),
      //   config
      //   )
      //   .then(resp => console.log('----->', resp))
      //   .catch(error => console.log('error---->', error))
    }

  handlePhoneNumberChange = (event) => {
    const { target: { value } } = event;
    this.setState(
      {
        phoneNumber: value
      }
    )
  }

  render() {
    const { car, anchorEl, openPurchasePopper } = this.state;
    const { classes } = this.props;
    return (
      <div>
        <NavBar />
        <Grid container className={classes.root} spacing={2}>
          <Grid item xs={12}>
            <Grid container justify="center" spacing={2}>
              <Grid className={classes.carousel}>
                <Carousel>
                  <div>
                    <img alt="first" src={image1} />
                    <p className="legend">Side view</p>
                  </div>
                  <div>
                    <img alt="second" src={image2} />
                    <p className="legend">Interior</p>
                  </div>
                  <div>
                    <img alt="third" src={image3} />
                    <p className="legend">Road View</p>
                  </div>
                  <div>
                    <img alt="third" src={image4} />
                    <p className="legend">Road View</p>
                  </div>
                  <div>
                    <img alt="third" src={image5} />
                    <p className="legend">Road View</p>
                  </div>
                </Carousel>
              </Grid>

              <Grid className={classes.sidePanel}>
                <Grid>
                  <Typography>
                    {car.model}
                  </Typography>

                  <Typography>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the ...
                </Typography>

                  <Button
                    variant="contained"
                    className={classes.button}
                    onClick={this.handlePurchaseClick}
                  >
                    Buy
                  </Button>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

        <PurchasePopper
          open={openPurchasePopper}
          anchorEl={anchorEl}
          classes={classes}
          handleClose={this.handlePurchsePopperClose}
          handlePhoneNumberChange={this.handlePhoneNumberChange}
          handlePhoneNumberVerification={this.handlePhoneNumberVerification}
        />
      </div>
    )
  }
};

export default withStyles(carouselClasses)(Home);
