"use client";
import { Title } from "@mantine/core";
import React from "react";

export default function ShowTitle({ title }: any) {
  return (
    <Title
      variant="gradient"
      gradient={{ from: "indigo", to: "blue", deg: 0 }}
      ta="center"
      fz="xl"
      fw={700}
      order={4}
      underline
      color="white"
    >
      {title}
    </Title>
  );
}
