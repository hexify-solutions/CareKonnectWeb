"use client"
import { withZoom } from "@/hoc/withZoom";
import { useEffect } from "react";
import styles from "./meeting.module.css";

const Meeting = ({zoomElementRef }) => {


    return <div ref={zoomElementRef}>this is the Meeting again</div>
}

export default withZoom(Meeting);
