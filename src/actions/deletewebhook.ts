"use server";

import axios from "axios";

export default async function DeleteWebhook(data: any) {
  var myEmbed = {
    title: `${data.user.name} deleted his Pouzz account`,
    description: `Another user just left Pouzz app - ${data.user.email}`,
    color: hexToDecimal("#ff0000"),
    thumbnail: {
      url: data.user.image,
    },
    timestamp: new Date(),
  };

  var params = {
    username: "Delete Logs",
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
