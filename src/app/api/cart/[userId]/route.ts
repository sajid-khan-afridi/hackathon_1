import { cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import {eq} from "drizzle-orm"

// type Iprops = {
    
//         userId: string;
    
// }

export const GET = async (request: NextRequest, { params: { userId } }: { params: { userId: string }}) => {
    // const { userId } = auth();
    // const user_Id = userId;
    console.log(userId)
    try {
      if (userId) {
        const res = await db
          .select()
          .from(cartTable)
          .where(eq(cartTable.user_id, userId as string));
        const cartItems = res.map((item) => ({
          title: item.title,
          image: item.image,
          alt: item.alt,
          quantity: item.quantity,
          total_price: item.total_price,
          price: item.price,
          _id: item.product_id,
          user_id:item.user_id,
          // product_id:item.product_id,
        }));
        const totalQuantity = cartItems.reduce(
          (total, item) => total + item.quantity,
          0
        );
        const totalAmount = cartItems.reduce(
          (total, item) => total + item.total_price,
          0
        );
        return NextResponse.json({cartItems,totalAmount,totalQuantity})
      } else {
        throw new Error("Failed to fetch id");
      }
    } catch (error) {
      return NextResponse.json({
          Message:(error as {message:string}).message,
      })
    }
  };