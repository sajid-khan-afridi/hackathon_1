import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { auth } from "@clerk/nextjs";

const key = process.env.STRIPE_SECRET_KEY || "";

const stripe = new Stripe(key, {
  apiVersion: "2022-11-15",
});

export async function POST(request: NextRequest) {
  const {userId} = auth();

  const body = await request.json();
//   console.log("BODY",body);

  const customer = await stripe.customers.create({
    metadata: {
      userId: userId,
    },
  })

  try {
    if (body.length > 0 && userId) {

      const session = await stripe.checkout.sessions.create({
        submit_type: "pay",
        mode: "payment",
        payment_method_types: ["card"],
        billing_address_collection: "auto",
        shipping_options: [
          { shipping_rate: "shr_1NWsvlI0ri7xn1f0lwLnWEvy" },
          { shipping_rate: "shr_1NWsxFI0ri7xn1f021ZfiZxy" },
        ],
        invoice_creation: {
          enabled: true,
        },
        
        line_items: body.map((item: any) => {
            // console.log("ITEM=",item)
          return {
            price_data: {
              currency: "usd",
              product_data: {
                name: item.title,
                images: [item.image],
              },
              unit_amount: item.price * 100,
            },
            quantity: item.quantity,
            adjustable_quantity: {
              enabled: true,
              minimum: 1,
              maximum: 10,
            },
          };
        }),
        customer:customer.id,
        phone_number_collection: {
          enabled: true,
        },
        success_url: `${request.headers.get("origin")}/success`,
        cancel_url: `${request.headers.get("origin")}/cartpage`,
      });
      return NextResponse.json({ session });
    } else {
      return NextResponse.json({ message: "No Data Found" });
    }
  } catch (err: any) {
    console.log(err);
    return NextResponse.json(err.message);
  }
}