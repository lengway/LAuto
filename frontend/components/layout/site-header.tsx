"use client";

import {
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import Link from "next/link";
import {
  IconMessageChatbot,
  IconMicrophone,
  IconSend,
} from "@tabler/icons-react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { cn } from "@/lib/utils";

type NavigationSection = {
  title: string;
  href?: string;
  links?: Array<{
    label: string;
    href: string;
    description: string;
  }>;
};

const navigationSections: NavigationSection[] = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Catalog",
    links: [
      {
        label: "All Brands",
        href: "/brands",
        description: "Browse trims, body styles, and regional offers.",
      },
      {
        label: "Compare",
        href: "/brands/compare",
        description: "Contrast specs to build the right configuration.",
      },
    ],
  },
  {
    title: "Parts",
    href: "/parts",
  },
  {
    title: "Profile",
    href: "/profile",
    links: [
      {
        label: "Dashboard",
        href: "/profile",
        description: "Personal activity, saved searches, and stats.",
      },
      {
        label: "Reviews",
        href: "/profile/reviews",
        description: "Manage your published vehicle feedback.",
      },
      {
        label: "Garage",
        href: "/profile/garage",
        description: "Cars you own, follow, or service.",
      },
    ],
  },
  {
    title: "AI Manuals",
    links: [
      {
        label: "Buying Assistant",
        href: "/ai/buyer",
        description: "Ask AI for trim advice trained on real reviews.",
      },
      {
        label: "Repair Mentor",
        href: "/ai/repair",
        description: "DIY instructions distilled from manuals and guides.",
      },
    ],
  },
];

function NavigationLinkItem({ section }: { section: NavigationSection }) {
  return (
    <NavigationMenuItem>
      <NavigationMenuLink asChild>
        <Link href={section.href ?? "/"} className={navigationMenuTriggerStyle()}>
          {section.title}
        </Link>
      </NavigationMenuLink>
    </NavigationMenuItem>
  );
}

