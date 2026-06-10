"use client"

import { useState } from "react"
import Link from "next/link"
import {
  FileStack,
  Search,
  Menu,
  Bell,
  Settings,
  LogOut,
  User,
  ChevronDown,
} from "lucide-react"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { cn } from "@/lib/utils"

const navItems = [
  { label: "Все документы", active: true },
  { label: "Недавние", active: false },
  { label: "Общие", active: false },
  { label: "Избранное", active: false },
  { label: "Корзина", active: false },
]

export function TopNav() {
  const [active, setActive] = useState("Все документы")
  const [mobileOpen, setMobileOpen] = useState(false)

  return (
    <header className="sticky top-0 z-40 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        <div className="flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Открыть меню"
          >
            <Menu className="size-5" />
          </Button>
          <Link href="/" className="flex items-center gap-2">
            <span className="flex size-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
              <FileStack className="size-5" />
            </span>
            <span className="text-base font-semibold tracking-tight">
              ДокХаб
            </span>
          </Link>
        </div>

        <nav className="hidden md:flex items-center gap-1">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => setActive(item.label)}
              className={cn(
                "rounded-md px-3 py-2 text-sm font-medium transition-colors",
                active === item.label
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-2 sm:gap-3">
          <div className="relative hidden sm:block">
            <Search className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              type="search"
              placeholder="Поиск документов..."
              className="h-9 w-44 pl-9 lg:w-64"
              aria-label="Поиск документов"
            />
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="sm:hidden"
            aria-label="Поиск"
          >
            <Search className="size-5" />
          </Button>

          <Button
            variant="ghost"
            size="icon"
            aria-label="Уведомления"
            className="relative"
          >
            <Bell className="size-5" />
            <span className="absolute right-2 top-2 size-2 rounded-full bg-doc-pdf" />
          </Button>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <button className="flex items-center gap-2 rounded-full outline-none ring-ring focus-visible:ring-2">
                <Avatar className="size-9 border border-border">
                  <AvatarImage src="/diverse-avatars.png" alt="Анна Смирнова" />
                  <AvatarFallback>АС</AvatarFallback>
                </Avatar>
                <ChevronDown className="hidden size-4 text-muted-foreground lg:block" />
              </button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
              <DropdownMenuLabel>
                <div className="flex flex-col">
                  <span className="text-sm font-medium">Анна Смирнова</span>
                  <span className="text-xs font-normal text-muted-foreground">
                    anna@company.ru
                  </span>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <User className="size-4" />
                Профиль
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Settings className="size-4" />
                Настройки
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem variant="destructive">
                <LogOut className="size-4" />
                Выйти
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {mobileOpen && (
        <nav className="border-t border-border bg-background px-4 py-2 md:hidden">
          {navItems.map((item) => (
            <button
              key={item.label}
              onClick={() => {
                setActive(item.label)
                setMobileOpen(false)
              }}
              className={cn(
                "block w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors",
                active === item.label
                  ? "bg-secondary text-secondary-foreground"
                  : "text-muted-foreground hover:bg-secondary/60 hover:text-foreground",
              )}
            >
              {item.label}
            </button>
          ))}
        </nav>
      )}
    </header>
  )
}
