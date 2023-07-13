import { sql } from "@vercel/postgres";
import { InferModel } from "drizzle-orm";
import {drizzle} from "drizzle-orm/vercel-postgres"
import {pgTable, integer,varchar,serial,text} from "drizzle-orm/pg-core";

export const cartTable= pgTable("cart_hack",{
_id: serial("_id").primaryKey().notNull(),
title: varchar("title", {length: 255}).notNull(),
image: text("image").notNull(),
alt: varchar("alt" , {length: 255}).notNull(),
quantity: integer("quantity").notNull(),
price: integer("price").notNull(),
product_id: varchar("product_id", {length: 255}).notNull(),
user_id: varchar("user_id", {length: 255}).notNull(),
total_price: integer("total_price").notNull(),
});

export type Cart=InferModel<typeof cartTable>;
export type addToCart=InferModel<typeof cartTable, "insert">;

export const db= drizzle(sql);

// CREATE TABLE cart_hack (
//     _id SERIAL PRIMARY KEY,
//     title VARCHAR(255),
//     image TEXT,
//     alt VARCHAR(255),
//     quantity INT,
//     price INT,
//     product_id varchar(255),
// total_price INT
// );
// })