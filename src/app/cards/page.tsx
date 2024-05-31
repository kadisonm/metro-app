'use client';

import Card from "@/components/card";

import { Plus } from "lucide-react";

import styles from './styles.module.scss'

export default function Cards() {
  return (
    <div className={styles.primary}>
      <h1>Cards</h1>

      <div className={styles.list}>
        <Card type='regular' />
        <Card type='regular' />
        <Card type='student' />
        <Card type='concession' />
        <Card type='student' /> 

        <div className={styles.new}>
          <Plus id="large"/>
        </div>
      </div>
    </div>
  );
}