function ResponsiveNavigationItem({
  section,
}: {
  section: NavigationSection;
}) {
  if (!section.links?.length) {
    return <NavigationLinkItem section={section} />;
  }

  const triggerRef = useRef<HTMLElement | null>(null);
  const [alignRight, setAlignRight] = useState(false);

  const updateAlignment = useCallback((node?: HTMLElement | null) => {
    const target = node ?? triggerRef.current;
    if (!target) return;

    triggerRef.current = target;
    const rect = target.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const estimatedPanelWidth = 280;
    const shouldFlip = rect.right + estimatedPanelWidth > viewportWidth;
    setAlignRight(shouldFlip);
  }, []);

  useEffect(() => {
    updateAlignment();
    const handleResize = () => updateAlignment();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [updateAlignment]);

  const handlePointerEnter = (
    event: React.PointerEvent<HTMLButtonElement>
  ) => {
    updateAlignment(event.currentTarget);
  };

  const handleFocus = (event: React.FocusEvent<HTMLButtonElement>) => {
    updateAlignment(event.currentTarget);
  };

  return (
    <NavigationMenuItem>
      <NavigationMenuTrigger
        ref={(node) => {
          triggerRef.current = node;
        }}
        onPointerEnter={handlePointerEnter}
        onFocus={handleFocus}
        className="relative group/nav-trigger"
      >
        {section.title}
        <span
          className="pointer-events-none absolute left-1/2 top-[calc(100%+4px)] hidden h-2 w-2 -translate-x-1/2 rotate-45 rounded-sm bg-border shadow-md transition-all duration-200 group-data-[state=open]/nav-trigger:flex"
        />
      </NavigationMenuTrigger>
      <NavigationMenuContent
        className={cn(
          "min-w-[220px] max-w-[calc(100vw-32px)] space-y-1 rounded-lg md:w-[260px]",
          alignRight
            ? "md:left-auto md:right-0 md:origin-top-right"
            : "md:left-0 md:right-auto md:origin-top-left"
        )}
      >
        <ul
          className={cn(
            "space-y-1",
            alignRight ? "text-right" : "text-left"
          )}
        >
          {section.links.map((link) => (
            <li key={link.label}>
              <NavigationMenuLink asChild>
                <Link
                  href={link.href}
                  className={cn(
                    "block rounded-md border border-transparent px-3 py-2 transition-colors hover:border-border",
                    alignRight ? "text-right" : "text-left"
                  )}
                >
                  <p className="text-sm font-medium">{link.label}</p>
                  <p className="text-xs text-muted-foreground">
                    {link.description}
                  </p>
                </Link>
              </NavigationMenuLink>
            </li>
          ))}
        </ul>
      </NavigationMenuContent>
    </NavigationMenuItem>
  );
}

export function SiteHeader() {
  const [chatOpen, setChatOpen] = useState(false);
  const [chatMode, setChatMode] = useState<"buy" | "repair">("buy");
  const [chatMessage, setChatMessage] = useState("");

  return (
    <>
      <header className="px-6 py-4">
        <div className="flex items-center gap-6">
          <Link
            href="/"
            className="flex items-center gap-3 rounded-2xl border border-border/60 bg-card/70 px-4 py-2 text-foreground shadow-sm backdrop-blur"
          >
            <span className="text-2xl font-semibold tracking-tight">LAuto</span>
          </Link>
          <div className="ml-auto w-fit max-w-full">
            <NavigationMenu viewport={false} className="flex-none justify-end">
              <NavigationMenuList className="flex-none justify-end gap-1">
                {navigationSections.map((section) => (
                  <ResponsiveNavigationItem key={section.title} section={section} />
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </header>

      <Sheet open={chatOpen} onOpenChange={setChatOpen}>
        <SheetTrigger asChild>
          <Button
            variant="default"
            size="lg"
            className="fixed bottom-6 left-6 z-50 gap-2 rounded-full shadow-xl"
          >
            <IconMessageChatbot className="size-5" />
            AI chat
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="w-full max-w-md border-r px-0 py-0">
          <div className="flex h-full flex-col">
            <SheetHeader className="border-b px-6 py-4 text-left">
              <SheetTitle>LAuto AI assistant</SheetTitle>
              <SheetDescription>
                Ask for a build recommendation or get help with a repair procedure.
              </SheetDescription>
            </SheetHeader>
            <div className="flex-1 space-y-4 overflow-y-auto px-6 py-4 text-sm">
              <div className="space-y-2">
                <p className="text-xs uppercase text-muted-foreground">Today</p>
                <div className="w-fit rounded-xl bg-primary/10 px-3 py-2 text-primary">
                  Need a family SUV with hybrid drivetrain under $60k.
                </div>
                <div className="w-fit rounded-xl bg-card px-3 py-2 text-foreground">
                  Checking 2024 Lexus RX 500h F SPORT and Volvo XC90 Recharge for you.
                </div>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase text-muted-foreground">Auto suggestions</p>
                <div className="rounded-xl border border-dashed border-border/70 bg-card/50 p-3 text-foreground">
                  Switch to repair mode to ask about torque specs, DIY steps, or compatible part numbers.
                </div>
              </div>
            </div>
            <div className="space-y-3 border-t px-6 py-4">
              <div className="flex gap-2">
                <Button
                  type="button"
                  variant={chatMode === "buy" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setChatMode("buy")}
                >
                  Vehicle match
                </Button>
                <Button
                  type="button"
                  variant={chatMode === "repair" ? "default" : "outline"}
                  className="flex-1"
                  onClick={() => setChatMode("repair")}
                >
                  Repair guidance
                </Button>
              </div>
              <div className="space-y-2">
                <label className="text-sm text-muted-foreground" htmlFor="ai-chat-input">
                  {chatMode === "buy"
                    ? "Describe the desired vehicle (budget, body style, usage)."
                    : "Describe the symptom, part, or repair you need guidance with."}
                </label>
                <textarea
                  id="ai-chat-input"
                  value={chatMessage}
                  onChange={(event) => setChatMessage(event.target.value)}
                  className="min-h-[90px] w-full resize-none rounded-xl border border-border/60 bg-background/80 p-3 text-sm shadow-inner focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                  placeholder="Type your message or dictate it via voice."
                />
              </div>
              <div className="flex items-center justify-end gap-2">
                <Button variant="ghost" size="icon" type="button" title="Voice input">
                  <IconMicrophone className="size-4" />
                </Button>
                <Button type="button" size="icon" title="Send message">
                  <IconSend className="size-4" />
                </Button>
              </div>
            </div>
          </div>
        </SheetContent>
      </Sheet>
    </>
  );
}
