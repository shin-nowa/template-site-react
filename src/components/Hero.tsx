import React from "react";
import { siteData } from "../config/data.ts";

export default function Hero(){
    // const { headline, subheadline, ctaText, imageProfile } = siteData.hero;
    const { whatsapp } = siteData.infos;

    return (
        <section className ="relative w-full bg-white pt-12 pb-20 md:pt-24 md:pb-32 px-6">
            <div className = "max-w-6xl mx-auto">
                <h1 className = "text-4xl font-bold">Olá, site</h1>
                <p>Whatsapp : {whatsapp}</p>
            </div>
        </section>
    );
}