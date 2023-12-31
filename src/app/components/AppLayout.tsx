"use client";
import { useState } from "react";
import {
  AppShell,
  Navbar,
  Header,
  Footer,
  Aside,
  Text,
  MediaQuery,
  Burger,
  useMantineTheme,
  NavLink,
  createStyles,
  Group,
  Button,
} from "@mantine/core";
import {
  IconBrandYoutube,
  IconCode,
  IconCoinBitcoin,
  IconHome2,
  IconLogout,
  IconUserOff,
} from "@tabler/icons-react";
import Link from "next/link";
import { Image } from '@mantine/core';
import { FacebookIcon } from "../(authen)/login/FacebookIcon";

export default function AppLayout({ children }: { children: React.ReactNode }) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar
          p="md"
          hiddenBreakpoint="sm"
          hidden={!opened}
          width={{ sm: 200, lg: 300 }}
        >
          <Link href={"/"} style={{ textDecoration: "none" }}>
            <NavLink
              label="หน้าแรก"
              icon={<IconHome2 size="1rem" stroke={1.5} />}
            />
          </Link>

          <Link href={"about"} style={{ textDecoration: "none" }}>
            <NavLink
              label="ราคาเหรียญ"
              icon={<IconCoinBitcoin size="1rem" stroke={1.5} />}
            />
          </Link>

          <Link href={"testapi"} style={{ textDecoration: "none" }}>
            <NavLink
              label="สื่อที่น่าสนใจ"
              icon={<IconBrandYoutube size="1rem" stroke={1.5} />}
            />
          </Link>

        
        </Navbar>
      }
      footer={
        <Footer height={60} p="md">
          {/* Application footer */}
          <FacebookIcon />
        </Footer>
      }
      header={
        <Header height={{ base: 50, md: 70 }} p="md">
          <Group position="apart">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={opened}
                onClick={() => setOpened((o) => !o)}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>
            
            
            <Text>MONEYBIT COMPANY</Text>
          </Group>
        </Header>
      }
    >
      {children}
    </AppShell>
  );
}
