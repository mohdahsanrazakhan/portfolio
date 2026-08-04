"use client";

import { useEffect, useRef, useState } from "react";
import { Search, X } from "lucide-react";
import { cn } from "@/lib/utils";

interface ExpandingSearchDockProps {
  value: string;
  onValueChange: (value: string) => void;
  placeholder?: string;
  width?: number;
  className?: string;
}

export function ExpandingSearchDock({
  value,
  onValueChange,
  placeholder = "Search...",
  width = 240,
  className,
}: ExpandingSearchDockProps) {
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  const handleClose = () => {
    setIsOpen(false);
    onValueChange("");
  };

  return (
    <div className={cn("flex items-center justify-end", className)}>
      <div
        className={cn(
          "flex items-center rounded-full transition-all duration-300 ease-in-out overflow-hidden",
          isOpen
            ? "border border-input bg-background shadow-xs px-1"
            : "border-transparent"
        )}
        style={{ width: isOpen ? width : 36 }}
      >
        <button
          type="button"
          onClick={() => (isOpen ? handleClose() : setIsOpen(true))}
          aria-label={isOpen ? "Close search" : "Open search"}
          className={cn(
            "flex items-center justify-center h-9 w-9 shrink-0 rounded-full transition-colors",
            !isOpen && "border border-input bg-background hover:bg-accent"
          )}
        >
          <Search className="h-4 w-4 text-muted-foreground" />
        </button>

        <input
          ref={inputRef}
          value={value}
          onChange={(event) => onValueChange(event.target.value)}
          placeholder={placeholder}
          tabIndex={isOpen ? 0 : -1}
          className={cn(
            "flex-1 min-w-0 bg-transparent text-sm outline-none placeholder:text-muted-foreground transition-opacity duration-200",
            isOpen ? "opacity-100" : "opacity-0"
          )}
        />

        {isOpen && (
          <button
            type="button"
            onClick={handleClose}
            aria-label="Clear search"
            className="flex items-center justify-center h-6 w-6 shrink-0 rounded-full border border-input hover:bg-accent"
          >
            <X className="h-3.5 w-3.5" />
          </button>
        )}
      </div>
    </div>
  );
}
