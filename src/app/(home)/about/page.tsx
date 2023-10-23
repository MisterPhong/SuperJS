"use client";
import GetPublicAPI from "@/app/components/GetPublicAPI";
import { Card } from "@mantine/core";
import React from "react";
import { BackgroundImage, Center, Text } from '@mantine/core';

export default function AboutPage() {
  return (
    <>
      <BackgroundImage
        src="https://c.pxhere.com/images/2c/37/406ad689f3f47dd5c0aaddf1950a-1594501.jpg!d"
      
        radius="sm"
      >
        <Center p="md">
          <Text c="white">
          <h1>ราคาเหรียญ</h1>
          </Text>
        </Center>
      </BackgroundImage>
      <BackgroundImage
        src="https://i.pinimg.com/originals/f8/59/b2/f859b2ee04746b31948b8d569fd0acf0.jpg"
      
        radius="sm"
      >

          <GetPublicAPI />

      </BackgroundImage>
    </>
    // <>
    //   <Card>
    //     <h1>ราคาเหรียญ</h1>
    //     <GetPublicAPI />
    //   </Card>
    // </>
    //https://media.istockphoto.com/photos/space-stars-black-background-picture-id1211526766?b=1&k=6&m=1211526766&s=170667a&w=0&h=KInwpCs7DKbtiHf9PJ8dJR6KsQaCuKGcPc5B4fUOty0=
    //https://images.unsplash.com/photo-1614850523296-d8c1af93d400?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwxMjA3fDB8MXxzZWFyY2h8MXx8Z3JhZGF0aW9ufHwwfHx8fDE2Mjg4MTMwMzU&ixlib=rb-1.2.1&q=80&w=1080
  );
}
