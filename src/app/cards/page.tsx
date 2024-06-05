'use client';

import Card from "@/components/card";

import { Plus } from "lucide-react";

import styles from './styles.module.scss'

export default function Cards() {
  return (
    <div className={styles.primary}>
      <h1>Cards</h1>

      <div className={styles.list}>
        <Card type='regular' edit={true} />
        <Card type='regular' edit={true} />
        <Card type='student' edit={true} />
        <Card type='concession' edit={true} />
        <Card type='student' edit={true} /> 

        {/* <div className={styles.new}>
          <Plus id="large"/>
        </div> */}
      </div>
    </div>
  );
}
