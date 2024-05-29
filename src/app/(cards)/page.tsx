'use client';

import Card from "@/components/card";

export default function Cards() {
  return (
    <>
      <h1>Cards</h1>
      <Card type='regular' />
      <Card type='regular' />
      <Card type='student' />
      <Card type='concession' />
      <Card type='student' /> 
    </>
  );
}
