import { Component, OnInit } from '@angular/core';
import { OrderService } from '../../services/api/order.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { switchMap } from 'rxjs/operators';

@Component({
	selector: 's-orders-pg',
	templateUrl: './order_details.component.html',
    styleUrls: [ './order_details.scss'],
})

export class OrderDetailsComponent implements OnInit {
    public orderId:number;
    public frmOrderDetail: FormGroup;
    public orderDetailsRec:any={id:'',orderLine:[]};
    public isOrderOnHold:boolean = false;

    public rows=[];
    public columns =[
        {prop:"productName" , name: "Product"    , width:200 },
        {prop:"productCode" , name: "Code"       , width:70  },
        {prop:"category"    , name: "Category"   , width:100 },
        {prop:"listPrice"   , name: "List Price" , width:70  }
    ];

    constructor(
        private router: Router,
        private route: ActivatedRoute,
        private formBuilder: FormBuilder,
        private orderService: OrderService
    ) {}

    ngOnInit(): void {

        this.frmOrderDetail = this.formBuilder.group({
            customerName   : ['',Validators.required],
            customerEmail  : ['',Validators.required],
            customerCompany: ['',Validators.required],
            orderStatus    : ['',Validators.required],
            orderDate      : ['',Validators.required],
            paymentType    : [''],
            paidDate       : [''],
            shipAddress1   : ['',Validators.required],
            shipAddress2   : ['',Validators.required],
            shipCity       : ['',Validators.required],
            shipCountry    : ['',Validators.required],
            shipState      : ['',Validators.required],
            shippedDate    : ['',Validators.required],
            shippedFee     : ['',Validators.required],
        });
        this.getData();

    }

    getData(){
        var me = this;
        this.route.params.pipe(
            switchMap( function(params: Params){
                me.orderId = params['id'];
                return me.orderService.getOrderDetails(params['id'])
            })).subscribe(function(resp){
                console.log("Order details", resp[0]);
                me.frmOrderDetail.setValue({
                    customerName   : [resp[0].customerName],
                    customerEmail  : [resp[0].customerEmail],
                    customerCompany: [resp[0].customerCompany],
                    orderStatus    : [resp[0].orderStatus],
                    orderDate      : [resp[0].orderDate],
                    paymentType    : [resp[0].paymentType],
                    paidDate       : [resp[0].paidDate],
                    shipAddress1   : [resp[0].shipAddress1],
                    shipAddress2   : [resp[0].shipAddress2],
                    shipCity       : [resp[0].shipCity],
                    shipCountry    : [resp[0].shipCountry],
                    shipState      : [resp[0].shipState],
                    shippedDate    : [resp[0].shippedDate],
                    shippedFee     : [resp[0].shippingFee]
                });
                me.orderDetailsRec = resp[0];
            });

            // else
            /*const switched = this.route.params.pipe(
                switchMap( (params: Params) => {
                    me.orderId = params['id'];
                    return me.orderService.getOrderDetails(params['id'])
                }));
                switched.subscribe((resp) => {
                    console.log("Order details", resp[0]);
                    me.frmOrderDetail.setValue({
                        customerName   : [resp[0].customerName],
                        customerEmail  : [resp[0].customerEmail],
                        customerCompany: [resp[0].customerCompany],
                        orderStatus    : [resp[0].orderStatus],
                        orderDate      : [resp[0].orderDate],
                        paymentType    : [resp[0].paymentType],
                        paidDate       : [resp[0].paidDate],
                        shipAddress1   : [resp[0].shipAddress1],
                        shipAddress2   : [resp[0].shipAddress2],
                        shipCity       : [resp[0].shipCity],
                        shipCountry    : [resp[0].shipCountry],
                        shipState      : [resp[0].shipState],
                        shippedDate    : [resp[0].shippedDate],
                        shippedFee     : [resp[0].shippingFee]
                    });
                    me.orderDetailsRec = resp[0];
                });*/
    }

    goBack(){
        console.log("Back");
    }



}
