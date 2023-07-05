"use client"
import React from "react"
import Template from "./projects/template"
import data from "./projects/data"

export default function Portfolio() {
    const projects = data.map((item) => {
        return <Template {...item} key={item.id} />
    })
    return (
        <div className="grid  grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-10 m-4 mx-auto max-w-[1500px]">{projects}</div>
    )
}