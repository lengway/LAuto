import Link from "next/link";
import {
  IconArrowRight,
  IconChecklist,
  IconGauge,
  IconMap2,
} from "@tabler/icons-react";

import { HomeSearchBar } from "@/components/home/home-search-bar";
import { HomeStats } from "@/components/home/home-stats";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const highlights = [
  {
    id: "catalog",
    label: "Catalog",
    title: "Every make, trim, and photo in one feed",
    description:
      "LAuto aggregates dealer CRMs, private listings, and community reviews to keep vehicle cards fresh.",
    metrics: [
      { label: "Brands", value: "52" },
      { label: "Trims", value: "3,200+" },
    ],
    bullets: [
      "Full spec sheets with photo galleries",
      "Regional pricing history and stock deltas",
      "Downloadable PDF manuals per trim",
    ],
    icon: IconMap2,
  },
  {
    id: "parts",
    label: "Parts",
    title: "Verified spare parts with VIN intelligence",
    description:
      "Tie OEM and aftermarket inventories to each car, so sourcing rare components stays transparent.",
    metrics: [
      { label: "Warehouses", value: "87" },
      { label: "VIN match", value: "98%" },
    ],
    bullets: [
      "VIN and part-number matching",
      "Arrival alerts for backordered items",
      "Price comparisons across regions",
    ],
    icon: IconChecklist,
  },
  {
    id: "service",
    label: "AI Manual",
    title: "Dual AI assistants for buying and fixing",
    description:
      "One model learns from real owner reviews, the other from DIY guides and manuals to guide repairs.",
    metrics: [
      { label: "Buyer prompts", value: "4k+" },
      { label: "Repair flows", value: "2.3k" },
    ],
    bullets: [
      "Spec-driven purchase recommendations",
      "Step-by-step repair walkthroughs",
      "Context-aware parts suggestions",
    ],
    icon: IconGauge,
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen bg-muted/20 py-10">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-10 px-4 sm:px-8 lg:px-12">
        <section className="grid gap-6 lg:grid-cols-[7fr,4fr]">
          <Card className="border border-primary/20 bg-gradient-to-br from-primary/5 via-background to-background shadow-lg">
            <CardHeader className="space-y-4">
              <Badge variant="outline" className="w-fit uppercase tracking-wider">
                LAuto · Beta
              </Badge>
              <div className="space-y-3">
                <CardTitle className="text-3xl sm:text-4xl lg:text-5xl">
                  A wider catalog, smarter reviews, faster DIY repairs
                </CardTitle>
                <CardDescription className="text-base leading-relaxed">
                  LAuto is a review-driven catalog for every car, trim, and spare part. Two AI models assist: one recommends builds based on community opinions, the other translates manuals and DIY guides into actionable steps.
                </CardDescription>
              </div>
            </CardHeader>
            <CardContent className="flex flex-col gap-4 border-t border-primary/10 pt-6 sm:flex-row sm:items-center sm:justify-between">
              <div className="text-base text-muted-foreground">
                50+ brands, 12k+ documented parts, and an active community of owners, dealers, and technicians.
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" asChild>
                  <Link href="/dashboard">
                    View dashboard
                    <IconArrowRight className="ml-2 size-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/docs">Read the docs</Link>
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="border-border/60 bg-card/80">
            <CardHeader>
              <CardTitle>Why LAuto?</CardTitle>
              <CardDescription>
                A single interface that merges reviews, inventory data, and AI maintenance playbooks.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-semibold">01</span>
                <p className="text-sm text-muted-foreground">
                  Native integrations with dealer CRMs and warehouse feeds keep listings trustworthy.
                </p>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <span className="font-semibold">02</span>
                <p className="text-sm text-muted-foreground">
                  Unified search across vehicles, spare parts, and reviewers saves time for pros and newcomers.
                </p>
              </div>
              <Separator />
              <div className="flex items-center gap-3">
                <span className="font-semibold">03</span>
                <p className="text-sm text-muted-foreground">
                  Transparent order statuses and live demand analytics power confident sourcing decisions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>

        <HomeSearchBar />

        <HomeStats />

        <section className="space-y-4">
          <div className="flex flex-col gap-2">
            <p className="text-sm uppercase tracking-wide text-muted-foreground">
              Platform capabilities
            </p>
            <h2 className="text-2xl font-semibold lg:text-3xl">
              Choose the workflow that matches your goal
            </h2>
          </div>
          <Tabs defaultValue="catalog" className="w-full">
            <TabsList className="grid grid-cols-1 gap-3 sm:grid-cols-3">
              {highlights.map((item) => (
                <TabsTrigger key={item.id} value={item.id} className="text-sm">
                  {item.label}
                </TabsTrigger>
              ))}
            </TabsList>
            {highlights.map((item) => {
              const Icon = item.icon;
              return (
                <TabsContent key={item.id} value={item.id}>
                  <Card className="border-border/60 bg-card/80">
                    <CardHeader className="flex flex-col gap-3">
                      <Icon className="size-5 text-primary" />
                      <div>
                        <CardTitle>{item.title}</CardTitle>
                        <CardDescription>{item.description}</CardDescription>
                      </div>
                    </CardHeader>
                    <CardContent className="grid gap-6 md:grid-cols-[2fr,1fr]">
                      <div className="space-y-3">
                        {item.bullets.map((bullet) => (
                          <div key={bullet} className="flex items-start gap-2 text-sm">
                            <span className="mt-1 size-1.5 rounded-full bg-primary" />
                            <p>{bullet}</p>
                          </div>
                        ))}
                      </div>
                      <div className="space-y-3 rounded-lg border border-dashed border-border/60 p-4 text-sm">
                        <p className="font-semibold text-muted-foreground">
                          Quick facts
                        </p>
                        {item.metrics.map((metric) => (
                          <div key={metric.label} className="flex items-center justify-between">
                            <span>{metric.label}</span>
                            <span className="font-semibold">{metric.value}</span>
                          </div>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              );
            })}
          </Tabs>
        </section>
      </div>
    </div>
  );
}
