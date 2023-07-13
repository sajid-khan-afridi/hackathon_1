import { addToCart, cartTable, db } from "@/lib/drizzle";
import { auth } from "@clerk/nextjs";
import { NextRequest, NextResponse } from "next/server";
import { eq } from "drizzle-orm";
import { urlForImage } from "../../../../sanity/lib/image";

export const Get = async (req: NextRequest) => {
  const { userId } = auth();
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
        _id: item._id,
        user_id:item.user_id,
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


export const POST=async (request:NextRequest)=>{
    const {userId}=auth();
    const req: addToCart = await request.json();

    // console.log("Price:" + req.quantity)

    try {
        if(req) {
            const res = await db.insert(cartTable).values({
                alt: req.alt,
                image: req.image,
                price: req.price,
                product_id: req.product_id,
                quantity: req.quantity,
                title: req.title,
                total_price: 1,
                user_id: userId as string,
            }).returning();
            return NextResponse.json({res});
        } else {
            throw new Error("Failed to update Data")
        }
        
    } catch (error) {
        console.log(error)
        return NextResponse.json({
            Message:(error as {message:string}).message,
        })
    }
}