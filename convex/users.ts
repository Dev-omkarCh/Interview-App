import { v } from "convex/values";
import { mutation, query } from "./_generated/server";

export const syncUser = mutation({
    args:{
        name: v.string(),
        email: v.string(),
        clerkId: v.string(),
        image: v.optional(v.string()),
    },
    handler: async(ctx, args)=>{

        const exitingUser = await ctx.db.query("users")
        .filter(q => q.eq(q.field("clerkId"), args.clerkId)).first()

        if(exitingUser) return

        return await ctx.db.insert("users",{
            ...args,
            role: "candidate"
        })
    }
});

export const getUsers = query({
    handler: async(ctx, args)=>{
        const identity = await ctx.auth.getUserIdentity();
        if(!identity) throw new Error("User is not autenticated");

        const users = await ctx.db.query("users").collect();

        return users;
    }
});

export const getUserByClerkId = query({
    args:{
        clerkId : v.string(),
    },
    handler: async(ctx, args)=>{
        const user = ctx.db.query("users")
        .withIndex("by_clerk_id", (q) => q.eq("clerkId",args.clerkId))
        .first();

        return user;
    }
});