import { IInvoiceProductModel } from "./IInvoiceProductModel";
import { IPaymentModel } from "./IPaymentModel";

export declare interface ISalesModel {
    /**
     * Sales record Id
     * @type {Number}
     */
    id: number;

    /**
     * Sales invoice/Cash memo number
     * @type {string}
     */
    MemoNumber: string;

    /**
     * Customer name
     * @type {string}
     */
    CustomerName: string

    /**
     * Customer Phone Number
     * @type {string}
     */
    CustomerPhoneNumber: string

    /**
     * Delivary Address or google map location
     * @type {string}
     */
    DeliveryLocation: string

    /**
     * Net total of cash memo
     * @type {number}
     */
    NetTotal: number;

    /**
     * Amount paid by the customer
     * @type {number}
     */
    PaymentAmount: number;

    /**
     * Net total of cash memo
     * @type {Date | string}
     */
    SalesDate: Date | string;

    /**
     * Products and quantity sold against this memo
     * @type { IInvoiceProductModel[] }
     */
    ProductsSold: IInvoiceProductModel[]

    /**
     * Terms and conditions against this sales
     * @type { string }
     */
    Terms: string;
    /**
     * Payment history of invoice
     * @type {IPaymentModel[]}
     */
    PaymentHistory: IPaymentModel[];
}
