"use client";

import { useMemo, useState } from "react";
import { IconSparkles } from "@tabler/icons-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";

const searchTypes = [
  { label: "Part", value: "part" },
  { label: "Car", value: "car" },
  { label: "Reviewer", value: "user" },
];

const promptHints = [
  "Toyota Land Cruiser 2024 review",
  "Left headlight BMW F30",
  "Alex Morgan (garage manager)",
];

export function HomeSearchBar() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState(searchTypes[0].value);
  const [helper, setHelper] = useState(promptHints[0]);

  const placeholder = useMemo(
    () => `For example: ${helper}`,
    [helper]
  );

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextHint = promptHints[(promptHints.indexOf(helper) + 1) % promptHints.length];
    setHelper(nextHint);
  };

  return (
    <Card className="w-full overflow-hidden border border-primary/10 bg-card/90">
      <CardHeader className="flex flex-col gap-3">
        <div className="flex items-center gap-2 text-primary">
          <IconSparkles className="size-4" />
          <Badge variant="outline" className="uppercase tracking-wide">
            First search
          </Badge>
        </div>
        <div>
          <CardTitle className="text-2xl">Start exploring LAuto</CardTitle>
          <CardDescription>
            Find the right car, locate a hard-to-source part, or reach out to a reviewer. Our AI manual keeps you on track.
          </CardDescription>
        </div>
      </CardHeader>
      <Separator />
      <CardContent className="space-y-4 pt-6">
        <form
          className="flex flex-col gap-3 md:flex-row"
          onSubmit={handleSubmit}
        >
          <div className="flex-1 space-y-2">
            <Label htmlFor="home-search">What do you need?</Label>
            <Input
              id="home-search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder={placeholder}
              className="h-14"
            />
          </div>
          <div className="min-w-[180px] space-y-2">
            <Label>Type</Label>
            <Select value={category} onValueChange={setCategory}>
              <SelectTrigger className="h-14">
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent align="end">
                {searchTypes.map((type) => (
                  <SelectItem key={type.value} value={type.value}>
                    {type.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="flex items-end">
            <Button type="submit" size="lg" className="h-14 w-full md:w-32">
              Search
            </Button>
          </div>
        </form>
        <p className="text-sm text-muted-foreground">
          Tip: start with a VIN, trim nickname, or part number. LAuto autocompletes the rest.
        </p>
      </CardContent>
    </Card>
  );
}
