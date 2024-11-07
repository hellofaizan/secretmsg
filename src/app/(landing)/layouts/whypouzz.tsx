import { Card, CardContent } from "@/components/ui/card";
import {
  Bot,
  ChartLine,
  HeartHandshake,
  Leaf,
  MessageCircle,
  Shield,
  SquareMousePointer,
} from "lucide-react";

export default function WhyPouzz() {
  const features = [
    {
      title: "Easy to use",
      description:
        "Create your profile on Pouzz app within a minute and start receiving confessions.",
      icon: <SquareMousePointer className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Analytics",
      description: "Track your profile's performance with built-in analytics.",
      icon: <ChartLine className="h-6 w-6 text-red-500" />,
    },
    {
      title: "No bots",
      description: "No bots or spammers to spam a user random confessions.",
      icon: <Bot className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Safe Data",
      description:
        "Your data is safe and sound with us and will only remain in here.",
      icon: <Shield className="h-6 w-6 text-red-500" />,
    },
    {
      title: "Anonymous",
      description:
        "Just keep sening confessions to others yours, No one will know who is this.",
      icon: <MessageCircle className="h-6 w-6 text-red-500" />,
    },
    {
      title: "24/7 Support",
      description:
        "If there is anything that you need help with, we are there for help",
      icon: <HeartHandshake className="h-6 w-6 text-red-500" />,
    },
  ];

  return (
    <section className="w-full py-6 md:py-4">
      <div className="w-full">
        <h2 className="mb-6 text-3xl font-bold tracking-tighter md:text-4xl">
          Why <span className="text-red-500">Pouzz</span> app??
        </h2>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="rounded-lg shadow-sm">
              <CardContent className="p-5">
                <div className="flex items-center gap-4">
                  <div className="space-y-1">
                    <div className="flex items-center gap-1 text-2xl font-semibold">
                      {feature.icon}
                      {feature.title}
                    </div>
                    <p className="text-sm text-muted-foreground">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
