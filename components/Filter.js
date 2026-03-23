"use client";

import { Badge } from "./ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Input } from "./ui/input";
import { Separator } from "./ui/separator";

const Filter = () => {
  return (
    <aside className="lg:sticky lg:top-32">
      <Card className="rounded-[28px]">
        <CardHeader>
          <CardTitle>Refine the catalog</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <Input placeholder="Search products" />
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Collections
            </p>
            <div className="flex flex-wrap gap-2">
              {["Outerwear", "Bags", "Home", "Audio", "Office", "Daily carry"].map((item) => (
                <Badge key={item} variant="outline" className="rounded-full px-4 py-2">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
          <Separator />
          <div className="space-y-3">
            <p className="text-xs font-semibold uppercase tracking-[0.24em] text-muted-foreground">
              Price range
            </p>
            <div className="grid grid-cols-2 gap-3 text-sm text-muted-foreground">
              <div className="rounded-2xl bg-muted px-4 py-3">$0 - $50</div>
              <div className="rounded-2xl bg-muted px-4 py-3">$50 - $150</div>
              <div className="rounded-2xl bg-muted px-4 py-3">$150 - $300</div>
              <div className="rounded-2xl bg-muted px-4 py-3">$300+</div>
            </div>
          </div>
        </CardContent>
      </Card>
    </aside>
  );
};

export default Filter;
