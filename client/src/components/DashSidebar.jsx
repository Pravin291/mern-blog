import React, { useEffect, useState } from "react";
import { Sidebar, SidebarItem } from "flowbite-react";
import { HiArrowSmRight, HiUser } from "react-icons/hi";
import { Link, useLocation } from "react-router-dom";
export default function DashSidebar() {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <Sidebar className="w-full md:w-56">
      <Sidebar.Items>
        <Sidebar.ItemGroup>
          <Link to="/dashboard?tab=profile">
            <SidebarItem
              active={tab === "profile"}
              icon={HiUser}
              label={"User"}
              labelColor="dark"
            >
              Profile
            </SidebarItem>
          </Link>
          <SidebarItem icon={HiArrowSmRight} className="cursor-pointer">
            Sign Out
          </SidebarItem>
        </Sidebar.ItemGroup>
      </Sidebar.Items>
    </Sidebar>
  );
}
