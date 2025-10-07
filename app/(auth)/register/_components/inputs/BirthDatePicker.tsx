"use client";

import * as React from "react";
import { ChevronDownIcon } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

export function BirthDatePicker({ placeholder }: { placeholder: string }) {
  const [open, setOpen] = React.useState(false);
  const [date, setDate] = React.useState<Date>();

  return (
    <div className="">
      <Popover open={open} onOpenChange={setOpen}>
        <PopoverTrigger asChild>
          <Button
            variant="outline"
            id="date"
            className="w-[300px] justify-between font-normal"
          >
            {date ? date.toLocaleDateString() : placeholder}
            <ChevronDownIcon />
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w[300px]" align="center">
          <Calendar
            mode="single"
            selected={date}
            captionLayout="dropdown"
            onSelect={(date) => {
              setDate(date);
              setOpen(false);
            }}
            disabled={(date) => date > new Date()}
          />
        </PopoverContent>
      </Popover>
      <input
        type="hidden"
        defaultValue={date?.toLocaleDateString()}
        name="birthDate"
      />
    </div>
  );
}
