"use server";

import axios from "axios";

export default async function JoinedWebhook(data: any) {
  var myEmbed = {
    title: `${data.user.name} joined Pouzz`,
    description: `We got a new user on Pouzz app - ${data.user.email}`,
    color: hexToDecimal("#00ff00"),
    thumbnail: {
      url: data.user.image,
    },
    timestamp: new Date(data.user.joinedAt),
  };

  var params = {
    username: "Join Logs",
    content: "<@890232380265222215>",
    embeds: [myEmbed],
  };

  function hexToDecimal(hex: string) {
    return parseInt(hex.replace("#", ""), 16);
  }

  try {
    await axios.post(process.env.NEXT_PUBLIC_WEBHOOK_URL || "", params, {
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.error("Error sending webhook:", error);
  }

  return;
}
