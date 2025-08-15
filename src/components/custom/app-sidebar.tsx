import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupLabel, SidebarHeader, SidebarMenu, SidebarMenuButton, SidebarMenuItem } from "@/components/ui/sidebar"
import { Archive, ArrowUpCircleIcon, History, Home, Settings, UtensilsCrossed } from "lucide-react";
import Link from "next/link";

export const AppSidebar: React.FC = () => {
  return (
    <Sidebar>
      <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton asChild className='data-[slot=sidebar-menu-button:!p-1.5'>
              <a href='/'>
                <UtensilsCrossed className='h-5 w-5' />
                <span className='text-lg font-semibold'>Foodie</span>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Menu</SidebarGroupLabel>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <Link href={item.url} className="flex items-center">
                  <item.icon />
                  <span>{item.title}</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}

const items = [
  {
    title: 'Home',
    icon: Home,
    url: '/',
  },
  {
    title: 'Inventory',
    icon: Archive,
    url: '/inventory',
  },
  {
    title: 'Recipes',
    icon: Archive,
    url: '/recipes',
  },
  {
    title: 'History',
    icon: History,
    url: '/history',
  },
  {
    title: 'Settings',
    icon: Settings,
    url: '/settings',
  },
];
