import { NextApiRequest, NextApiResponse } from "next";
import client from "@libs/server/client";
import withHandler from "@libs/server/withHandler";

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { phone, email } = req.body;
  const payload = phone ? { phone: +phone } : { email };
  // let user;

  // upsert
  /* 1.
  if (email) {
    user = await client.user.findUnique({
      where: {
        email,
      },
    });
    if (user) console.log("found it.");
    else {
      console.log("Did not found. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          email,
        },
      });
    }
    console.log(user);
  }
  if (phone) {
    user = await client.user.findUnique({
      where: {
        phone: +phone,
      },
    });
    if (user) console.log("found it.");
    else {
      console.log("Did not found. Will create.");
      user = await client.user.create({
        data: {
          name: "Anonymous",
          phone: +phone,
        },
      });
    }
    console.log(user);
  }
  */

  /* 2.
  if (phone) {
    user = await client.user.upsert({
      where: {
        phone: +phone,
      },
      create: {
        name: "Anonymous",
        phone: +phone,
      },
      update: {},
    });
  } else if (email) {
    user = await client.user.upsert({
      where: {
        email,
      },
      create: {
        name: "Anonymous",
        email,
      },
      update: {},
    });
  }
  */
  const user = await client.user.upsert({
    where: {
      // ...(phone ? { phone: +phone } : {}),
      // ...(email ? { email } : {}),
      ...payload,
    },
    create: {
      name: "Anonymous",
      ...payload,
    },
    update: {},
  });
  console.log(user);
  return res.status(200).end();
}

export default withHandler("POST", handler);
