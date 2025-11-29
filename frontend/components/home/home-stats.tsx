"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
} from "react";
import {
  IconCar,
  IconTools,
  IconUsersGroup,
} from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Ripple } from "@/components/ui/shadcn-io/ripple";

type StatConfig = {
  label: string;
  description: string;
  value: number;
  suffix?: string;
  icon: ElementType;
  delta: string;
  accent: string;
};

const statConfig: StatConfig[] = [
  {
    label: "Cars indexed",
    description: "Latest trims, body styles, and pricing",
    value: 1840,
    suffix: "+",
    icon: IconCar,
    delta: "+86 today",
    accent: "text-primary",
  },
  {
    label: "Parts verified",
    description: "OEM stock plus trusted analogs",
    value: 12650,
    suffix: "+",
    icon: IconTools,
    delta: "+340 this week",
    accent: "text-amber-600",
  },
  {
    label: "Community members",
    description: "Reviewers, mechanics, and owners",
    value: 942,
    suffix: "",
    icon: IconUsersGroup,
    delta: "+23 today",
    accent: "text-emerald-600",
  },
];

function useAnimatedValue(target: number, duration = 1200) {
  const [value, setValue] = useState(0);

  useEffect(() => {
    let animationFrame: number;
    const start = performance.now();

    const step = (timestamp: number) => {
      const progress = Math.min((timestamp - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(target * eased));
      if (progress < 1) {
        animationFrame = requestAnimationFrame(step);
      }
    };

    animationFrame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(animationFrame);
  }, [target, duration]);

  return value;
}

function AnimatedStat({
  config,
}: {
  config: StatConfig;
}) {
  const value = useAnimatedValue(config.value);
  const Icon = config.icon;
  const formatted = useMemo(
    () => value.toLocaleString("ru-RU"),
    [value]
  );
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [tiltStyle, setTiltStyle] = useState<CSSProperties>({
    transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
  });

  const handlePointerMove = (event: React.PointerEvent<HTMLDivElement>) => {
    const node = containerRef.current;
    if (!node) return;
    const rect = node.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateX = ((rect.height / 2 - y) / rect.height) * 12;
    const rotateY = ((x - rect.width / 2) / rect.width) * 12;
    setTiltStyle({
      transform: `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02,1.02,1.02)`,
    });
  };

  const handlePointerLeave = () => {
    setTiltStyle({
      transform: "perspective(1200px) rotateX(0deg) rotateY(0deg)",
    });
  };

  return (
    <div
      ref={containerRef}
      className="group relative h-full w-full transition-transform duration-200 ease-out"
      style={tiltStyle}
      onPointerMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
      onPointerCancel={handlePointerLeave}
    >
      <Card className="relative overflow-hidden border-border/60 bg-card/90 shadow-lg">
        <div className="pointer-events-none absolute inset-0 opacity-40 transition-transform duration-500 ease-out group-hover:scale-110">
          <div className="absolute inset-x-[-30%] top-[-40%] h-[70%] bg-[radial-gradient(circle,_rgba(99,102,241,0.35),_transparent_65%)] blur-3xl" />
          <div className="absolute bottom-[-35%] left-[-10%] h-[60%] w-[70%] bg-[radial-gradient(circle,_rgba(59,130,246,0.25),_transparent_70%)] blur-3xl" />
        </div>
        <Ripple
          className="opacity-50"
          mainCircleSize={160}
          mainCircleOpacity={0.18}
          numCircles={5}
        />
        <CardHeader className="relative z-10 flex flex-row items-start justify-between gap-3">
          <div className="space-y-1">
            <CardDescription>{config.label}</CardDescription>
            <CardTitle className="text-3xl font-semibold tabular-nums">
              {formatted}
              <span className="text-muted-foreground">{config.suffix}</span>
            </CardTitle>
          </div>
          <Badge variant="secondary" className="flex items-center gap-1">
            <Icon className={`size-4 ${config.accent}`} />
            live
          </Badge>
        </CardHeader>
        <CardContent className="relative z-10 space-y-3 text-sm">
          <p className="text-muted-foreground">{config.description}</p>
          <Separator />
          <p className="font-medium text-foreground">{config.delta}</p>
        </CardContent>
      </Card>
    </div>
  );
}

export function HomeStats() {
  return (
    <section className="space-y-3">
      <div>
        <p className="text-sm uppercase tracking-wide text-muted-foreground">
          Live metrics
        </p>
        <h2 className="text-2xl font-semibold">LAuto refreshes inventory in real time</h2>
      </div>
      <div className="grid gap-4 md:grid-cols-3">
        {statConfig.map((config) => (
          <AnimatedStat key={config.label} config={config} />
        ))}
      </div>
    </section>
  );
}
