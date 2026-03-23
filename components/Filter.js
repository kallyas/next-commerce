"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Filter = () => {
  return (
    <aside className="lg:sticky lg:top-32">
      <Card className="gap-5 rounded-[2rem] border-none bg-card/85 py-5 shadow-sm ring-1 ring-black/5">
        <CardHeader className="px-5">
          <CardTitle className="text-lg">Shop filters</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6 px-5">
          <div className="space-y-2">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Search
            </p>
            <Input className="h-10 rounded-full bg-background" placeholder="Search products" />
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Category
            </p>
            <div className="flex flex-wrap gap-2">
              {["All", "Fashion", "Electronics", "Jewelry", "Home"].map((item, index) => (
                <Badge
                  key={item}
                  variant={index === 0 ? "default" : "outline"}
                  className="rounded-full px-3 py-1.5"
                >
                  {item}
                </Badge>
              ))}
            </div>
          </div>

          <Separator />

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Price range
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              {["$0 - $50", "$50 - $150", "$150 - $300", "$300+"].map((item) => (
                <div key={item} className="rounded-2xl bg-muted/80 px-4 py-3">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-muted-foreground">
              Store promise
            </p>
            <div className="space-y-2 rounded-2xl bg-secondary p-4 text-sm text-muted-foreground">
              <p>Curated catalog</p>
              <p>Free shipping over $100</p>
              <p>14-day returns</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Filter;
