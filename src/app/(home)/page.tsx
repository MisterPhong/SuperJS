"use client";
import { Card } from "@mantine/core";
import ShowTitle from "../components/ShowTitle";
import ReadEmployee from "../components/ReadEmployee";
import { BackgroundImage, Center, Text } from '@mantine/core';

export default function Home() {
  const titlePage = "หน้าแรก";
  return (
    <>
    <BackgroundImage
        src="https://img.lovepik.com/background/20211022/large/lovepik-blue-tech-background-image_401949996.jpg"
      
        radius="sm">
           <Center p="md">
         
          <ShowTitle title={titlePage} />
        
        </Center>
        </BackgroundImage>
        <br></br>
        <ReadEmployee />
      {/* <Card>
        <ShowTitle title={titlePage} />
     <ReadEmployee />
      </Card> */}
    </>
  );
}
