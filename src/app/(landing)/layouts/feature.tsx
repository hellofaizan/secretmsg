import { Card, CardContent } from "@/components/ui/card";
import {
  ForwardIcon,
  Globe,
  Leaf,
  Link2,
  LinkIcon,
  MessageCircle,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: "link",
      title: "Create anonymous message link",
      description:
        "Receive anonymous confessions, messages and feedback via your unique link.",
    },
    {
      icon: "wave",
      title: "Share the profile link with friends",
      description:
        "Use platform like Twitter/X, Instagram, WhatsApp and more for sharing",
    },
    {
      icon: "bubble",
      title: "Find what people think about you",
      description:
        "The reived messages and feedback are private, only you can see them",
    },
    {
      icon: "web",
      title: "Publish your favourite message",
      description:
        "Share confessions from anonymous people on your social media and reply them",
    },
  ];

  const icon = (os: string) => {
    switch (os) {
      case "link":
        return <LinkIcon className="h-full w-full text-[#E73336]" />;
      case "wave":
        return <ForwardIcon className="h-full w-full text-[#E73336]" />;
      case "bubble":
        return <MessageCircle className="h-full w-full text-[#E73336]" />;
      case "web":
        return <Globe className="h-full w-full text-[#E73336]" />;
      default:
        return "💻";
    }
  };

  return (
    <div className="container w-full px-1 py-6 md:mt-3 md:py-10">
      <div className="grid w-full gap-4 md:gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {features.map((feature, index) => (
          <Card key={index} className="rounded-lg shadow-sm">
            <CardContent className="space-y-3 p-3 py-8">
              <div className="h-8 w-8">{icon(feature.icon)}</div>
              <h3 className="text-xl font-bold tracking-tight">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
